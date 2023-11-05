import { ForwardedRef, InputHTMLAttributes } from 'react';
import { ConditionResult, InputTypes, InputValidations } from '../../';
import { TextLinkPropsTypes } from '../../../';
/**
 * @description Placeholder is specific to Input field
 * @name props is essential when multiple input on same page
 * name should be `unique` from input fields
 */
export interface PropTypes extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
  message?: string;
  //dropdown props
  dropdownLabel?: string;
  dropdownValue?: string | number;
  dropdownDisabled?: boolean;
  disabledFilter?: boolean;
  //input props
  inputDisabled?: boolean;
  inputLabel?: string;
  inputValue?: string;
  inputType?: InputTypes;
  status?: InputValidations;
  onInputChange?: (number?: string) => void;
  ctaTextLink?: TextLinkPropsTypes;
  forwardedRef?: ForwardedRef<HTMLInputElement>;
}
export type PhoneNumberProps = ConditionResult & PropTypes;
