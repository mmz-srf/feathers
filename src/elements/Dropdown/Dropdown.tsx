import React, { useRef, useState } from 'react';
import classNames from 'classnames';

//Faerhers components
import Button, { ButtonModifiersType, ButtonTooltip } from '../Button/Button';
import { CaretIcon, IconModifiersType } from '../Icon/Icon';

//Helpers
import useOutsideClickListener from '../../hooks/useOutsideClickListener';

import { DropdownPaneProps, DropdownButtonProps } from './Dropdown.types';

import './Dropdown.scss';
import ProgressDisplay from '../ProgressDisplay/ProgressDisplay';
import Badge from '../Badge/Badge';

// DropdownPane
export const DropdownPaneModifiers = [
  'scrollable',
  'transparent',
  'open_upwards',
  'open_to_right',
] as const;

export type DropdownPaneModifiersType = (typeof DropdownPaneModifiers)[number];

export const DropdownPane = React.forwardRef<HTMLDivElement, DropdownPaneProps>(
  ({ modifier, children }, ref) => (
    <div
      className={classNames('f-dropdown-panel', {
        'f-dropdown-panel--scrollable': modifier?.includes('scrollable'),
        'f-dropdown-panel--transparent': modifier?.includes('transparent'),
        'f-dropdown-panel--upside-down': modifier?.includes('open_upwards'),
        'f-dropdown-panel--left': modifier?.includes('open_to_right'),
      })}
      ref={ref}>
      {children}
    </div>
  ),
);

DropdownPane.displayName = 'DropdownPane';

//DropdownButton
const DropdownButton = ({
  onClick,
  icon,
  modifier,
  buttonModifier = [],
  dropdownPaneModifier = [],
  disabled = false,
  text = '',
  textOpen = text,
  tooltip = null,
  children,
  inProgress = false,
  initiallyOpen = false,
  badge = '',
  dataCy = null,
}: DropdownButtonProps) => {
  const [open, setOpen] = useState(initiallyOpen);
  const dropdownPanelRef = useRef(null);
  const dropdownButtonRef = useRef(null);

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

  const onMainButtonClick = (event) => {
    if (onClick) {
      onClick(event);
    } else {
      onCaretClick();
    }
  };

  if (open && inProgress) {
    setOpen(false);
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className={classNames('f-dropdown-button', modifier)}
      ref={dropdownButtonRef}
      data-cy={dataCy}
      onClick={handleDropdownPanelClick}
      onKeyDown={handleDropdownPanelClick}>
      <Button
        icon={icon}
        text={open ? textOpen : text}
        disabled={disabled || inProgress}
        onClick={onMainButtonClick}
        modifier={
          [
            'no_outline',
            ...buttonModifier,
            inProgress ? 'invisible_content' : '',
          ] as Array<ButtonModifiersType>
        }
        tooltip={!open && tooltip ? tooltip : null}
      />

      <Button
        icon={
          <CaretIcon
            modifier={
              [
                'rotatable',
                open ? 'rotated-180' : '',
              ] as Array<IconModifiersType>
            }
          />
        }
        disabled={disabled || inProgress}
        onClick={onCaretClick}
        modifier={
          [
            'no_outline',
            ...buttonModifier,
            inProgress ? 'invisible_content' : '',
          ] as Array<ButtonModifiersType>
        }
        tooltip={
          open ? null : (
            <ButtonTooltip
              content="Weitere Optionen anzeigen"
              direction="down-edge-right"
              modifier={['no_min_width']}
            />
          )
        }
      />

      {badge && <Badge>{badge}</Badge>}

      {open && (
        <DropdownPane modifier={dropdownPaneModifier} ref={dropdownPanelRef}>
          {children}
        </DropdownPane>
      )}
      {inProgress && <ProgressDisplay />}
    </div>
  );
};

export default DropdownButton;
