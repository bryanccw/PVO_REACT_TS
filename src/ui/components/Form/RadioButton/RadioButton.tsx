import { FC, forwardRef } from 'react';

import { RadioPropsTypes, RadioButtonTheme } from './types/propsType';
import styles from './RadioButton.module.scss';

const RadioButton: FC<RadioPropsTypes> = forwardRef<HTMLInputElement, RadioPropsTypes>(
  (
    {
      label,
      disabled,
      theme,
      id = '',
      className = '',
      checked = false,
      name = 'radioButton',
      forwardedRef,
      ...restProps
    },
    ref,
  ) => {
    const wrapperClass = disabled ? styles['disabled'] : theme ? styles[theme] : '';
    const radioButtonId = `${name}-${Math.floor(1000 + Math.random() * 9000)}`;
    return (
      <span className={`${styles['radio-container']} ${wrapperClass}`} data-testid="radio-test-id">
        <span className={styles['radiobutton-container']}>
          <input
            type="radio"
            id={id || radioButtonId}
            disabled={disabled}
            className={className}
            checked={checked}
            ref={ref || forwardedRef}
            {...restProps}
          />
          <span className={styles['check']}></span>
        </span>
        {label && (
          <label
            htmlFor={id || radioButtonId}
            className={`${styles['label-text']} ${checked ? styles['checked'] : ''}`}
          >
            {label}
          </label>
        )}
      </span>
    );
  },
);
RadioButton.displayName = 'RadioButton';
export default RadioButton;
export type { RadioButtonTheme };
