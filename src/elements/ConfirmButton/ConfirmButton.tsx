import React, { useState } from 'react';
import classNames from 'classnames';

import { ConfirmButtonProps } from './ConfirmButton.types';

import './ConfirmButton.scss';
import Button from '../Button/Button';
import { CheckIcon, CloseIcon, TrashcanIcon } from '../Icon/Icon';

export const ConfirmButtonModifiers = ['article', 'left'] as const;
export type ConfirmButtonModifiersType =
  (typeof ConfirmButtonModifiers)[number];

const ConfirmButton: React.FC<ConfirmButtonProps> = ({
  modifier,
  buttonModifier = [],
  onConfirmationCallback = () => {},
  callback = () => {},
  onAbortCallback = () => {},
  text = 'Löschen',
  confirmText = 'Sind Sie sicher?',
  disabled = false,
  allowInstantConfirmation = false,
  iconsOnly = false,
  icon,
}) => {
  const [confirming, setConfirming] = useState(false);

  const handleClick = (event) => {
    if (allowInstantConfirmation) {
      confirm(event);
      return;
    }

    event.stopPropagation();
    event.preventDefault();

    setConfirming(true);
    onConfirmationCallback();
  };

  const confirm = (event) => {
    event.stopPropagation();
    event.preventDefault();

    setConfirming(false);
    callback();
  };

  const abort = (event) => {
    event.stopPropagation();
    event.preventDefault();

    setConfirming(false);
    onAbortCallback();
  };

  return (
    <div
      className={classNames('f-confirm-button', modifier, {
        'f-confirm-button--confirming': confirming,
      })}>
      {!confirming ? (
        <Button
          text={iconsOnly ? null : text}
          onClick={handleClick}
          modifier={['danger', 'fullwidth', ...buttonModifier]}
          icon={icon || <TrashcanIcon />}
          disabled={disabled}
        />
      ) : (
        <>
          <div className="f-confirm-button__confirmation">
            <p className="f-confirm-button__confirmation-text">{confirmText}</p>
            <Button
              text={iconsOnly ? '' : 'Ja'}
              onClick={confirm}
              modifier={['danger']}
              icon={<CheckIcon />}
            />

            <Button
              text={iconsOnly ? '' : 'Nein'}
              onClick={abort}
              icon={<CloseIcon />}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ConfirmButton;
