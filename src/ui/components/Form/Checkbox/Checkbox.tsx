import { FC, forwardRef } from 'react';
import { Theme, FAIcon, IconStyle } from '../../';
import { CheckboxPropsTypes, CheckboxTheme } from './types/propsType';
import styles from './Checkbox.module.scss';

const Checkbox: FC<CheckboxPropsTypes> = forwardRef<HTMLInputElement, CheckboxPropsTypes>(
  ({ text, disabled, checked = false, theme = Theme.BLACK, ...restProps }, ref) => {
    function renderInputType() {
      return (
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          data-testid="checkbox-test-id"
          {...restProps}
        />
      );
    }

    const checkboxBorderClass = checked ? 'checkbox-border-filled' : 'checkbox-border-empty';

    return (
      <label
        className={`
      ${styles['checkbox']}
      ${styles[theme]}
      ${disabled && styles['disabled']} 
      `}
        data-testid="checkbox-container-test-id"
      >
        {renderInputType()}
        <span className={`${styles['checkbox-border']} ${styles[checkboxBorderClass]}`}>
          <FAIcon
            iconName={checked ? 'check' : 'square'}
            iconStyle={checked ? IconStyle.SOLID : IconStyle.REGULAR}
            theme={theme}
            className={`${styles['checkmark']}`}
          />
        </span>
        <span className={styles['label']}>{text}</span>
      </label>
    );
  },
);
Checkbox.displayName = 'Checkbox';

export default Checkbox;
export type { CheckboxTheme, CheckboxPropsTypes };
