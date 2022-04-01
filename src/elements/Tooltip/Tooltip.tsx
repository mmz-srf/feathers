import React from "react";
import classNames from "classnames";

//import TOOLTIP_CONTENT from "./Tooltip-Content";
import { TooltipProps } from "./Tooltip.types";

import "./Tooltip.scss";

export const TOOLTIP_DIRECTION_UP = "f-tooltip--up";
export const TOOLTIP_DIRECTION_RIGHT = "f-tooltip--right";
export const TOOLTIP_DIRECTION_DOWN = "f-tooltip--down";
export const TOOLTIP_DIRECTION_LEFT = "f-tooltip--left";
export const TOOLTIP_DIRECTION_DOWN_EDGE_LEFT = "f-tooltip--down-edge-left";
export const TOOLTIP_DIRECTION_DOWN_EDGE_RIGHT = "f-tooltip--down-edge-right";

export const TOOLTIP_DIRECTIONS = {
  UP: TOOLTIP_DIRECTION_UP,
  RIGHT: TOOLTIP_DIRECTION_RIGHT,
  DOWN: TOOLTIP_DIRECTION_DOWN,
  LEFT: TOOLTIP_DIRECTION_LEFT,
  DOWN_EDGE_LEFT: TOOLTIP_DIRECTION_DOWN_EDGE_LEFT,
  DOWN_EDGE_RIGHT: TOOLTIP_DIRECTION_DOWN_EDGE_RIGHT,
};

export const TOOLTIP_CONTENT = TOOLTIP_CONTENT;

const Tooltip: React.FC<TooltipProps> = ({
  modifier,
  text,
  content,
  direction = TOOLTIP_DIRECTION_DOWN,
}) => {
  if (!content) {
    return null;
  }
  return (
    <span
      className={classNames(
        "f-tooltip",
        {
          "f-tooltip--always-open": modifier === "always_open",
          "f-tooltip--space-filling": modifier === "space_filling",
          "f-tooltip--no-min-width": modifier === "no_min_width",
          "f-tooltip--show-delayed": modifier === "show_delayed",
          "f-tooltip--validation": modifier === "validation",
          "f-tooltip--max-parent-width": modifier === "max_parent_width",
          "f-tooltip--no-word-wrap": modifier === "no_word_wrap",
          "f-tooltip--no-border": modifier === "no_border",
          "f-tooltip--no-margin": modifier === "no_margin",
        },
        direction,
        {
          [modifier.NO_WORD_WRAP]:
            modifier.includes(modifier.NO_MIN_WIDTH) && content.length < 30,
        }
      )}
    >
      {text}
      <span className="f-tooltip__content">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </span>
    </span>
  );
};

export default Tooltip;
