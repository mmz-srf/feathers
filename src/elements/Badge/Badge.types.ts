import { BadgeModifiersType } from './Badge';

export interface BadgeProps {
  modifier?: BadgeModifiersType | Array<BadgeModifiersType>;
  children: React.ReactNode;
}
