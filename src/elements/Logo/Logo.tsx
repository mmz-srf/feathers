import React from 'react';
import { LogoProps } from './Logo.types';

import abedImage from './images/Abed.png';
import edithImage from './images/Edith.png';
import falkImage from './images/Falk.png';
import globiImage from './images/Globi.png';
import hahnImage from './images/Hahn.png';
import karlImage from './images/Karl.png';
import pittImage from './images/Pitt.png';
import roebiImage from './images/Roebi.png';
import schorschImage from './images/Schorsch.png';
import starImage from './images/Star.png';
import thomyImage from './images/Thomy.png';
import waltraudImage from './images/Waltraud.png';
import woodyImage from './images/Woody.png';

import './Logo.scss';

const images = {
  abed: abedImage,
  edith: edithImage,
  falk: falkImage,
  globi: globiImage,
  hahn: hahnImage,
  karl: karlImage,
  pitt: pittImage,
  roebi: roebiImage,
  schorsch: schorschImage,
  star: starImage,
  thomy: thomyImage,
  waltraud: waltraudImage,
  woody: woodyImage,
};

export const LogoBirds = [
  'abed',
  'edith',
  'falk',
  'globi',
  'hahn',
  'karl',
  'pitt',
  'roebi',
  'schorsch',
  'star',
  'thomy',
  'waltraud',
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
