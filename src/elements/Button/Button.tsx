import React from "react";
import classNames from "classnames";

import { ButtonProps } from "./Button.types";
import Tooltip from "../Tooltip/Tooltip";
import { TooltipProps } from "../Tooltip/Tooltip.types";

import "./Button.scss";
import "./../Tooltip/Tooltip.scss";

export const ButtonModifiers = [
  "primary",
  "save",
  "publish",
  "retire",
  "danger",
  "favorite",
  "white",
  "unobtrusive",
  "fullwidth",
  "margin_top",
  "margin_bottom",
  "left_align",
  "icon_rotated",
  "invisible_content",
  "no_outline",
  "extra_big",
  "big",
  "small",
  "extra_tiny",
  "tiny",
  "hidden",
  "icon_right",
  "icon_sticks_to_border",
  "spread_content",
  "bold",
  "selected",
  "uppercase",
  "link",
  "circle",
] as const;
export type ButtonModifiersType = typeof ButtonModifiers[number];

const basicClassMapper = (prefix: "f-button" | "f-icon", modifier) => {
  return modifier
    .filter((m) => !!m && m.length > 0)
    .map((m) => `${prefix}--${m}`);
};

const Button: React.FC<ButtonProps> = ({
  modifier,
  children,
  onClick = () => {},
  icon,
  text = "",
  disabled = false,
  tabIndex = 0,
  title,
  tooltip,
  dataId,
  dataCy,
}) => (
  <button
    type="button"
    className={classNames("f-button", basicClassMapper("f-button", modifier), {
      "f-button--icon-only": icon && !text,
    })}
    disabled={disabled}
    onClick={(event) => onClick(event)}
    tabIndex={tabIndex}
    title={title}
    data-id={dataId}
    data-cy={dataCy}
  >
    {icon && (
      <div
        className={classNames("f-button__icon-wrapper", {
          "f-button__icon-wrapper--icon-only": !text,
        })}
      >
        {icon}
      </div>
    )}
    {text && (
      <div
        className={classNames("f-button__text", {
          "f-button__text--with-icon": icon,
        })}
      >
        {text}
      </div>
    )}
    {tooltip}
    {children}
  </button>
);

// Shorthand component because buttons' tooltips should always be space filling & show up delayed
export const ButtonTooltip: React.FC<TooltipProps> = ({
  direction,
  content,
}) => (
  <Tooltip
    content={content}
    modifier={["space_filling", "show_delayed"]}
    direction={direction}
  />
);

export default Button;
