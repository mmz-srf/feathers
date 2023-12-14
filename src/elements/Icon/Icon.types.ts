import { IconModifiersType } from './Icon';

export interface IconProps {
  modifier?: IconModifiersType | Array<IconModifiersType>;
  children?: JSX.Element;
  alt?: string;
  noStroke?: boolean;
}
