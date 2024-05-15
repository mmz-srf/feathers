import { ReactElement } from 'react';
import { ConfirmButtonModifiersType } from './ConfirmButton';
import { IconProps } from '../Icon/Icon.types';
import { ButtonModifiersType } from '../Button/Button';

export interface ConfirmButtonProps {
  modifier?: ConfirmButtonModifiersType | Array<ConfirmButtonModifiersType>;
  buttonModifier?: Array<ButtonModifiersType>;
  text?: string;
  allowInstantConfirmation?: boolean;
  confirmText?: string;
  iconsOnly?: boolean;
  callback?: () => void;
  onConfirmationCallback: () => void;
  onAbortCallback?: () => void;
  icon?: ReactElement<IconProps>;
  disabled?: boolean;
}
