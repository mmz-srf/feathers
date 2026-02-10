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

export const Abed = ModifierTemplate.bind({});
Abed.args = { bird: 'abed' };

export const Edith = ModifierTemplate.bind({});
Edith.args = { bird: 'edith' };

export const Falk = ModifierTemplate.bind({});
Falk.args = { bird: 'falk' };

export const Globi = ModifierTemplate.bind({});
Globi.args = { bird: 'globi' };

export const Hahn = ModifierTemplate.bind({});
Hahn.args = { bird: 'hahn' };

export const Karl = ModifierTemplate.bind({});
Karl.args = { bird: 'karl' };

export const Pitt = ModifierTemplate.bind({});
Pitt.args = { bird: 'pitt' };

export const Roebi = ModifierTemplate.bind({});
Roebi.args = { bird: 'roebi' };

export const Schorsch = ModifierTemplate.bind({});
Schorsch.args = { bird: 'schorsch' };

export const Star = ModifierTemplate.bind({});
Star.args = { bird: 'star' };

export const Thomy = ModifierTemplate.bind({});
Thomy.args = { bird: 'thomy' };

export const Waltraud = ModifierTemplate.bind({});
Waltraud.args = { bird: 'waltraud' };

export const Woody = ModifierTemplate.bind({});
Woody.args = { bird: 'woody' };
