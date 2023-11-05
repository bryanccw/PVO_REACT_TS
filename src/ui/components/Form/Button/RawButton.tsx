import { FC, forwardRef } from 'react';
import { Theme, FAIcon } from '../../';
import { RawButtonPropsTypes } from './types/propsType';
import { ButtonIconPosition, ButtonSize, ButtonStyles, ButtonWidth } from './types/enums';
import styles from './Button.module.scss';

/**
 *  @description Button component provide <button></button> with basic styling;
 *  It can be used only through other Components.
 *  styling can be overriden through prop (className) only.
 *  @params props (RawButtonPropsTypes)
 */
const RawButton: FC<RawButtonPropsTypes> = forwardRef<HTMLButtonElement, RawButtonPropsTypes>(
  (props: RawButtonPropsTypes) => {
    const {
      className = '',
      title,
      disabled = false,
      size = ButtonSize.MEDIUM,
      buttonStyle = ButtonStyles.SOLID,
      theme = Theme.BLACK,
      buttonWidth = ButtonWidth.FIT_CONTENT,
      icon,
      iconPosition,
      backgroundColor,
      ...restProps
    } = props;
    const { LEFT, RIGHT } = ButtonIconPosition;
    const iconPositionLeft = icon && iconPosition === LEFT;
    const iconPositionRight = icon && iconPosition === RIGHT;
    return (
      <button
        className={`${styles['button']} ${styles[size]} ${styles[buttonWidth]} ${styles[buttonStyle]} ${styles[theme]} 
      ${className || ''} ${disabled ? styles['disabled'] : ''}`}
        ref={props.forwardedRef}
        style={
          backgroundColor
            ? {
                backgroundColor,
              }
            : {}
        }
        data-testid="button-test-id"
        disabled={disabled}
        {...restProps}
      >
        <span className={styles['content']}>
          {iconPositionLeft && (
            <FAIcon {...icon} theme={theme} className={`${styles['icon']} ${styles['icon-left']} `} />
          )}
          {title}
          {iconPositionRight && (
            <FAIcon {...icon} theme={theme} className={`${styles['icon']} ${styles['icon-right']} `} />
          )}
        </span>
      </button>
    );
  },
);
RawButton.displayName = 'RawButton';
export default RawButton;
