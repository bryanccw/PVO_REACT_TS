import { ReactNode } from 'react';
import { Theme } from '../../../';
import { FormPosition } from './enums';

export interface FormWrapperPropsTypes {
  children?: ReactNode | ReactNode[];
  className?: string;
  caption?: string;
  theme?: FormTheme;
  position?: FormPosition;
}

export type FormTheme =
  | Theme.BLACK
  | Theme.WHITE
  | Theme.PURPLE
  | Theme.BLUE
  | Theme.GREEN
  | Theme.RED
  | Theme.YELLOW
  | Theme.ORANGE;
