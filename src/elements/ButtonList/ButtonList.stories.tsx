import React from 'react';

import ButtonList, { ButtonListEntry } from './ButtonList';

import '../../foundation/globals.scss';
import { ImageIcon } from '../Icon/Icon';
import { ButtonTooltip } from '../Button/Button';

export default {
  title: 'ButtonList',
  args: {
    modifier: undefined,
    text: 'Entry',
  },
  argTypes: {
    modifier: {
      control: { type: 'text' },
    },
    text: {
      control: { type: 'text' },
    },
  },
};

/* MODIFIER */
const ModifierTemplate = (args) => (
  <ButtonList>
    <ButtonListEntry {...args} />
    <ButtonListEntry {...args} />
    <ButtonListEntry {...args} />
  </ButtonList>
);

export const Normal = ModifierTemplate.bind({});
Normal.args = {
  text: 'Entry',
  onClick: () => console.log('clicked'),
};

export const Icon = ModifierTemplate.bind({});
Icon.args = {
  text: 'Entry',
  onClick: () => console.log('clicked'),
  icon: <ImageIcon />,
};

export const Tooltip = ModifierTemplate.bind({});
Tooltip.args = {
  text: 'Entry',
  onClick: () => console.log('clicked'),
  tooltip: <ButtonTooltip content="Hello there 👋" />,
};
