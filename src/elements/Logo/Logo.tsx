import React from 'react';
import { LogoProps } from './Logo.types';

import globiImage from './images/Globi.png';
import schorschImage from './images/Schorsch.png';
import karlImage from './images/Karl.png';
import pittImage from './images/Pitt.png';
import hahnImage from './images/Hahn.png';
import falkImage from './images/Falk.png';
import woodyImage from './images/Woody.png';
import edithImage from './images/Edith.png';
import roebiImage from './images/Roebi.png';
import waltraudImage from './images/Waltraud.png';
import thomyImage from './images/Thomy.png';
import abedImage from './images/Abed.png';
import justinImage from './images/Justin.png';

import './Logo.scss';

const images = {
  globi: globiImage,
  schorsch: schorschImage,
  roebi: roebiImage,
  karl: karlImage,
  pitt: pittImage,
  hahn: hahnImage,
  falk: falkImage,
  woody: woodyImage,
  edith: edithImage,
  waltraud: waltraudImage,
  thomy: thomyImage,
  abed: abedImage,
  justin: justinImage,
};

export const LogoBirds = [
  'globi',
  'schorsch',
  'roebi',
  'karl',
  'pitt',
  'hahn',
  'falk',
  'woody',
  'edith',
  'waltraud',
  'thomy',
  'abed',
  'justin',
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
