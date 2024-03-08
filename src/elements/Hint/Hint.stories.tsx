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

// it's possible to provide a `key` - this is a special property and helps
// react with rerendering. Remove it and see how react complains.
// This property is not in the type list on purpose!
// More: https://reactjs.org/docs/lists-and-keys.html#keys
export const KeyTest = () => (
  <div>
    {[1, 2, 3].map((id) => (
      <Hint key={id}>Mich gibts auch in einer List.</Hint>
    ))}
  </div>
);
