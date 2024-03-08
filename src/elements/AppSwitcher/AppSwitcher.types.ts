import { BirdsModifiersType } from './AppSwitcher';

export interface AppSwitcherProps {
  modifier?: string | Array<string>;
  currentPortal: string;
  phase: 'local' | 'dev' | 'int' | 'prod';
  currentBirdId: BirdsModifiersType;
}
