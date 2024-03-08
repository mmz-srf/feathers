import React from 'react';

import Hint from './Hint';

import '../../foundation/globals.scss';

export default {
  title: 'Hint',
  args: {
    modifier: undefined,
  },
};

/* MODIFIER */
const ModifierTemplate = (args) => <Hint {...args}>Take the hint!</Hint>;

export const Normal = ModifierTemplate.bind({});

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
