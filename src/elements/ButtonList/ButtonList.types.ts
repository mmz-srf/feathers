import { ReactElement } from 'react';
import { TooltipProps } from '../Tooltip/Tooltip.types';
import { IconProps } from '../Icon/Icon.types';

export interface ButtonListProps {
  modifier?: string | Array<string>;
  children: React.ReactNode;
}

export interface ButtonListEntryProps {
  modifier?: string | Array<string>;
  icon?: ReactElement<IconProps>;
  text: string;
  onClick: (event) => void;
  tooltip?: ReactElement<TooltipProps>;
}
