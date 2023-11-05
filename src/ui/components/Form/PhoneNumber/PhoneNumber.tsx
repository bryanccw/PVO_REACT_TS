import { forwardRef, useState } from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Theme, MLPVersion, FAIcon } from '../../';
import { DropDown, Input, InputTypes, InputValidations } from '../';
import { PhoneNumberProps } from './types/propsType';
import styles from './PhoneNumber.module.scss';

/**
 *
 *  by default : disabledFilter, dropdownDisabled, inputDisabled is false;
 *  name is required prop
 */

const PhoneNumber = forwardRef<HTMLDivElement, PhoneNumberProps>(
  (
    {
      className,
      name,
      dropdownLabel = '',
      dropdownValue = '',
      disabledFilter = false,
      dropdownDisabled = false,
      data = [],
      configData,
      inputType = InputTypes.NUMBER,
      inputLabel = '',
      inputValue = '',
      inputDisabled = false,
      message,
      onInputChange,
      status,
      onBlur,
      forwardedRef,
      ...restProps
    }: PhoneNumberProps,
    ref,
  ): JSX.Element => {
    const { INVALID, VALID } = InputValidations;
    const [isElementFocused, setIsElementFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const inputValidationStatus = () => {
      if (status) {
        if (status === VALID) {
          return styles['valid'];
        } else if (status === INVALID) {
          return styles['invalid'];
        }
      }

      return '';
    };

    const disabledStateClass = () => {
      if (dropdownDisabled && inputDisabled) {
        return styles['disabled'];
      } else if (dropdownDisabled) {
        return styles['disabled-dropdown'];
      } else if (inputDisabled) {
        return styles['disabled-input'];
      }
      return '';
    };

    const currentIcon = (function () {
      if (status) {
        if (status === VALID) {
          return { iconName: 'circle-check' as IconName };
        } else if (status === INVALID) {
          return { iconName: 'square-exclamation' as IconName };
        }
      }

      return null;
    })();

    return (
      <div
        className={`${styles['phone-number-wrapper']} ${disabledStateClass()} ${inputValidationStatus()} ${className}`}
        data-testid="phone-container"
        ref={ref ?? forwardedRef}
      >
        <section
          className={`${styles['phone-number-body']} ${isHovered ? styles['element-ishovered'] : ''} ${
            isElementFocused ? styles['element-isfocused'] : ''
          }`}
        >
          <span
            className={`${styles['dropdown-number']} ${dropdownDisabled ? styles['disable-dropdown'] : ''} ${
              status ? styles[status] : ''
            }`}
          >
            <DropDown
              data-testid="number-dropDown"
              disabled={dropdownDisabled}
              name={name}
              data={data}
              configData={configData}
              value={dropdownValue}
              dropdownLabel={dropdownLabel}
              disabledFilter={disabledFilter}
              onBlur={onBlur}
            />
          </span>
          <span
            className={`${styles['input-number']} ${inputDisabled ? styles['disable-input'] : ''}`}
            onMouseOver={() => {
              !inputDisabled && setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            onFocus={() => {
              !inputDisabled && setIsElementFocused(true);
            }}
            onBlur={() => {
              setIsElementFocused(false);
            }}
          >
            <Input
              data-testid="input-number"
              label={inputLabel}
              name={name}
              value={inputValue}
              type={inputType}
              disabled={inputDisabled}
              readOnly={inputDisabled}
              mlpVersion={MLPVersion.TWO}
              onChange={e => {
                if (onInputChange) {
                  onInputChange(e.target.value);
                }
              }}
              {...restProps}
            />
          </span>
        </section>
        {message ? (
          <span
            role="presentation"
            aria-label="message"
            aria-details={`${inputLabel} phone number message`}
            className={`${styles['phone-number-message-container']}`}
          >
            {currentIcon ? (
              <FAIcon {...currentIcon} theme={Theme.BLACK} className={styles['phone-number-message-icon']} />
            ) : (
              ''
            )}
            {message && (
              <span data-testid="phone-number-message" className={styles['phone-number-message']}>
                {message}
              </span>
            )}
          </span>
        ) : (
          ''
        )}
      </div>
    );
  },
);
PhoneNumber.displayName = 'PhoneNumber';
export { InputTypes };
export default PhoneNumber;
