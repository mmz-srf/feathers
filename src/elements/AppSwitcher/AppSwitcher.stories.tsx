import React from 'react';
import AppSwitcher, { BirdsModifiers } from './AppSwitcher';

import '../../foundation/globals.scss';

export default {
  title: 'AppSwitcher',
  args: {
    modifier: undefined,
    currentPortal: 'news',
    currentBirdId: 'karl',
    phase: 'dev',
  },
  argTypes: {
    modifier: {
      control: { type: 'text' },
    },
    currentPortal: {
      control: { type: 'text' },
    },
    currentBirdId: {
      options: BirdsModifiers,
      control: { type: 'select' },
    },
    phase: {
      options: ['local', 'dev', 'int', 'prod'],
      control: { type: 'select' },
    },
  },
};

/* MODIFIER */
const ModifierTemplate = (args) => (
  <AppSwitcher {...args} currentPortal="news" phase="dev" />
);

export const Schorsch = ModifierTemplate.bind({});
Schorsch.args = { currentBirdId: 'schorsch' };

export const Roebi = ModifierTemplate.bind({});
Roebi.args = { currentBirdId: 'roebi' };

export const Karl = ModifierTemplate.bind({});
Karl.args = { currentBirdId: 'karl' };

export const Pitt = ModifierTemplate.bind({});
Pitt.args = { currentBirdId: 'pitt' };

export const Tweety = ModifierTemplate.bind({});
Tweety.args = { currentBirdId: 'tweety' };

// it's possible to provide a `key` - this is a special property and helps
// react with rerendering. Remove it and see how react complains.
// This property is not in the type list on purpose!
// More: https://reactjs.org/docs/lists-and-keys.html#keys
export const KeyTest = () => (
  <div>
    {[1, 2, 3].map((id) => (
      <AppSwitcher
        key={id}
        currentBirdId="roebi"
        currentPortal="news"
        phase="dev"
      />
    ))}
  </div>
);
