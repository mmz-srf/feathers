import React from 'react';

import Hint, { HintModifiers } from './Hint';

import '../../foundation/globals.scss';

export default {
  title: 'Hint',
  args: {
    modifier: undefined,
    children: 'Take the hint!',
  },
  argTypes: {
    modifier: {
      options: ['', ...HintModifiers],
      control: { type: 'multi-select' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

/* MODIFIER */
const ModifierTemplate = (args) => <Hint {...args}>Take the hint!</Hint>;

export const Left = ModifierTemplate.bind({});
Left.args = { modifier: 'left' };

export const Article = ModifierTemplate.bind({});
Article.args = { modifier: 'article' };
