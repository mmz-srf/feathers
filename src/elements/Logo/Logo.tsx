import React from 'react';

import { LogoProps } from './Logo.types';

import './Logo.scss';

const Logo: React.FC<LogoProps> = ({ bird = 'globi' }) => (
  <div className="f-logo">
    <div className={`f-logo__image f-logo__image--${bird}`} />
  </div>
);

export default Logo;
