import React, { FC, useEffect, useState, forwardRef } from 'react';

import { Input, InputTypes, MLPVersion } from '../../';
import PhoneNumber from '../PhoneNumber/PhoneNumber';
import { InputType } from './types/enums';
import { SmartInputProps } from './types/propsType';
import styles from './SmartInput.module.scss';

const SmartInput: FC<SmartInputProps> = forwardRef<HTMLInputElement, SmartInputProps>(
  (
    {
      name = 'smartInput-element',
      dropdownLabel = '',
      dropdownValue = '',
      disabledFilter = false,
      dropdownDisabled = false,
      data = [],
      configData,
      smartInputType = InputType.EMAIL_MOBILE,
      defaultLabel = '',
      mobileLabel = '',
      emailLabel = '',
      inputValue = '',
      inputType = InputTypes.TEXT,
      inputDisabled = false,
      onInputChange,
      message,
      status,
      ...restProps
    },
    ref,
  ) => {
    const randomNumberId = `${name}${Math.floor(1000 + Math.random() * 9000)}`;
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      setLoaded(true);
      if (smartInputType === InputType.EMAIL_MOBILE && loaded) {
        const element = document.querySelector(`#${randomNumberId} input`) as HTMLInputElement;
        if (element) {
          element.focus();
        }
      }
    }, [inputValue]);

    const InputProps = {
      name: name,
      value: inputValue,
      // smartInputType: smartInputType,
      disabled: inputDisabled,
      mlpVersion: MLPVersion.TWO,
      status: status,
      message: message,
      ...restProps,
    };

    const DefaultInputField = (
      <div className={styles['smart-input']}>
        <Input
          data-testid="default-smart-input"
          label={defaultLabel}
          onChange={e => onInputChange?.(e.target.value)}
          {...InputProps}
          id={`${randomNumberId}`}
          forwardedRef={ref}
        />
      </div>
    );

    const MobileInputField = (
      <div className={styles['phone-input']}>
        <PhoneNumber
          name="phoneNumber-element"
          dropdownLabel={dropdownLabel}
          dropdownValue={dropdownValue}
          disabledFilter={disabledFilter}
          dropdownDisabled={dropdownDisabled}
          data={data}
          configData={configData}
          inputLabel={mobileLabel}
          inputType={inputType}
          inputValue={inputValue}
          inputDisabled={inputDisabled}
          status={status}
          message={message}
          onChange={e => onInputChange?.(e.target.value)}
          {...restProps}
          id={`${randomNumberId}`}
          forwardedRef={ref}
        />
      </div>
    );

    const EmailInputField = (
      <div className={styles['email-input']}>
        <Input
          data-testid="input-email"
          label={emailLabel}
          onChange={e => onInputChange?.(e.target.value)}
          {...InputProps}
          id={`${randomNumberId}`}
          forwardedRef={ref}
        />
      </div>
    );

    const InputField = () => {
      let inputField: React.ReactNode;
      if (inputValue === '') {
        inputField = DefaultInputField;
      } else if (/^\d+$/.test(inputValue)) {
        inputField = MobileInputField;
      } else {
        inputField = EmailInputField;
      }

      return inputField;
    };

    switch (smartInputType) {
      case InputType.EMAIL:
        return EmailInputField;
      case InputType.MOBILE:
        return MobileInputField;
      case InputType.EMAIL_MOBILE:
      default:
        return <div>{InputField()}</div>;
    }
  },
);
SmartInput.displayName = 'SmartInput';

export { InputType };
export default SmartInput;
