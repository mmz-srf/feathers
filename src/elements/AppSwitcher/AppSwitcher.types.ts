import React from 'react';
import { BirdsModifiersType } from './AppSwitcher';

export interface AppSwitcherProps {
  modifier?: string | Array<string>;
  currentPortal?: string;
  phase?: 'local' | 'dev' | 'int' | 'prod';
  currentBirdId: BirdsModifiersType;
  disabled?: boolean;
  children?: React.ReactNode;
}

export interface AppSwitcherButtonProps {
  bird: birdsType;
}

export interface birdsType {
  id: BirdsModifiersType;
  path: string;
  label: string;
  hint: string;
}
