import { InputHTMLAttributes, MouseEventHandler, ForwardedRef } from 'react';
import { Theme, MLPVersion, IconPropInterface, TextLinkPropsTypes, TooltipPreference } from '../../../';
import { InputValidations } from './enums';
/**
 *  to get Clear Icon, pass callback function in onClear
 */

export type InputTheme = Theme;
export interface InputFieldPropsTypes extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  message?: string;
  status?: InputValidations;
  label?: string;
  labelInfo?: string;
  labelInfoPreference?: TooltipPreference;
  theme?: InputTheme;
  onClear?: MouseEventHandler<HTMLSpanElement>;
  inputIcon?: IconPropInterface;
  ctaTextLink?: TextLinkPropsTypes;
  iconClassName?: string;
  mlpVersion?: MLPVersion;
  forwardedRef?: ForwardedRef<HTMLInputElement>;
}
export type FloatLabelInputFieldPropType = Omit<InputFieldPropsTypes, 'labelInfo' | 'onClear'> & {
  prefix?: string;
  iconImgSrc?: string;
  inputIconOnClick?: MouseEventHandler<HTMLSpanElement>;
};
// below numbers set as per design to limit characters within the input.
export const VALUE_MAX_LENGTH = 20;
export const XL_L_MAX_LENGTH = 62;
export const MD_MAX_LENGTH = 30;
export const XS_SM_MAX_LENGTH = 28;
