import React, { FC, forwardRef } from 'react';

import { CardRadioPropsTypes } from '../types/propsType';
import { FAIcon, MLPVersion, Theme } from '../../../';
import RadioButton from '../RadioButton';
import { RadioButtonAlignment, RadioIconTypes } from '../types/enums';
import styles from './CardRadioButton.module.scss';

const CardRadioButton: FC<CardRadioPropsTypes> = forwardRef<HTMLInputElement, CardRadioPropsTypes>(
  (
    {
      label,
      disabled,
      theme = Theme.BLACK,
      className,
      icon,
      cardDescription,
      swatchColor,
      image,
      mlpVersion = MLPVersion.TWO,
      value,
      children,
      divider = false,
      radioButtonAlignment = RadioButtonAlignment.CENTER,
      name = 'cardRadioButton',
      ...restProps
    },
    ref,
  ) => {
    const wrapperClass = disabled ? styles['disabled'] : theme ? styles[theme] : '';
    let radioIconTemplate: React.ReactNode;
    let styleTemplate: React.ReactNode;
    const { ICON, SWATCHCOLOR, IMAGE, VALUE } = RadioIconTypes;
    const radioIconOption = (icon && ICON) || (image && IMAGE) || (swatchColor && SWATCHCOLOR) || (value && VALUE);
    const radioButtonId = `${name}-${Math.floor(1000 + Math.random() * 9000)}`;

    switch (radioIconOption) {
      case ICON:
        radioIconTemplate = icon && (
          <FAIcon {...icon} theme={theme} data-testid="icon-test-id" className={styles['icon left-icon']} />
        );
        break;
      case SWATCHCOLOR:
        radioIconTemplate = swatchColor && (
          <div
            style={{ background: `${swatchColor}` }}
            data-testid="swatch-test-id"
            className={`${disabled ? styles['disabled'] : ''} ${styles['swatch']} ${styles['left-icon']}`}
          >
            {disabled && <span className={styles['strikeThrough']} data-testid="line-test-id"></span>}
          </div>
        );
        break;
      case IMAGE:
        radioIconTemplate = image && (
          <img
            src={`${image}`}
            className={`${styles['image']} ${styles['left-icon']}`}
            alt="card radio icon"
            data-testid="image-test-id"
          />
        );
        break;
      case VALUE:
        radioIconTemplate = value && (
          <span className={styles['card-value']} data-testid="value-test-id">
            {value}
          </span>
        );
        break;
      default:
        break;
    }

    switch (mlpVersion) {
      case MLPVersion.ONE:
        styleTemplate = (
          <>
            <span className={styles['card-content']}>
              {radioIconTemplate}
              <span>
                <section>
                  {label && (
                    <label className={styles['card-header']} htmlFor={restProps.id || radioButtonId}>
                      {label}
                    </label>
                  )}
                </section>
                <section>
                  {cardDescription && <span className={styles['card-details']}>{cardDescription}</span>}
                </section>
              </span>
            </span>
            <span className={`${styles['card-radio-button']} ${styles[radioButtonAlignment]}`}>
              <RadioButton
                id={restProps.id || radioButtonId}
                className={className}
                theme={theme}
                disabled={disabled}
                forwardedRef={ref}
                {...restProps}
              />
            </span>
          </>
        );
        break;
      default:
        styleTemplate = (
          <>
            <div className={styles['card-radio-MLP2']}>
              <RadioButton
                id={restProps.id || radioButtonId}
                className={`${className}`}
                theme={theme}
                disabled={disabled}
                {...restProps}
              />
              <span>
                <section>
                  {label && (
                    <label htmlFor={restProps.id || radioButtonId} className={styles['card-header']}>
                      {label}
                    </label>
                  )}
                </section>
                <section>
                  {cardDescription && <span className={styles['card-details']}>{cardDescription}</span>}
                </section>
              </span>
            </div>
            <span className={styles['card-content']}>{radioIconTemplate}</span>
          </>
        );
        break;
    }

    return (
      <label
        className={`${styles['card-radio-container']} ${wrapperClass}
      `}
        data-testid="card-radio-test-id"
      >
        {styleTemplate}
        {children && (
          <div
            className={`${styles['card-radio-children-container']} ${
              divider ? styles['card-radio-children-divider'] : ''
            }`}
            data-testid="children-body-test-id"
          >
            {children}
          </div>
        )}
      </label>
    );
  },
);
CardRadioButton.displayName = 'CardRadioButton';
export { RadioButtonAlignment };
export default CardRadioButton;
