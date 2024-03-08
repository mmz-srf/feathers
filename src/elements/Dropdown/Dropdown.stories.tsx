import React from 'react';
import DropdownButton, { DropdownPaneModifiers } from './Dropdown';

import '../../foundation/globals.scss';
import ButtonList, { ButtonListEntry } from '../ButtonList/ButtonList';
import { ImageIcon } from '../Icon/Icon';
import { ButtonModifiers, ButtonTooltip } from '../Button/Button';

export default {
  title: 'Dropdown',
  args: {
    onClick: undefined,
    icon: undefined, // Replace with your icon component
    text: 'Default Text',
    textOpen: undefined,
    modifier: undefined,
    buttonModifier: undefined,
    dropdownPaneModifier: undefined,
    disabled: false,
    tooltip: undefined, // Replace with your tooltip component
    children: 'Option',
    inProgress: false,
    initiallyOpen: false,
    badge: undefined,
    dataCy: undefined,
  },
  argTypes: {
    onClick: { action: 'clicked' },
    text: {
      control: { type: 'text' },
    },
    textOpen: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    inProgress: {
      control: { type: 'boolean' },
    },
    initiallyOpen: {
      control: { type: 'boolean' },
    },
    badge: {
      control: { type: 'text' },
    },
    modifier: {
      control: { type: 'text' },
    },
    buttonModifier: {
      options: ['', ...ButtonModifiers],
      control: { type: 'multi-select' },
    },
    dropdownPaneModifier: {
      options: ['', ...DropdownPaneModifiers],
      control: { type: 'multi-select' },
    },
  },
};

/* MODIFIER */
/* MODIFIER */
const ModifierTemplate = (args) => <DropdownButton {...args} />;

// Children Example
export const ChildrenExample = ModifierTemplate.bind({});
ChildrenExample.args = {
  text: 'Default Text',
  children: 'Your Custom Content',
  onClick: () => alert("Drop it like it's hot!"),
};

//Children Example with ButtonList
export const ButtonListComponentExample = ModifierTemplate.bind({});
ButtonListComponentExample.args = {
  text: 'Dropdown button',
  onClick: () => alert("Drop it like it's hot!"),
  children: (
    <ButtonList>
      <ButtonListEntry
        text="ButtonListEntry"
        onClick={() => console.log('clicked')}
      />
      <ButtonListEntry
        text="Icon"
        onClick={() => console.log('clicked')}
        icon={<ImageIcon />}
      />
      <ButtonListEntry
        text="Tooltip"
        onClick={() => console.log('clicked')}
        tooltip={<ButtonTooltip content="✨ Magic ✨" />}
      />
    </ButtonList>
  ),
};

// Icon Example
export const IconExample = ModifierTemplate.bind({});
IconExample.args = {
  icon: <ImageIcon />,
  text: 'Default Text',
  children: 'content',
};

// TextOpen Example
export const TextOpenExample = ModifierTemplate.bind({});
TextOpenExample.args = {
  text: 'Default Text',
  textOpen: 'Open Text',
  children: 'content',
};

// Modifier Example
export const ModifierExample = ModifierTemplate.bind({});
ModifierExample.args = {
  text: 'Default Text',
  modifier: 'your-custom-modifier',
  children: 'content',
};

// Disabled Example
export const DisabledExample = ModifierTemplate.bind({});
DisabledExample.args = {
  text: 'Default Text',
  disabled: true,
  children: 'content',
};

// Tooltip Example
export const TooltipExample = ModifierTemplate.bind({});
TooltipExample.args = {
  text: 'Default Text',
  tooltip: <ButtonTooltip content="✨ Magic ✨" />,
  children: 'content',
};

// InProgress Example
export const InProgressExample = ModifierTemplate.bind({});
InProgressExample.args = {
  text: 'Default Text',
  inProgress: true,
  children: 'content',
};

// InitiallyOpen Example
export const InitiallyOpenExample = ModifierTemplate.bind({});
InitiallyOpenExample.args = {
  text: 'Default Text',
  initiallyOpen: true,
  children: 'content',
};

// Badge Example
export const BadgeExample = ModifierTemplate.bind({});
BadgeExample.args = {
  text: 'Default Text',
  badge: 'New',
  children: 'content',
};

//dropdownPaneModifier
export const Scrollable = ModifierTemplate.bind({});
Scrollable.args = {
  text: 'Dropdown button',
  dropdownPaneModifier: ['scrollable'],
  onClick: () => alert("Drop it like it's hot!"),
  children: 'content',
};

export const Transparent = ModifierTemplate.bind({});
Transparent.args = {
  text: 'Dropdown button',
  dropdownPaneModifier: ['transparent'],
  onClick: () => alert("Drop it like it's hot!"),
  children: 'content',
};

export const UpsideDown = ModifierTemplate.bind({});
UpsideDown.args = {
  text: 'Dropdown button',
  dropdownPaneModifier: ['open_upwards'],
  onClick: () => alert("Drop it like it's hot!"),
  children: 'content',
};
export const OpenToRight = ModifierTemplate.bind({});
OpenToRight.args = {
  text: 'Dropdown button',
  dropdownPaneModifier: ['open_to_right'],
  onClick: () => alert("Drop it like it's hot!"),
  children: 'content',
};

//buttonModifier
//see button for more examples

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
