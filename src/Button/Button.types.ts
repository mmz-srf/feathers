import { ButtonModifiers } from "./Button";
import {IconProps} from "../Icon/Icon.types";
import {ReactElement} from "react";

export interface ButtonProps {
  modifier?: ButtonModifiers | Array<ButtonModifiers>;
  children?: JSX.Element;
  text?: string;
  title?: string;
  onClick?: (any) => any; // TODO - specific parameters/return types
  icon?: ReactElement<IconProps>;
  disabled?: boolean;
  tabIndex?: number;
  dataId?: string;
  dataCy?: string;
  tooltip?: any;
}

export interface ButtonTooltipProps {
  modifier?: string;
  content: string;
  direction?: string;
}
