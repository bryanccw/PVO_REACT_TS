import { TextareaHTMLAttributes, ForwardedRef } from 'react';
import { MLPVersion } from '../../../';
import { TextAreaValidations } from './enums';

export interface TextAreaPropsType extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  labelInfo?: string;
  status?: TextAreaValidations;
  resize?: boolean;
  message?: string;
  mlpVersion?: MLPVersion;
  forwardedRef?: ForwardedRef<HTMLTextAreaElement>;
}
