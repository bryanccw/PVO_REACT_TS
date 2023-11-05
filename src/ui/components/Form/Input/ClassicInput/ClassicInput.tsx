import { FC, forwardRef, MouseEvent as ReactMouseEvent } from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FAIcon, Tooltip, TooltipPreference, filterIconTheme, IconStyle } from '../../../';
import { InputFieldPropsTypes } from '../types/propsType';
import { InputTypes, InputValidations } from '../types/enums';
import styles from './ClassicInput.module.scss';

/**
 * @description Input provide <input></input> with basic css;
 *  styling can be override through prop (className) only.
 *  by default : disabled, readOnly are false;
 */

const ClassicInput: FC<InputFieldPropsTypes> = forwardRef<HTMLInputElement, InputFieldPropsTypes>(
  ({
    id = '',
    name = '',
    label = '',
    message = '',
    className = '',
    labelInfo = '',
    labelInfoPreference = TooltipPreference.TOP_CENTER,
    disabled = false,
    readOnly = false,
    status,
    onClear,
    inputIcon,
    forwardedRef,
    ...restProps
  }) => {
    const inputType = restProps.type === InputTypes.NUMBER ? InputTypes.TEXT : restProps.type;

    const { DEFAULT, VALID, INVALID } = InputValidations;
    const currentIcon = inputIcon
      ? inputIcon
      : status === VALID
      ? { iconName: 'circle-check' as IconName }
      : status === INVALID
      ? { iconName: 'square-exclamation' as IconName }
      : onClear
      ? { iconName: 'x-mark' as IconName }
      : null;

    const onClick = (e: ReactMouseEvent<HTMLSpanElement, MouseEvent>) => {
      if (onClear) {
        onClear(e);
      }
    };

    return (
      <div
        id={id}
        className={`${styles['input']} ${
          status && status !== DEFAULT
            ? status === VALID
              ? styles['input-validated-valid']
              : styles['input-validated-invalid']
            : ''
        } ${inputIcon ? styles['input-icon-color'] : ''} ${styles['input-default-behaviour']}`}
      >
        {label && (
          <label htmlFor={name} className={styles['input-label']}>
            <span className={styles['input-label-text']} data-testid="input-label-text-test">
              {label}
            </span>
            {labelInfo && (
              <Tooltip message={labelInfo} preference={labelInfoPreference} className={styles['input-tool-tip']} />
            )}
          </label>
        )}
        <div
          className={
            `${styles['input-field-container']} ${disabled ? styles['disabled'] : ''}` +
            ` ${readOnly ? styles['read-only'] : ''}`
          }
        >
          <input
            className={`${styles['input-field']} ${className}`}
            data-testid="input-test-id"
            ref={forwardedRef}
            id={name}
            name={name}
            disabled={disabled}
            readOnly={readOnly}
            {...restProps}
            type={inputType}
          />
          {currentIcon && (
            <FAIcon
              theme={filterIconTheme(restProps.theme)}
              data-testid="input-icon-test-id"
              className={`${styles['input-icon']} ${styles['input-box-icon']}`}
              onClick={onClick}
              iconStyle={IconStyle.SOLID}
              {...currentIcon}
            />
          )}
        </div>
        {message && (
          <span
            role="presentation"
            aria-label="message"
            aria-details={`${label} input message`}
            className={styles['input-message']}
          >
            {message}
          </span>
        )}
      </div>
    );
  },
);
ClassicInput.displayName = 'ClassicInput';
export default ClassicInput;
