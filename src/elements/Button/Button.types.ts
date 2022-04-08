import {MouseEventHandler, ReactElement} from "react";
import { ButtonModifiersType } from "./Button";
import { IconProps } from "../Icon/Icon.types";
import { TooltipProps } from "../Tooltip/Tooltip.types";

export interface ButtonProps {
  modifier?: ButtonModifiersType | Array<ButtonModifiersType>;
  children?: JSX.Element;
  text?: string;
  title?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactElement<IconProps>;
  disabled?: boolean;
  tabIndex?: number;
  dataId?: string;
  dataCy?: string;
  tooltip?: ReactElement<TooltipProps>;
}
