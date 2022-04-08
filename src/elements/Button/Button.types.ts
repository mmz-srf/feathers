import { ReactElement } from "react";
import { ButtonModifiersType } from "./Button";
import { IconProps } from "../Icon/Icon.types";
import { TooltipProps } from "../Tooltip/Tooltip.types";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ButtonProps {
  modifier?: ButtonModifiersType | Array<ButtonModifiersType>;
  children?: JSX.Element;
  text?: string;
  title?: string;
  onClick?: (any) => any;
  icon?: ReactElement<IconProps>;
  disabled?: boolean;
  tabIndex?: number;
  dataId?: string;
  dataCy?: string;
  tooltip?: ReactElement<TooltipProps>;
}
/* eslint-enable @typescript-eslint/no-explicit-any */
