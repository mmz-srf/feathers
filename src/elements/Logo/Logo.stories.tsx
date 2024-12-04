import React from 'react';

import Logo, { LogoBirds } from './Logo';

import '../../foundation/globals.scss';

export default {
  title: 'Logo',
  args: {
    bird: 'globi',
  },
  argTypes: {
    bird: {
      options: LogoBirds,
      control: { type: 'select' },
    },
  },
};

/* MODIFIER */
const ModifierTemplate = (args) => <Logo {...args} />;

export const Globi = ModifierTemplate.bind({});
Globi.args = { bird: 'globi' };

export const Schorsch = ModifierTemplate.bind({});
Schorsch.args = { bird: 'schorsch' };

export const Roebi = ModifierTemplate.bind({});
Roebi.args = { bird: 'roebi' };

export const Karl = ModifierTemplate.bind({});
Karl.args = { bird: 'karl' };

export const Pitt = ModifierTemplate.bind({});
Pitt.args = { bird: 'pitt' };

export const Tweety = ModifierTemplate.bind({});
Tweety.args = { bird: 'tweety' };

export const Hahn = ModifierTemplate.bind({});
Hahn.args = { bird: 'hahn' };

export const Falk = ModifierTemplate.bind({});
Falk.args = { bird: 'falk' };

export const Woody = ModifierTemplate.bind({});
Woody.args = { bird: 'woody' };

export const Edith = ModifierTemplate.bind({});
Edith.args = { bird: 'edith' };

export const Thomy = ModifierTemplate.bind({});
Thomy.args = { bird: 'thomy' };
