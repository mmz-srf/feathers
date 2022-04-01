export interface ButtonProps {
  modifier?:
    | "primary"
    | "save"
    | "publish"
    | "retire"
    | "danger"
    | "white"
    | "unobtrusive"
    | "fullwidth"
    | "margin_top"
    | "margin_bottom"
    | "left_align"
    | "icon_rotated"
    | "invisible_content"
    | "no_outline"
    | "extra_big"
    | "big"
    | "small"
    | "extra_tiny"
    | "tiny"
    | "hidden"
    | "icon_right"
    | "icon_sticks_to_border"
    | "spread_content"
    | "bold"
    | "selected"
    | "uppercase"
    | "link"
    | "circle";
  children?: JSX.Element;
  text?: string;
  title?: string;
  onClick: fn;
  icon?: Icon;
  disabled: boolean;
  tabIndex: number;
  dataId: string;
  dataCy: string;
  tooltip?: any;
}

export interface ButtonTooltipProps {
  modifier?: string;
  content: string;
  direction?: string;
}
