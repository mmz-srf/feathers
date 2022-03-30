import React from 'react';
import Button from './Button';

import { UpdateIcon, ExclamationMarkIcon, SettingsIcon } from '../Icon/Icon';

export default {
  title: 'Button'
};

export const PrimaryModifier = () => <Button text='SRF rulez' modifier='primary' />;
export const SaveModifier = () => <Button text='SRF rulez' modifier='save' />;
export const PublishModifier = () => <Button text='SRF rulez' modifier='publish' />;
export const RetireModifier = () => <Button text='SRF rulez' modifier='retire' />;
export const DangerModifier = () => <Button text='SRF rulez' modifier='danger' />;
export const WhiteModifier = () => <Button text='SRF rulez' modifier='white' />;
export const UnobtrusiveModifier = () => <Button text='SRF rulez' modifier='unobtrustive' />;
export const FullwidthModifier = () => <Button text='SRF rulez' modifier='fullwidth' />;
export const MarginTopModifier = () => <Button text='SRF rulez' modifier='margin_top' />;
export const MarginBottomModifier = () => <Button text='SRF rulez' modifier='margin_bottom' />;
export const LeftAlignModifier = () => <Button text='SRF rulez' modifier='left_align' />;
export const IconRotatedModifier = () => <Button text='SRF rulez' modifier='icon_rotated' icon={<UpdateIcon />} />;
export const InvisibleContentModifier = () => <Button text='SRF rulez' modifier='invisible_content' />;
export const NoOutlineModifier = () => <Button text='SRF rulez' modifier='no_outline' />;
export const ExtraBigModifier = () => <Button text='SRF rulez' modifier='extra_big' />;
export const BigModifier = () => <Button text='SRF rulez' modifier='big' />;
export const SmallModifier = () => <Button text='SRF rulez' modifier='small' />;
export const ExtraTinyModifier = () => <Button text='SRF rulez' modifier='extra_tiny' />;
export const TinyModifier = () => <Button text='SRF rulez' modifier='tiny' />;
export const HiddenModifier = () => <Button text='SRF rulez' modifier='hidden' />;
export const IconRightModifier = () => <Button text='SRF rulez' modifier='icon_right' icon={<UpdateIcon />} />;
export const IconSticksToBorderModifier = () => <Button text='SRF rulez' modifier='icon_sticks_to_border' icon={<UpdateIcon />} />;
export const SpreadContentModifier = () => <Button text='SRF rulez' modifier='spread_content' />;
export const BoldModifier = () => <Button text='SRF rulez' modifier='bold' />;
export const SelectedModifier = () => <Button text='SRF rulez' modifier='selected' />;
export const UppercaseModifier = () => <Button text='SRF rulez' modifier='uppercase' />;
export const LinkModifier = () => <Button text='SRF rulez' modifier='link' />;
export const CircleModifier = () => <Button text='SRF rulez' modifier='circle' />;
export const WithText = () => <Button text='SRF rulez' />;
