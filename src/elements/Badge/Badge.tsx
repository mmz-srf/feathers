import React from 'react';

import classNames from 'classnames';

import './Badge.scss';
import { BadgeProps } from './Badge.types';

export const BadgeModifiers = ['neutral'] as const;

export type BadgeModifiersType = (typeof BadgeModifiers)[number];

const Badge: React.FC<BadgeProps> = ({ modifier, children }) => (
  <div
    className={classNames('f-badge', {
      'f-badge--neutral': modifier?.includes('neutral'),
    })}>
    {children}
  </div>
);

export default Badge;
