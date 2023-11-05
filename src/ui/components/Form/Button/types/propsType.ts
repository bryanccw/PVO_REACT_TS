import { ButtonHTMLAttributes, ForwardedRef } from 'react';
import { Theme, IconPropInterface } from '../../../';
import { ButtonIconPosition, ButtonStyles, ButtonSize, ButtonWidth } from './enums';

export type ButtonTheme =
  | Theme.BLACK
  | Theme.WHITE
  | Theme.PURPLE
  | Theme.BLUE
  | Theme.GREEN
  | Theme.RED
  | Theme.YELLOW
  | Theme.ORANGE;

export interface RawButtonPropsTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  buttonStyle?: ButtonStyles;
  size?: ButtonSize;
  icon?: IconPropInterface;
  iconPosition?: ButtonIconPosition;
  backgroundColor?: string;
  buttonWidth?: ButtonWidth;
  forwardedRef?: ForwardedRef<HTMLButtonElement>;
}

export type ButtonPropsTypes = Omit<RawButtonPropsTypes, 'className' | 'backgroundColor'>;
