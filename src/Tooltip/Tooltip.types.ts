import {ToolTipModifiers} from "./Tooltip";

export interface TooltipProps {
  modifier?: ToolTipModifiers | Array<ToolTipModifiers>;
  text: string;
  // text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  direction?: 'up' | 'right' | 'down' | 'left' | 'down-edge-left' | 'down-edge-right';
  content: string;
}
