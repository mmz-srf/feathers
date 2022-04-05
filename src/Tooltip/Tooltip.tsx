import React from 'react';
import classNames from 'classnames';

import TOOLTIP_CONTENT from './Tooltip-Content';
import { TooltipProps } from './Tooltip.types';

import './Tooltip.scss';

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
          'f-tooltip--always-open': modifier === 'always_open',
          'f-tooltip--space-filling': modifier === 'space_filling',
          'f-tooltip--no-min-width': modifier === 'no_min_width',
          'f-tooltip--show-delayed': modifier === 'show_delayed',
          'f-tooltip--validation': modifier === 'validation',
          'f-tooltip--max-parent-width': modifier === 'max_parent_width',
          'f-tooltip--no-word-wrap': modifier === 'no_word_wrap',
          'f-tooltip--no-border': modifier === 'no_border',
          'f-tooltip--no-margin': modifier === 'no_margin',
          'f-tooltip--up': direction === 'up',
          'f-tooltip--right': direction === 'right',
          'f-tooltip--down': direction === 'down',
          'f-tooltip--left': direction === 'left',
          'f-tooltip--down-edge-left': direction === 'down-edge-left',
          'f-tooltip--down-edge-right': direction === 'down-edge-right',
        }, {
        [modifier.NO_WORD_WRAP]:
          modifier.includes(modifier.NO_MIN_WIDTH) && content.length < 30,
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
