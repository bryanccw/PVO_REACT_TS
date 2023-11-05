import { ForwardedRef, InputHTMLAttributes } from 'react';
import { MLPVersion, Theme, IconPropInterface } from '../../../';
import { RadioButtonAlignment } from './enums';

export type RadioButtonTheme = Theme.GRAY | Theme.PURPLE | Theme.ORANGE | Theme.BLACK | Theme.GREEN | Theme.RED;
export interface RadioPropsTypes extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  theme?: RadioButtonTheme;
  forwardedRef?: ForwardedRef<HTMLInputElement>;
}

type ConditionResult =
  | {
      icon?: IconPropInterface;
      image?: never;
      swatchColor?: never;
      value?: never;
    }
  | { icon?: never; image?: string; swatchColor?: never; value?: never }
  | { icon?: never; image?: never; swatchColor?: string; value?: never }
  | { icon?: never; image?: never; swatchColor?: never; value?: string };

interface PropsTypes extends RadioPropsTypes {
  cardDescription?: string;
  mlpVersion?: MLPVersion;
}
interface CardRadioChildrenPropsTypes {
  divider?: boolean;
  radioButtonAlignment?: RadioButtonAlignment;
}
export type CardRadioPropsTypes = PropsTypes & ConditionResult & CardRadioChildrenPropsTypes;
