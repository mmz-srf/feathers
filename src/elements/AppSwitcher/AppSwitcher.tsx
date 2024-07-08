import React, { useRef, useState } from 'react';
import classNames from 'classnames';

import { DropdownPane } from '../Dropdown/Dropdown';
import Button from '../Button/Button';
import { CaretIcon } from '../Icon/Icon';

//Helpers
import useOutsideClickListener from '../../hooks/useOutsideClickListener';

import {
  AppSwitcherButtonProps,
  AppSwitcherProps,
  birdsType,
} from './AppSwitcher.types';

import './AppSwitcher.scss';
import Logo from '../Logo/Logo';
import Hint from '../Hint/Hint';

export const BirdsModifiers = [
  'schorsch',
  'roebi',
  'karl',
  'pitt',
  'tweety',
  'dashboard',
] as const;

export type BirdsModifiersType = (typeof BirdsModifiers)[number];

const birds: birdsType[] = [
  {
    id: 'schorsch',
    path: '/articles',
    label: 'Schorsch',
    hint: 'Artikelliste',
  },
  {
    id: 'roebi',
    path: '/pages',
    label: 'Röbi',
    hint: 'LP-Verwaltung',
  },
  {
    id: 'karl',
    path: '/rubrics',
    label: 'Karl',
    hint: 'Rubriken-Editor',
  },
  {
    id: 'pitt',
    path: '/cockpit',
    label: 'Cock Pitt',
    hint: 'Cockpit',
  },
  {
    id: 'tweety',
    path: '/list/new',
    label: 'Tweety',
    hint: 'Kommentar-Verwaltung',
  },
  {
    id: 'dashboard',
    path: '/dashboard',
    label: 'Dashboard',
    hint: 'Statistiken & Co.',
  },
];

const AppSwitcher = ({
  modifier,
  currentBirdId,
  currentPortal = 'news',
  phase = 'dev',
  disabled = false,
  children = null,
}: AppSwitcherProps) => {
  const [open, setOpen] = useState(false);
  const dropdownPanelRef = useRef(null);
  const dropdownButtonRef = useRef(null);

  // useOutsideClickListener hook
  useOutsideClickListener(dropdownPanelRef, (event) => {
    if (
      dropdownButtonRef.current &&
      !dropdownButtonRef.current.contains(event.target)
    ) {
      setOpen(false);
    }
  });

  const handleDropdownPanelClick = (event) => {
    if (dropdownPanelRef.current?.contains(event.target)) {
      setOpen(false);
    }
  };

  const onCaretClick = () => {
    if (open) {
      (document.activeElement as HTMLElement).blur();
    }
    setOpen(!open);
  };

  const birdselection = birds.filter((bird) => bird.id !== currentBirdId);

  return (
    <div
      className={classNames('f-app-switcher', modifier, {
        'f-app-switcher--unclickable': disabled,
      })}
      ref={dropdownButtonRef}
      onClick={handleDropdownPanelClick}>
      <div className="f-app-switcher__button-container">
        <Button
          onClick={onCaretClick}
          modifier={['unobtrusive', 'tiny']}
          icon={<Logo bird={currentBirdId} />}>
          {!disabled && (
            <span className="f-app-switcher__caret-fixer">
              <CaretIcon
                modifier={['tiny', 'rotatable', open ? 'rotated-180' : null]}
              />
            </span>
          )}
        </Button>
      </div>

      {open && (
        <div className="f-app-switcher__dropdown">
          <DropdownPane ref={dropdownPanelRef} modifier="open_to_right">
            <div className="f-app-switcher__birds">
              {
                //check if children are passed and render them instead of the birds
                children
                  ? children
                  : birdselection.map((bird: birdsType) => (
                      <a
                        href={getBirdUrl(bird, currentPortal, phase)}
                        key={bird.id}>
                        <AppSwitcherButton bird={bird} />
                      </a>
                    ))
              }
            </div>
          </DropdownPane>
        </div>
      )}
    </div>
  );
};

export const AppSwitcherButton = ({ bird }: AppSwitcherButtonProps) => (
  <Button icon={<Logo bird={bird.id} />} modifier={['fullwidth']}>
    <div className="f-app-switcher-button__bird-label">
      <p>{bird.label}</p>
      <Hint modifier={'left'}>{bird.hint}</Hint>
    </div>
  </Button>
);

const getBirdUrl = (bird, portal, phase) => {
  let baseUrl;

  //Tweety bird
  if (bird.id === 'tweety') {
    switch (phase) {
      case 'local':
        baseUrl = 'http://localhost:8050/';
        break;
      case 'dev':
        baseUrl = 'https://srf-comments-dev.herokuapp.com/';
        break;
      case 'int':
        baseUrl = 'https://srf-comments-int.herokuapp.com/';
        break;
      case 'prod':
        baseUrl = 'https://comments.srfdigital.ch/';
        break;
    }

    return baseUrl + 'moderation/' + portal + bird.path;
  }

  //Nora birds
  switch (phase) {
    case 'local':
      baseUrl = 'http://localhost:6900/';
      break;
    case 'dev':
      baseUrl = 'https://nora.dev.srfdigital.ch/';
      break;
    case 'int':
      baseUrl = 'https://nora.int.srfdigital.ch/';
      break;
    case 'prod':
      baseUrl = 'https://nora.srfdigital.ch/';
      break;
  }

  return baseUrl + 'ui/' + portal + bird.path;
};

export default AppSwitcher;
