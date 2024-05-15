import React from 'react';
import ConfirmButton from './ConfirmButton';

import '../../foundation/globals.scss';
import { SaveIcon } from '../Icon/Icon';
import { ButtonModifiers } from '../Button/Button';

export default {
  title: 'ConfirmButton',
  args: {
    modifier: undefined,
  },
  argTypes: {
    modifier: {
      control: { type: 'text' },
    },
    text: {
      control: { type: 'text' },
    },
    confirmText: {
      control: { type: 'text' },
    },
    icon: {
      control: { type: 'object' },
    },
    iconsOnly: {
      control: { type: 'boolean' },
    },
    buttonModifier: {
      options: ['', ...ButtonModifiers],
      control: { type: 'multi-select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

/* MODIFIER */
const ModifierTemplate = (args) => <ConfirmButton {...args} />;

export const CustomText = ModifierTemplate.bind({});
CustomText.args = { text: 'Custom Text' };

export const CustomConfirmText = ModifierTemplate.bind({});
CustomConfirmText.args = { confirmText: 'Ich bin Custom' };

export const CustomIcon = ModifierTemplate.bind({});
CustomIcon.args = { icon: <SaveIcon /> };

export const OnlyIcon = ModifierTemplate.bind({});
OnlyIcon.args = { iconsOnly: true };

export const ButtonModifier = ModifierTemplate.bind({});
ButtonModifier.args = { buttonModifier: ['retire'] };

export const Disabled = ModifierTemplate.bind({});
Disabled.args = { disabled: true };

export const InProgress = ModifierTemplate.bind({});
InProgress.args = { inProgress: true };
