import React from 'react';
import classNames from 'classnames';

import Button from '../Button/Button';

import { ButtonListEntryProps, ButtonListProps } from './ButtonList.types';

import './ButtonList.scss';

const ButtonList: React.FC<ButtonListProps> = ({ modifier = '', children }) => (
  <ul className={classNames('f-button-list', modifier)}>{children}</ul>
);

export const ButtonListEntry: React.FC<ButtonListEntryProps> = ({
  modifier,
  icon,
  text,
  onClick,
  tooltip,
}) => (
  <li className={classNames('f-button-list-entry', modifier)}>
    <Button
      text={text}
      onClick={onClick}
      icon={icon}
      tooltip={tooltip}
      modifier={['no_outline', 'fullwidth', 'left_align', 'white']}
    />
  </li>
);

export default ButtonList;
