import { ReactNode, InputHTMLAttributes } from 'react';
import { Theme } from '../../../types/enums';

export type CheckboxTheme = Theme.BLUE | Theme.BLACK | Theme.WHITE;

export interface CheckboxPropsTypes extends InputHTMLAttributes<HTMLInputElement> {
  text: ReactNode;
  checkboxStyle?: string;
  theme?: CheckboxTheme;
}
