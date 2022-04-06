import { ReactElement } from "react";
import { ButtonModifiers } from "./Button";
import { IconProps } from "../Icon/Icon.types";
import { TooltipProps } from "../Tooltip/Tooltip.types";

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
  tooltip?: ReactElement<TooltipProps>;
}
