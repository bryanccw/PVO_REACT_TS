import { FC, forwardRef, ChangeEvent } from 'react';
import { MLPVersion } from '../../';
import FloatLabelInput from './FloatLabelInput/FloatLabelInput';
import ClassicInput from './ClassicInput/ClassicInput';
import { InputFieldPropsTypes, FloatLabelInputFieldPropType, VALUE_MAX_LENGTH, InputTheme } from './types/propsType';
import { InputValidations, InputTypes, InputAutoComplete } from './types/enums';
import './Input.scss';

const Input: FC<InputFieldPropsTypes | FloatLabelInputFieldPropType> = forwardRef<
  HTMLInputElement,
  InputFieldPropsTypes | FloatLabelInputFieldPropType
>(({ mlpVersion = MLPVersion.TWO, ...restProps }: InputFieldPropsTypes | FloatLabelInputFieldPropType, ref) => {
  const onInput = (_e: ChangeEvent<HTMLInputElement>) => {
    const { value, maxLength } = _e.target;
    _e.target.value = value.length > maxLength && maxLength > 0 ? value.slice(0, maxLength) : value;
  };

  const tempOnChange = restProps.onChange;
  function _onChange(event: ChangeEvent<HTMLInputElement>) {
    const { type } = restProps;
    if (type === InputTypes.NUMBER) {
      const regex = /^(\d+)?(\d+\.\d*)?$/gm;
      const res = regex.test(event.target.value);
      if (!res) {
        event.target.value = restProps.value as string;
      }
    }
    tempOnChange?.(event);
  }
  restProps.onChange = _onChange;
  if (mlpVersion === MLPVersion.TWO && restProps?.prefix) {
    restProps.maxLength =
      restProps?.maxLength && restProps.maxLength < VALUE_MAX_LENGTH ? restProps.maxLength : VALUE_MAX_LENGTH; // value length should not exceeds length 20 as per design
  }
  const WrapperInput = mlpVersion === MLPVersion.ONE ? ClassicInput : FloatLabelInput;

  return <WrapperInput onInput={onInput} {...restProps} forwardedRef={ref} />;
});
Input.displayName = 'Input';
export { InputValidations, InputTypes, InputAutoComplete, MLPVersion };
export default Input;
export type { InputTheme };
