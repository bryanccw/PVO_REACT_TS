import { InputHTMLAttributes } from 'react';
import { IconPropInterface } from '../../../';
import { BasicPropsTypes } from './propsType';

export interface IndividualTogglePropTypes extends BasicPropsTypes, InputHTMLAttributes<HTMLDivElement> {
  text?: string;
  className?: string;
  icon?: IconPropInterface;
  isActive?: boolean;
}
