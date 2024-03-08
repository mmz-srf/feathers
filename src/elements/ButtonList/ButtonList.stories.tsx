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

// it's possible to provide a `key` - this is a special property and helps
// react with rerendering. Remove it and see how react complains.
// This property is not in the type list on purpose!
// More: https://reactjs.org/docs/lists-and-keys.html#keys
export const KeyTest = () => (
  <div>
    {[1, 2, 3].map((id) => (
      <ButtonList key={id}>
        <ButtonListEntry
          text={'List ' + id}
          onClick={() => console.log('clicked')}
        />
        <ButtonListEntry
          text={'List ' + id}
          onClick={() => console.log('clicked')}
        />
      </ButtonList>
    ))}
  </div>
);
