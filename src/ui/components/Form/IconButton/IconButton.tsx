import { forwardRef, KeyboardEvent as ReactKeyboardEvent, MouseEvent as ReactMouseEvent } from 'react';
import { Theme, FAIcon } from '../../';
import { IconButtonProps, IconButtonTheme } from '../IconButton/types/propsType';
import ARIA_LABELS from '../../AccessibiltyLabels';
import styles from './IconButton.module.scss';

const IconButton = forwardRef<HTMLSpanElement, IconButtonProps>((props: IconButtonProps, ref) => {
  const {
    disabled,
    iconWithBorder = false,
    theme = Theme.BLACK,
    containerClassName = '',
    className,
    onClick,
    ariaLabelledBy = ARIA_LABELS.ICON_BUTTON,
    ...rest
  } = props;
  const onClickHandler = (e: ReactKeyboardEvent | ReactMouseEvent) => {
    if (onClick && typeof onClick === 'function') {
      onClick(e);
    }
  };

  const returnStyle = () => {
    if (disabled) {
      return styles['disabled-icon'];
    } else if (iconWithBorder) {
      return styles['border-icon'];
    } else {
      return styles[theme];
    }
  };
  return (
    <span
      tabIndex={0}
      role="button"
      aria-label={ariaLabelledBy}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      data-testid="icon-button-test-id"
      className={`${styles['iconbutton-container']} ${returnStyle()} ${containerClassName}`}
    >
      <FAIcon className={`${styles['iconbutton']} ${styles['icon']} ${className || ''}`} {...rest} ref={ref} />
    </span>
  );
});
IconButton.displayName = 'IconButton';
export default IconButton;
export type { IconButtonProps, IconButtonTheme };
