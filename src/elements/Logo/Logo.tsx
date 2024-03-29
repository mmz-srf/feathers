import React from 'react';
import { LogoProps } from './Logo.types';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import globiImage from './images/Globi.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import schorschImage from './images/Schorsch.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import karlImage from './images/Karl.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import pittImage from './images/Pitt.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import tweetyImage from './images/Tweety.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import hahnImage from './images/Hahn.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import falkImage from './images/Falk.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import woodyImage from './images/Woody.png';

import './Logo.scss';

const images = {
  globi: globiImage,
  schorsch: schorschImage,
  roebi: globiImage,
  karl: karlImage,
  pitt: pittImage,
  tweety: tweetyImage,
  hahn: hahnImage,
  falk: falkImage,
  woody: woodyImage,
};

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
  return images[bird] || images.globi;
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
