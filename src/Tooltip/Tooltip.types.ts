import React from "react";
import {ToolTipModifiers} from "./Tooltip";

export interface TooltipProps {
  modifier?: ToolTipModifiers | Array<ToolTipModifiers>;
  text: string | React.ReactNode;
  direction?: 'up' | 'right' | 'down' | 'left' | 'down-edge-left' | 'down-edge-right';
  content: string;
}
