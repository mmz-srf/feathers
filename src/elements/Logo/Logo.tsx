import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import falkImage from './birds/Falk.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import globiImage from './birds/Globi.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import schorschImage from './birds/Schorsch.png';

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

const birdToSrc = (bird: LogoBirdsType) => {
  switch (bird) {
    case 'globi':
      return globiImage;
    case 'schorsch':
      return schorschImage;
    case 'falk':
      return falkImage;
    default:
      // TODO: rest of the birds
      return globiImage;
  }
};

const Logo: React.FC<LogoProps> = ({ bird = 'globi' }) => (
  <div className="f-logo">
    <img
      src={birdToSrc(bird)}
      alt=""
      className={`f-logo__image f-logo__image--${bird}`}
    />
  </div>
);

export default Logo;
