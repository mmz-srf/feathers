import React from 'react';
import { SpinnerIcon } from '../Icon/Icon';

import { ProgressDisplayProps } from './ProgressDisplay.types';

import './ProgressDisplay.scss';

const ProgressDisplay: React.FC<ProgressDisplayProps> = ({ modifier }) => (
  <span className={`f-progress-display ${modifier}`}>
    <SpinnerIcon />
  </span>
);

export default ProgressDisplay;
