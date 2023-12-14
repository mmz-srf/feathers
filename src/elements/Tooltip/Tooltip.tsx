import React from 'react';
import classNames from 'classnames';

import { TooltipProps } from './Tooltip.types';

import './Tooltip.scss';

export const TooltipModifiers = [
  'always_open',
  'space_filling',
  'no_min_width',
  'show_delayed',
  'validation',
  'max_parent_width',
  'no_word_wrap',
  'no_border',
  'no_margin',
  'clickable',
] as const;
export type TooltipModifiersType = (typeof TooltipModifiers)[number];

export const TooltipDirections = [
  'up',
  'right',
  'down',
  'left',
  'down-edge-left',
  'down-edge-right',
] as const;
export type TooltipDirectionsType = (typeof TooltipDirections)[number];

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
      className={classNames('f-tooltip', {
        'f-tooltip--always-open': modifier?.includes('always_open'),
        'f-tooltip--space-filling': modifier?.includes('space_filling'),
        'f-tooltip--no-min-width': modifier?.includes('no_min_width'),
        'f-tooltip--show-delayed': modifier?.includes('show_delayed'),
        'f-tooltip--validation': modifier?.includes('validation'),
        'f-tooltip--max-parent-width': modifier?.includes('max_parent_width'),
        'f-tooltip--no-word-wrap':
          modifier?.includes('no_word_wrap') ||
          (modifier?.includes('no_min_width') && content.length < 30),
        'f-tooltip--no-border': modifier?.includes('no_border'),
        'f-tooltip--no-margin': modifier?.includes('no_margin'),
        'f-tooltip--up': direction === 'up',
        'f-tooltip--right': direction === 'right',
        'f-tooltip--down': direction === 'down',
        'f-tooltip--left': direction === 'left',
        'f-tooltip--down-edge-left': direction === 'down-edge-left',
        'f-tooltip--down-edge-right': direction === 'down-edge-right',
        'f-tooltip--clickable': modifier?.includes('clickable'),
      })}>
      {text}
      <span className="f-tooltip__content">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </span>
    </span>
  );
};

export default Tooltip;
