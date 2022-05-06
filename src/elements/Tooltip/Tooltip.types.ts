import React from "react";
import { TooltipDirectionsType, TooltipModifiersType } from "./Tooltip";

export interface TooltipProps {
  modifier?: Array<TooltipModifiersType>;
  text?: string | React.ReactNode;
  direction?: TooltipDirectionsType;
  content: string;
}
