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
  "fullheight",
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
    className={classNames("f-button", {
      "f-button--primary": modifier?.includes("primary"),
      "f-button--save": modifier?.includes("save"),
      "f-button--publish": modifier?.includes("publish"),
      "f-button--retire": modifier?.includes("retire"),
      "f-button--danger": modifier?.includes("danger"),
      "f-button--favorite": modifier?.includes("favorite"),
      "f-button--white": modifier?.includes("white"),
      "f-button--unobtrusive": modifier?.includes("unobtrusive"),
      "f-button--fullwidth": modifier?.includes("fullwidth"),
      "f-button--fullheight": modifier?.includes("fullheight"),
      "f-button--margin-top": modifier?.includes("margin_top"),
      "f-button--margin-bottom": modifier?.includes("margin_bottom"),
      "f-button--left-align": modifier?.includes("left_align"),
      "f-button--icon-rotated": modifier?.includes("icon_rotated"),
      "f-button--invisible-content": modifier?.includes("invisible_content"),
      "f-button--no-outline": modifier?.includes("no_outline"),
      "f-button--extra-big": modifier?.includes("extra_big"),
      "f-button--big": modifier?.includes("big"),
      "f-button--small": modifier?.includes("small"),
      "f-button--extra-tiny": modifier?.includes("extra_tiny"),
      "f-button--tiny": modifier?.includes("tiny"),
      "f-button--hidden": modifier?.includes("hidden"),
      "f-button--icon-on-the-right": modifier?.includes("icon_right"),
      "f-button--icon-sticks-to-border": modifier?.includes(
        "icon_sticks_to_border"
      ),
      "f-button--spread-content": modifier?.includes("spread_content"),
      "f-button--bold": modifier?.includes("bold"),
      "f-button--selected": modifier?.includes("selected"),
      "f-button--uppercase": modifier?.includes("uppercase"),
      "f-button--link": modifier?.includes("link"),
      "f-button--circle": modifier?.includes("circle"),
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
  modifier = [],
}) => (
  <Tooltip
    content={content}
    modifier={["space_filling", "show_delayed", ...modifier]}
    direction={direction}
  />
);

export default Button;
