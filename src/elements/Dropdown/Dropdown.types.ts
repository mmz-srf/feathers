import React, { ReactElement, RefObject } from 'react';
import { DropdownPaneModifiersType } from './Dropdown';
import { ButtonModifiersType } from '../Button/Button';
import { IconProps } from '../Icon/Icon.types';
import { TooltipProps } from '../Tooltip/Tooltip.types';

export interface DropdownPaneProps {
  modifier?: DropdownPaneModifiersType | Array<DropdownPaneModifiersType>;
  children: React.ReactNode;
  ref?: RefObject<HTMLDivElement>;
}

export interface DropdownButtonProps {
  onClick: (event) => void;
  icon?: ReactElement<IconProps, string>;
  text: string;
  textOpen?: string;
  modifier?: string;
  buttonModifier?: Array<ButtonModifiersType>;
  dropdownPaneModifier?: Array<DropdownPaneModifiersType>;
  disabled?: boolean;
  tooltip?: ReactElement<TooltipProps, string>;
  children: React.ReactNode;
  inProgress?: boolean;
  initiallyOpen?: boolean;
  badge?: string;
  dataCy?: unknown;
}
