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

// it's possible to provide a `key` - this is a special property and helps
// react with rerendering. Remove it and see how react complains.
// This property is not in the type list on purpose!
// More: https://reactjs.org/docs/lists-and-keys.html#keys
export const KeyTest = () => (
  <div>
    {[1, 2, 3].map((id) => (
      <Badge key={id}>{id}</Badge>
    ))}
  </div>
);
