import React from 'react';
import classNames from 'classnames';

import {ButtonProps, ButtonTooltipProps} from './Button.types';

//import Tooltip, {modifier as TOOLTIP_MODIFIER, TOOLTIP_DIRECTION_DOWN,} from "../Tooltip/Tooltip";

import './Button.scss';

export enum ButtonModifiers {
    Primary = 'primary',
    Save = 'save',
    Publish = 'publish',
    Retire = 'retire',
    Danger = 'danger',
    White = 'white',
    Unobtrusive = 'unobtrusive',
    Fullwidth = 'fullwidth',
    MarginTop = 'margin_top',
    MarginBottom = 'margin_bottom',
    LeftAlign = 'left_align',
    IconRotated = 'icon_rotated',
    InvisibleContent = 'invisible_content',
    NoOutline = 'no_outline',
    ExtraBig = 'extra_big',
    Big = 'big',
    Small = 'small',
    ExtraTiny = 'extra_tiny',
    Tiny = 'tiny',
    Hidden = 'hidden',
    IconRight = 'icon_right',
    IconSticksToBorder = 'icon_sticks_to_border',
    SpreadContent = 'spread_content',
    Bold = 'bold',
    Selected = 'selected',
    Uppercase = 'uppercase',
    Link = 'link',
    Circle = 'circle',
}

const Button: React.FC<ButtonProps> = ({
  modifier,
  children,
  onClick = () => {},
  icon,
  text = '',
  disabled = false,
  tabIndex = 0,
  title = '',
  tooltip = null,
  dataId = null,
  dataCy = null,
}) => (
  <button
    type='button'
    data-testid='Button'
    className={classNames(
      'f-button',
      {
        'f-button--primary': modifier.includes(ButtonModifiers.Primary),
        'f-button--save': modifier.includes(ButtonModifiers.Save),
        'f-button--publish': modifier.includes(ButtonModifiers.Publish),
        'f-button--retire': modifier.includes(ButtonModifiers.Retire),
        'f-button--danger': modifier.includes(ButtonModifiers.Danger),
        'f-button--white': modifier.includes(ButtonModifiers.White),
        'f-button--unobtrusive': modifier.includes(ButtonModifiers.Unobtrusive),
        'f-button--fullwidth': modifier.includes(ButtonModifiers.Fullwidth),
        'f-button--margin-top': modifier.includes(ButtonModifiers.MarginTop),
        'f-button--margin-bottom': modifier.includes(ButtonModifiers.MarginBottom),
        'f-button--left-align': modifier.includes(ButtonModifiers.LeftAlign),
        'f-button--icon-rotated': modifier.includes(ButtonModifiers.IconRotated),
        'f-button--invisible-content': modifier.includes(ButtonModifiers.InvisibleContent),
        'f-button--no-outline': modifier.includes(ButtonModifiers.NoOutline),
        'f-button--extra-big': modifier.includes(ButtonModifiers.ExtraBig),
        'f-button--big': modifier.includes(ButtonModifiers.Big),
        'f-button--small': modifier.includes(ButtonModifiers.Small),
        'f-button--extra-tiny': modifier.includes(ButtonModifiers.ExtraTiny),
        'f-button--tiny': modifier.includes(ButtonModifiers.Tiny),
        'f-button--hidden': modifier.includes(ButtonModifiers.Hidden),
        'f-button--icon-on-the-right': modifier.includes(ButtonModifiers.IconRight),
        'f-button--icon-sticks-to-border': modifier.includes(ButtonModifiers.IconSticksToBorder),
        'f-button--spread-content': modifier.includes(ButtonModifiers.SpreadContent),
        'f-button--bold': modifier.includes(ButtonModifiers.Bold),
        'f-button--selected': modifier.includes(ButtonModifiers.Selected),
        'f-button--uppercase': modifier.includes(ButtonModifiers.Uppercase),
        'f-button--link': modifier.includes(ButtonModifiers.Link),
        'f-button--circle': modifier.includes(ButtonModifiers.Circle),
        'f-button--icon-only': icon && !text,
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
        className={classNames('f-button__icon-wrapper', {
          'f-button__icon-wrapper--icon-only': !text,
        })}
      >
        {icon}
      </div>
    )}
    {text && (
      <div
        className={classNames('f-button__text', {
          'f-button__text--with-icon': icon,
        })}
      >
        {text}
      </div>
    )}
    {tooltip}
    {children}
  </button>
);

/*
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
*/
export default Button;
