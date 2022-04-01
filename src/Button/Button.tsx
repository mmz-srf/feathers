import React from "react";
import classNames from "classnames";

import { ButtonProps, ButtonTooltipProps } from "./Button.types";

import Tooltip, {
  TOOLTIP_DIRECTION_DOWN,
  modifier as TOOLTIP_MODIFIER,
} from "../Tooltip/Tooltip";

import "./Button.scss";

const Button: React.FC<ButtonProps> = ({
  modifier,
  children,
  onClick = () => {},
  icon,
  text = "",
  disabled = false,
  tabIndex = 0,
  title = "",
  tooltip = null,
  dataId = null,
  dataCy = null,
}) => (
  <button
    type="button"
    data-testid="Button"
    className={classNames("f-button", {
      "f-button--primary": modifier === "primary",
      "f-button--save": modifier === "save",
      "f-button--publish": modifier === "publish",
      "f-button--retire": modifier === "retire",
      "f-button--danger": modifier === "danger",
      "f-button--white": modifier === "white",
      "f-button--unobtrusive": modifier === "unobtrusive",
      "f-button--fullwidth": modifier === "fullwidth",
      "f-button--margin-top": modifier === "margin_top",
      "f-button--margin-bottom": modifier === "margin_bottom",
      "f-button--left-align": modifier === "left_align",
      "f-button--icon-rotated": modifier === "icon_rotated",
      "f-button--invisible-content": modifier === "invisible_content",
      "f-button--no-outline": modifier === "no_outline",
      "f-button--extra-big": modifier === "extra_big",
      "f-button--big": modifier === "big",
      "f-button--small": modifier === "small",
      "f-button--extra-tiny": modifier === "extra_tiny",
      "f-button--tiny": modifier === "tiny",
      "f-button--hidden": modifier === "hidden",
      "f-button--icon-on-the-right": modifier === "icon_right",
      "f-button--icon-sticks-to-border": modifier === "icon_sticks_to_border",
      "f-button--spread-content": modifier === "spread_content",
      "f-button--bold": modifier === "bold",
      "f-button--selected": modifier === "selected",
      "f-button--uppercase": modifier === "uppercase",
      "f-button--link": modifier === "link",
      "f-button--circle": modifier === "circle",
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

const ButtonTooltip: React.FC<ButtonTooltipProps> = ({
  modifier,
  direction = TOOLTIP_DIRECTION_DOWN,
  content,
}) => (
  <ToolTip
    content={content}
    modifier={classNames(
      TOOLTIP_MODIFIER.SPACE_FILLING,
      TOOLTIP_MODIFIER.SHOW_DELAYED,
      modifier,
      {
        [TOOLTIP_MODIFIER.NO_WORD_WRAP]:
          modifier.includes(TOOLTIP_MODIFIER.NO_MIN_WIDTH) &&
          content.length < 30,
      }
    )}
    direction={direction}
  />
);

export default Button;
