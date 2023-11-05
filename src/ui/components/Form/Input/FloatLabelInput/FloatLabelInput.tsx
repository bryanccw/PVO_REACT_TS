import { FC, forwardRef, useEffect, useState, useRef, MouseEvent as ReactMouseEvent, MutableRefObject } from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import {
  FAIcon,
  ViewPortSizes,
  useBreakpoint,
  Theme,
  TextLinkUnderlineStyle,
  filterIconTheme,
  IconStyle,
} from '../../../';
import { FloatLabelInputFieldPropType, MD_MAX_LENGTH, XL_L_MAX_LENGTH, XS_SM_MAX_LENGTH } from '../types/propsType';
import { InputTypes, InputValidations } from '../types/enums';
import RawTextLink from '../../../TextLink/RawTextLink';
import styles from './FloatLabelInput.module.scss';

/**
 * @description Input provide <FloatLabelInput></FloatLabelInput> with basic css;
 *  styling can be override through prop (className) only.
 *  by default : disabled, readOnly are false;
 *  Use unique name to distinguish input from from other input elements on same page.
 */

const FloatLabelInput: FC<FloatLabelInputFieldPropType> = forwardRef<HTMLInputElement, FloatLabelInputFieldPropType>(
  ({
    id = '',
    name = '',
    label = '',
    message = '',
    className = '',
    disabled = false,
    readOnly = false,
    status,
    value,
    placeholder,
    inputIcon,
    prefix = '',
    ctaTextLink,
    iconImgSrc,
    iconClassName,
    inputIconOnClick,
    forwardedRef,
    ...restProps
  }) => {
    const inputContainerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const inputType = restProps.type === InputTypes.NUMBER ? InputTypes.TEXT : restProps.type;
    const { VALID, INVALID } = InputValidations;
    const [isFocused, setIsFocused] = useState(false);
    const [inputPrefix, setInputPrefix] = useState(prefix ?? '');
    const viewPortType = useBreakpoint();

    let currentIcon = null,
      statusClassName = '';
    if (status === VALID) {
      currentIcon = { iconName: 'circle-check' as IconName };
      statusClassName = 'input-validated-valid';
    } else if (status === INVALID) {
      currentIcon = { iconName: 'square-exclamation' as IconName };
      statusClassName = 'input-validated-invalid';
    }

    const ignoreTheseSymbols = ['e', 'E', '+', '-'];

    // To update component incase of prefix change
    useEffect(() => {
      !isFocused && setIsFocused(!!(prefix || value));
      // truncate prefix when length exceeds
      let fieldMaxLength = 0;

      const { width: elementWidth } = inputContainerRef.current.getBoundingClientRect();
      const { MEDIUM, LARGE, XLARGE } = ViewPortSizes;
      if (elementWidth >= XLARGE || elementWidth >= LARGE) {
        fieldMaxLength = XL_L_MAX_LENGTH;
      } else if (elementWidth >= MEDIUM) {
        fieldMaxLength = MD_MAX_LENGTH;
      } else {
        fieldMaxLength = XS_SM_MAX_LENGTH;
      }
      if (fieldMaxLength) {
        const prefixAvaialbleLength = fieldMaxLength - `${value}`.length;
        setInputPrefix(
          prefixAvaialbleLength < prefix.length
            ? `...${prefix.substring(prefix.length - prefixAvaialbleLength, prefix.length)}`
            : prefix,
        );
      }
    }, [prefix, value, viewPortType]);

    return (
      <div
        id={id}
        className={`${styles['input']} ${styles[statusClassName]} ${inputIcon ? styles['input-icon-color'] : ''} ${
          styles['input-default-behaviour']
        }`}
        ref={inputContainerRef}
      >
        <div
          className={`${styles['input-field-container']} ${styles['float-input-container']} ${
            value || isFocused ? styles['input-focused'] : ''
          } ${disabled ? styles['disabled'] : ''} ${readOnly ? styles['read-only'] : ''} `}
        >
          {label && (
            <label
              htmlFor={`float-input-field-${name}`}
              className={styles['float-input-label']}
              data-testid="input-label-text-test"
            >
              {label}
            </label>
          )}
          <section className={styles['float-input-body']}>
            {prefix && <div className={styles['float-partial-input']}>{inputPrefix}</div>}
            <input
              id={`float-input-field-${name}`}
              className={`${styles['float-input-field']} ${className}`}
              placeholder={label || prefix ? '' : placeholder}
              data-testid="float-input-test-id"
              name={name}
              ref={forwardedRef}
              disabled={disabled}
              readOnly={readOnly}
              value={value}
              onFocus={e => {
                setIsFocused(true);
                restProps?.onFocus?.(e);
              }}
              onBlur={e => {
                setIsFocused(!!(prefix || value));
                restProps?.onBlur?.(e);
              }}
              onKeyDown={e =>
                restProps?.type === InputTypes.NUMBER && ignoreTheseSymbols.includes(e.key) && e.preventDefault()
              }
              {...restProps}
              type={inputType}
            />
            {ctaTextLink?.text && (
              <RawTextLink
                underline={TextLinkUnderlineStyle.FIXED}
                {...ctaTextLink}
                theme={Theme.BLACK}
                disabled={disabled || ctaTextLink.disabled}
                className={styles['input-cta-textlink']}
              />
            )}
          </section>
          {iconImgSrc ? (
            <div className={styles['image-container']}>
              <img
                data-testid="input-box-img-test-id"
                className={`${styles['icon-image']} ${iconClassName || ''}`}
                src={iconImgSrc}
                alt="input-icon"
              />
            </div>
          ) : (
            inputIcon && (
              <FAIcon
                {...inputIcon}
                iconStyle={IconStyle.SOLID}
                theme={filterIconTheme(restProps.theme)}
                data-testid="input-box-icon-test-id"
                className={`${styles['input-icon']} ${styles['input-box-icon']}`}
                onClick={(e: ReactMouseEvent<HTMLSpanElement, MouseEvent>) => inputIconOnClick?.(e)}
              />
            )
          )}
        </div>
        {(currentIcon || message) && (
          <span
            role="presentation"
            aria-label="message"
            aria-details={`${label} input message`}
            className={`${styles['input-message']} ${styles['float-input-message']}`}
          >
            {currentIcon && (
              <FAIcon
                {...currentIcon}
                iconStyle={IconStyle.SOLID}
                theme={filterIconTheme(restProps.theme)}
                data-testid="input-icon-test-id"
                className={styles['input-icon']}
              />
            )}
            {message && <span className={styles['float-message']}>{message}</span>}
          </span>
        )}
      </div>
    );
  },
);
FloatLabelInput.displayName = 'FloatLabelInput';
export default FloatLabelInput;
