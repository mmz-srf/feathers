import React from 'react';
import Button, {ButtonModifiers, ButtonTooltip} from './Button';

import {UpdateIcon} from '../Icon/Icon';

export default {
  title: 'Button'
};

export const BigModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.Big} />;
export const BoldModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.Bold} />;
export const CircleModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.Circle} />;
export const DangerModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.Danger} />;
export const ExtraBigModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.ExtraBig} />;
export const ExtraTinyModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.ExtraTiny} />;
export const FullwidthModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.Fullwidth} />;
export const HiddenModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.Hidden} />;
export const IconRightModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.IconRight} icon={<UpdateIcon />} />;
export const IconRotatedModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.IconRotated} icon={<UpdateIcon />} />;
export const IconSticksToBorderModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.IconSticksToBorder} icon={<UpdateIcon />} />;
export const InvisibleContentModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.InvisibleContent} />;
export const LeftAlignModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.LeftAlign} />;
export const LinkModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.Link} />;
export const MarginBottomModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.MarginBottom} />;
export const MarginTopModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.MarginTop} />;
export const NoOutlineModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.NoOutline} />;
export const PrimaryModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.Primary} />;
export const PublishModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.Publish} />;
export const RetireModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.Retire} />;
export const SaveModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.Save} />;
export const SelectedModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.Selected} />;
export const SmallModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.Small} />;
export const SpreadContentModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.SpreadContent} />;
export const TinyModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.Tiny} />;
export const UnobtrusiveModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.Unobtrusive} />;
export const UppercaseModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.Uppercase} />;
export const WhiteModifier = () => <Button text='SRF rulez' modifier={ButtonModifiers.White} />;
export const WithText = () => <Button text='SRF rulez' />;

export const ModifierAsArray = () => <Button text='SRF rulez' modifier={[ButtonModifiers.Primary]} />;
export const MultipleModifiers = () => <Button text='SRF rulez' modifier={[ButtonModifiers.Primary, ButtonModifiers.Big]} />;

export const WithTooltip = () => <Button text='Hover me' modifier={[ButtonModifiers.Primary, ButtonModifiers.Big]} tooltip={<ButtonTooltip content="Gugus! 😘"/>} />;
