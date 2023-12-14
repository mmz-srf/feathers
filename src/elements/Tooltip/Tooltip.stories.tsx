import React from "react";
import Tooltip, { TooltipModifiers, TooltipDirections } from "./Tooltip";

import "../../foundation/globals.scss";

export default {
  title: "Tooltip",
  decorators: [
    (Story) => (
      <div
        style={{
          position: "relative",
          width: "400px",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const TooltipPlayground = (args) => <Tooltip {...args} />;
TooltipPlayground.args = {
  modifier: "always_open",
  content: "I'm always open",
  text: "Hover me",
  direction: "down",
};
TooltipPlayground.argTypes = {
  modifier: {
    options: ["", ...TooltipModifiers],
    control: { type: "multi-select" },
  },
  direction: {
    options: ["", ...TooltipDirections],
    control: { type: "select" },
  },
  content: {
    control: {
      type: "text",
    },
  },
  text: {
    control: {
      type: "text",
    },
  },
};

export const AlwaysOpen = () => (
  <Tooltip
    modifier={["always_open"]}
    content="I'm always visible 👋"
    text="Hover here"
  />
);
export const SpaceFilling = () => (
  <Tooltip
    modifier={["space_filling"]}
    content="You can hover on the whole 400x400 area!"
    text="Hover here"
  />
);
export const NoMinWidth = () => (
  <Tooltip modifier={["no_min_width"]} content="smol" text="Hover here" />
);
export const ShowDelayed = () => (
  <Tooltip
    modifier={["show_delayed"]}
    content="I'll show up a bit later than others 🦥"
    text="Hover here"
  />
);
export const Validation = () => (
  <Tooltip modifier={["validation"]} content="SRF rulez" text="Hover here" />
);
export const MaxParentWidth = () => (
  <Tooltip
    modifier={["max_parent_width"]}
    content="I'm only as wide as the parent!"
    text="Hover here"
  />
);
export const NoWordWrap = () => (
  <Tooltip
    modifier={["no_word_wrap"]}
    content="Word wrapping? Not for me, homieeeeeeeeeeeeeeeeeeeeeeee! All in one line, yeah! 📏"
    text="Hover here"
  />
);
export const NoBorder = () => (
  <Tooltip
    modifier={["no_border"]}
    content="I see no borders from up here"
    text="Hover here"
  />
);
export const NoMargin = () => (
  <Tooltip modifier={["no_margin"]} content="SRF rulez" text="Hover here" />
);
export const Up = () => (
  <Tooltip direction="up" content="👇" text="Hover here" />
);
export const Right = () => (
  <Tooltip direction="right" content="👈" text="Hover here" />
);
export const Down = () => (
  <Tooltip direction="down" content="👆" text="Hover here" />
);
export const Left = () => (
  <Tooltip direction="left" content="👉" text="Hover here" />
);
export const DownEdgeLeft = () => (
  <Tooltip direction="down-edge-left" content="↗️" text="Hover here" />
);
export const DownEdgeRight = () => (
  <Tooltip direction="down-edge-right" content="↖️" text="Hover here" />
);
export const Clickable = () => (
  <Tooltip
    modifier={["clickable", "always_open"]}
    content={'<a href="#">I am clickable</a>'}
    text="Hover here"
  />
);
