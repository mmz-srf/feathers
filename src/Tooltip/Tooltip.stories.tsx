import React from "react";
import Tooltip, {ToolTipModifiers} from "./Tooltip";
import TOOLTIP_CONTENT from "./Tooltip-Content";

export default {
  title: "Tooltip",
  decorators: [
    (Story) => (
      <div style={{
        position: "relative",
        width: "400px",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center"
      }}>
        <Story />
      </div>
    ),
  ],
};

export const AlwaysOpen = () => <Tooltip modifier={ToolTipModifiers.AlwaysOpen}  content="I'm always visible 👋" text="Hover here"/>;
export const SpaceFilling = () => <Tooltip modifier={ToolTipModifiers.SpaceFilling}  content="You can hover on the whole 400x400 area!" text="Hover here"/>;
export const NoMinWidth = () => <Tooltip modifier={ToolTipModifiers.NoMinWidth}  content="smol" text="Hover here"/>;
export const ShowDelayed = () => <Tooltip modifier={ToolTipModifiers.ShowDelayed}  content="I'll show up a bit later than others 🦥" text="Hover here"/>;
export const Validation = () => <Tooltip modifier={ToolTipModifiers.Validation}  content="SRF rulez" text="Hover here"/>;
export const MaxParentWidth = () => <Tooltip modifier={ToolTipModifiers.MaxParentWidth}  content="I'm only as wide as the parent!" text="Hover here"/>;
export const NoWordWrap = () => <Tooltip modifier={ToolTipModifiers.NoWordWrap}  content="Word wrapping? Not for me, homieeeeeeeeeeeeeeeeeeeeeeee! All in one line, yeah! 📏" text="Hover here"/>;
export const NoBorder = () => <Tooltip modifier={ToolTipModifiers.NoBorder}  content="I see no borders from up here" text="Hover here"/>;
export const NoMargin = () => <Tooltip modifier={ToolTipModifiers.NoMargin}  content="SRF rulez" text="Hover here"/>;

export const WithFileContents = () => <Tooltip content={TOOLTIP_CONTENT.STORYBOOK_HINT_DEMO} text="SRF rulez"/>;

export const Up = () => <Tooltip direction='up' content="👇" text="Hover here" />
export const Right = () => <Tooltip direction='right' content="👈" text="Hover here" />
export const Down = () => <Tooltip direction='down' content="👆" text="Hover here" />
export const Left = () => <Tooltip direction='left' content="👉" text="Hover here" />
export const DownEdgeLeft = () => <Tooltip direction='down-edge-left' content="↗️" text="Hover here" />
export const DownEdgeRight = () => <Tooltip direction='down-edge-right' content="↖️" text="Hover here" />
