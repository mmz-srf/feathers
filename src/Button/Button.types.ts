import { ButtonModifiers } from "./Button";

export interface ButtonProps {
  modifier?: ButtonModifiers | Array<ButtonModifiers>;
  children?: JSX.Element;
  text?: string;
  title?: string;
  onClick?: (any) => any; // TODO - specific parameters/return types
  icon?: JSX.Element; // TODO - should probably be Icon?
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
