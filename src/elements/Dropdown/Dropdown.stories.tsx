import React from 'react';
import DropdownButton from './Dropdown';

import '../../foundation/globals.scss';

export default {
  title: 'Dropdown',
  args: {
    modifier: undefined,
    children: <h1>Elia</h1>,
  },
  argTypes: {
    modifier: {
      options: [''],
      control: { type: 'multi-select' },
    },
  },
};

/* MODIFIER */
const ModifierTemplate = (args) => <DropdownButton {...args} />;

export const ScrollableModifier = ModifierTemplate.bind({});
ScrollableModifier.args = { modifier: 'scrollable' };

// it's possible to provide a `key` - this is a special property and helps
// react with rerendering. Remove it and see how react complains.
// This property is not in the type list on purpose!
// More: https://reactjs.org/docs/lists-and-keys.html#keys
export const KeyTest = () => (
  <div>
    {[1, 2, 3].map((id) => (
      <DropdownButton
        key={id}
        text="Elia test"
        onClick={() => console.log('helloo elia')}
        children={<h1>h1 tag elia</h1>}
      />
    ))}
  </div>
);
