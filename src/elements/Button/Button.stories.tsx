import React from 'react';
import Button, { ButtonTooltip, ButtonModifiers } from './Button';

import { UpdateIcon } from '../Icon/Icon';

import '../../foundation/globals.scss';

export default {
  title: 'Button',
  args: {
    modifier: undefined,
    text: 'SRF rulez',
    icon: undefined,
    tooltip: undefined,
    disabled: false,
  },
  argTypes: {
    modifier: {
      options: ['', ...ButtonModifiers],
      control: { type: 'multi-select' },
    },
    text: {
      control: { type: 'text' },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    tooltip: {
      table: {
        disable: true,
      },
    },
  },
};

/* MODIFIER */
const ModifierTemplate = (args) => <Button {...args} />;

export const BigModifier = ModifierTemplate.bind({});
BigModifier.args = { modifier: 'big' };

export const BoldModifier = ModifierTemplate.bind({});
BoldModifier.args = { modifier: 'bold' };

export const CircleModifier = ModifierTemplate.bind({});
CircleModifier.args = { modifier: 'circle' };

export const PillModifier = ModifierTemplate.bind({});
PillModifier.args = { modifier: 'pill' };

export const DangerModifier = ModifierTemplate.bind({});
DangerModifier.args = { modifier: 'danger' };

export const FavoriteModifier = ModifierTemplate.bind({});
FavoriteModifier.args = { modifier: 'favorite' };

export const ExtraBigModifier = ModifierTemplate.bind({});
ExtraBigModifier.args = { modifier: 'extra_big' };

export const ExtraTinyModifier = ModifierTemplate.bind({});
ExtraTinyModifier.args = { modifier: 'extra_tiny' };

export const FullwidthModifier = ModifierTemplate.bind({});
FullwidthModifier.args = { modifier: 'fullwidth' };

export const FullheightModifier = ModifierTemplate.bind({});
FullheightModifier.args = { modifier: 'fullheight' };
FullheightModifier.decorators = [
  (Story) => (
    <div style={{ height: '420px' }}>
      <Story />
    </div>
  ),
];

export const HiddenModifier = ModifierTemplate.bind({});
HiddenModifier.args = { modifier: 'hidden' };

export const IconRightModifier = ModifierTemplate.bind({});
IconRightModifier.args = {
  modifier: 'icon_right',
  icon: <UpdateIcon />,
};

export const IconRotatedModifier = ModifierTemplate.bind({});
IconRotatedModifier.args = {
  modifier: 'icon_rotated',
  icon: <UpdateIcon />,
};

export const IconSticksToBorderModifier = ModifierTemplate.bind({});
IconSticksToBorderModifier.args = {
  modifier: 'icon_sticks_to_border',
  icon: <UpdateIcon />,
};

export const InvisibleContentModifier = ModifierTemplate.bind({});
InvisibleContentModifier.args = { modifier: 'invisible_content' };

export const LeftAlignModifier = ModifierTemplate.bind({});
LeftAlignModifier.args = { modifier: 'left_align' };

export const LinkModifier = ModifierTemplate.bind({});
LinkModifier.args = { modifier: 'link' };

export const MarginBottomModifier = ModifierTemplate.bind({});
MarginBottomModifier.args = { modifier: 'margin_bottom' };

export const MarginTopModifier = ModifierTemplate.bind({});
MarginTopModifier.args = { modifier: 'margin_top' };

export const NoOutlineModifier = ModifierTemplate.bind({});
NoOutlineModifier.args = { modifier: 'no_outline' };

export const PrimaryModifier = ModifierTemplate.bind({});
PrimaryModifier.args = { modifier: 'primary' };

export const PublishModifier = ModifierTemplate.bind({});
PublishModifier.args = { modifier: 'publish' };

export const RetireModifier = ModifierTemplate.bind({});
RetireModifier.args = { modifier: 'retire' };

export const SaveModifier = ModifierTemplate.bind({});
SaveModifier.args = { modifier: 'save' };

export const SelectedModifier = ModifierTemplate.bind({});
SelectedModifier.args = { modifier: 'selected' };

export const SmallModifier = ModifierTemplate.bind({});
SmallModifier.args = { modifier: 'small' };

export const SpreadContentModifier = ModifierTemplate.bind({});
SpreadContentModifier.args = { modifier: 'spread_content' };

export const TinyModifier = ModifierTemplate.bind({});
TinyModifier.args = { modifier: 'tiny' };

export const UnobtrusiveModifier = ModifierTemplate.bind({});
UnobtrusiveModifier.args = { modifier: 'unobtrusive' };

export const UppercaseModifier = ModifierTemplate.bind({});
UppercaseModifier.args = { modifier: 'uppercase' };

export const WhiteModifier = ModifierTemplate.bind({});
WhiteModifier.args = { modifier: 'white' };

export const WithTooltip = ModifierTemplate.bind({});
WithTooltip.args = {
  text: 'Hover me',
  tooltip: <ButtonTooltip content="Gugus! 😘" />,
};

// Only to show how to pass multiple modifiers
export const ModifierAsArray = () => (
  <Button text="My modifiers are an array!" modifier={['primary', 'big']} />
);

export const WithCallback = () => (
  <Button
    text="Alert trigger"
    modifier={['primary', 'big']}
    onClick={() => console.warn('Alarm! Alaarm!')}
  />
);

// it's possible to provide a `key` - this is a special property and helps
// react with rerendering. Remove it and see how react complains.
// This property is not in the type list on purpose!
// More: https://reactjs.org/docs/lists-and-keys.html#keys
export const KeyTest = () => (
  <div>
    {[1, 2, 3].map((id) => (
      <Button key={id} text={id.toString()} />
    ))}
  </div>
);
