import React from 'react';
import classNames from 'classnames';

import { HintProps } from './Hint.types';

import './Hint.scss';

export const HintModifiers = ['article', 'left'] as const;
export type HintModifiersType = (typeof HintModifiers)[number];

const Hint: React.FC<HintProps> = ({ modifier, children }) => (
  <span
    className={classNames('f-hint', {
      'f-hint--left': modifier?.includes('left'),
      'f-hint--article': modifier?.includes('article'),
    })}>
    {children}
  </span>
);

export default Hint;
