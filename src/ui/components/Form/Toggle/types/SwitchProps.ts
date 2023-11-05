import { InputHTMLAttributes } from 'react';
import { BasicPropsTypes } from './propsType';

export interface SwitchPropsTypes extends BasicPropsTypes, InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  isActive?: boolean;
}
