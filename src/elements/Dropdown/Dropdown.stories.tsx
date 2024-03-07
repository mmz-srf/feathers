import React from 'react';
import DropdownButton from './Dropdown';

import '../../foundation/globals.scss';

export default {
  title: 'Dropdown',
  args: {
    modifier: undefined,
    children: <p>option</p>,
  },
  argTypes: {
    modifier: {
      options: [''],
      control: { type: 'multi-select' },
    },
  },
};

/* MODIFIER */
/* MODIFIER */
const ModifierTemplate = (args) => <DropdownButton {...args} />;

export const Normal = ModifierTemplate.bind({});
Normal.args = {
  text: 'Dropdown button',
  onClick: () => alert("Drop it like it's hot!"),
  children: <p>option</p>,
};

// it's possible to provide a `key` - this is a special property and helps
// react with rerendering. Remove it and see how react complains.
// This property is not in the type list on purpose!
// More: https://reactjs.org/docs/lists-and-keys.html#keys
export const KeyTest = () => (
  <div>
    {[1, 2, 3].map((id) => (
      <DropdownButton
        key={id}
        text="Dropdown button"
        onClick={() => alert("Drop it like it's hot!")}
        children={<p>option</p>}
      />
    ))}
  </div>
);
