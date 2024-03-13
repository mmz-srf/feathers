import { HintModifiersType } from './Hint';

export interface HintProps {
  modifier?: HintModifiersType | Array<HintModifiersType>;
  children: React.ReactNode;
  left?: boolean;
}
