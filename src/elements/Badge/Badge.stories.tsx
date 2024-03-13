import React from 'react';

import Badge, { BadgeModifiers } from './Badge';

import '../../foundation/globals.scss';

export default {
  title: 'Badge',
  args: {
    modifier: undefined,
    children: 'Badge',
  },
  argTypes: {
    modifier: {
      options: ['', ...BadgeModifiers],
      control: { type: 'multi-select' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

/* MODIFIER */
const ModifierTemplate = (args) => <Badge {...args}></Badge>;

export const Normal = ModifierTemplate.bind({});

export const Neutral = ModifierTemplate.bind({});
Neutral.args = { modifier: 'neutral' };
