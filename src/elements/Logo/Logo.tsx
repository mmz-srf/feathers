import React from 'react';

import { LogoProps } from './Logo.types';

import './Logo.scss';

export const LogoBirds = [
  'globi',
  'schorsch',
  'roebi',
  'karl',
  'pitt',
  'tweety',
  'hahn',
  'falk',
  'woody',
] as const;

export type LogoBirdsType = (typeof LogoBirds)[number];

const Logo: React.FC<LogoProps> = ({ bird = 'globi' }) => (
  <div className="f-logo">
    <div className={`f-logo__image f-logo__image--${bird}`} />
  </div>
);

export default Logo;
