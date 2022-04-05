import React from 'react';
import classNames from 'classnames';

import { TooltipProps } from './Tooltip.types';

import './Tooltip.scss';

export enum ToolTipModifiers {
  AlwaysOpen = 'always_open',
  SpaceFilling = 'space_filling',
  NoMinWidth = 'no_min_width',
  ShowDelayed = 'show_delayed',
  Validation = 'validation',
  MaxParentWidth = 'max_parent_width',
  NoWordWrap = 'no_word_wrap',
  NoBorder = 'no_border',
  NoMargin = 'no_margin',
}

const Tooltip: React.FC<TooltipProps> = ({
  modifier,
  text,
  content,
  direction = 'down',
}) => {
  if (!content) {
    return null;
  }
  return (
    <span
      className={classNames(
        'f-tooltip',
        {
          'f-tooltip--always-open': modifier?.includes(ToolTipModifiers.AlwaysOpen),
          'f-tooltip--space-filling': modifier?.includes(ToolTipModifiers.SpaceFilling),
          'f-tooltip--no-min-width': modifier?.includes(ToolTipModifiers.NoMinWidth),
          'f-tooltip--show-delayed': modifier?.includes(ToolTipModifiers.ShowDelayed),
          'f-tooltip--validation': modifier?.includes(ToolTipModifiers.Validation),
          'f-tooltip--max-parent-width': modifier?.includes(ToolTipModifiers.MaxParentWidth),
          'f-tooltip--no-word-wrap': modifier?.includes(ToolTipModifiers.NoWordWrap) || (modifier?.includes(ToolTipModifiers.NoMinWidth) && content.length < 30),
          'f-tooltip--no-border': modifier?.includes(ToolTipModifiers.NoBorder),
          'f-tooltip--no-margin': modifier?.includes(ToolTipModifiers.NoMargin),
          'f-tooltip--up': direction === 'up',
          'f-tooltip--right': direction === 'right',
          'f-tooltip--down': direction === 'down',
          'f-tooltip--left': direction === 'left',
          'f-tooltip--down-edge-left': direction === 'down-edge-left',
          'f-tooltip--down-edge-right': direction === 'down-edge-right',
        })}
    >
      {text}
      <span className='f-tooltip__content'>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </span>
    </span>
  );
};

export default Tooltip;
