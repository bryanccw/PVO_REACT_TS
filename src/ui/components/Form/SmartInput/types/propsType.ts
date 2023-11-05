import { InputHTMLAttributes } from 'react';
import { InputTypes, InputValidations, ConditionResult } from '../../';
import { TextLinkPropsTypes } from '../../../';
import { InputType } from './enums';
/**
 * @description Placeholder is specific to Input field
 * @name props is essential when multiple input on same page
 * name should be `unique` from input fields
 */
export interface PropsTypes extends InputHTMLAttributes<HTMLInputElement> {
  smartInputType?: InputType;
  //dropdown props
  dropdownLabel?: string;
  dropdownValue?: string | number;
  dropdownDisabled?: boolean;
  disabledFilter?: boolean;
  //input props
  inputDisabled?: boolean;
  defaultLabel?: string;
  mobileLabel?: string;
  emailLabel?: string;
  inputValue?: string;
  inputType?: InputTypes;
  status?: InputValidations;
  message?: string;
  onInputChange?: (number?: string) => void;
  ctaTextLink?: TextLinkPropsTypes;
}
export type SmartInputProps = ConditionResult & PropsTypes;
