import React from 'react';
import AppSwitcher, { AppSwitcherButton, BirdsModifiers } from './AppSwitcher';

import '../../foundation/globals.scss';

export default {
  title: 'AppSwitcher',
  args: {
    modifier: undefined,
    currentPortal: 'news',
    currentBirdId: 'karl',
    phase: 'dev',
    disabled: false,
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
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

/* MODIFIER */
const ModifierTemplate = (args) => <AppSwitcher {...args} />;

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

export const AppSwitcherWithCustomAppSwitcherButtonChild =
  ModifierTemplate.bind({});
AppSwitcherWithCustomAppSwitcherButtonChild.args = {
  currentBirdId: 'tweety',
  children: (
    <>
      <a href="https://www.srf.ch/">
        <AppSwitcherButton
          bird={{
            id: 'schorsch',
            path: '',
            label: 'Schorsch',
            hint: 'Ich bin custom!',
          }}
        />
      </a>
      <a href="https://www.srf.ch/">
        <AppSwitcherButton
          bird={{
            id: 'thomy',
            path: '',
            label: 'Thomy die Taube',
            hint: 'Ich bin auch custom!',
          }}
        />
      </a>
    </>
  ),
};
