import { FC, forwardRef, KeyboardEvent as ReactKeyboardEvent, MouseEvent as ReactMouseEvent } from 'react';
import { Theme, FAIcon, IconStyle, Shade } from '../../';
import ARIA_LABELS from '../../AccessibiltyLabels';
import { PillPropTypes, PillTheme } from './types/propType';
import { PillStyle, PillType } from './types/enums';
import styles from './Pill.module.scss';

const Pill: FC<PillPropTypes> = forwardRef<HTMLDivElement, PillPropTypes>((props: PillPropTypes, ref) => {
  const {
    disabled = false,
    selected = false,
    title,
    imgSrc,
    colorCode,
    onPillClick,
    icon,
    className,
    pillStyle = PillStyle.DEFAULT,
    pillType = PillType.OUTLINE,
    theme = Theme.BLACK,
    rightIcon,
    ariaLabelledBy = ARIA_LABELS.ICON_BUTTON,
    ...restProps
  } = props;

  const onHandleClick = (e: ReactKeyboardEvent | ReactMouseEvent) => {
    if (onPillClick && typeof onPillClick === 'function') {
      onPillClick(e);
    }
  };

  const returnPill = () => {
    if (title) {
      return (
        <button
          className={`${styles['super-pill-button']} ${styles[pillStyle]} ${styles[pillType]} ${styles[theme]} ${
            disabled ? styles['disabled-super-pill-button'] : ''
          } ${rightIcon ? styles['with-right-icon'] : ''}
       `}
          data-testid="pill-test-id"
          disabled={disabled}
          {...restProps}
          onClick={!rightIcon ? onHandleClick : undefined}
          onKeyDown={!rightIcon ? onHandleClick : undefined}
        >
          {icon && <FAIcon {...icon} className={styles['icon']} />}
          {title}
          {rightIcon && (
            <FAIcon
              className={styles['right-icon']}
              iconName={rightIcon.iconName}
              iconStyle={rightIcon.iconStyle || IconStyle.REGULAR}
              shade={rightIcon.shade || Shade.DARK}
              theme={theme === Theme.WHITE ? Theme.BLACK : pillType === PillType.OUTLINE ? theme : Theme.WHITE}
              onClick={onHandleClick}
            />
          )}
        </button>
      );
    } else if (colorCode) {
      return (
        <button
          style={{ background: `${colorCode}` }}
          className={`${styles['swatch-pill-button']} ${disabled ? styles['disabled-pill-button'] : ''}
        `}
          disabled={disabled}
          data-testid="swatch-pill-test-id"
          onClick={onHandleClick}
          onKeyDown={onHandleClick}
        >
          {disabled && <span className={styles['strikeThrough']}></span>}
        </button>
      );
    } else if (imgSrc) {
      return (
        <div onClick={onHandleClick} onKeyDown={onHandleClick} role="button" aria-label={ariaLabelledBy} tabIndex={0}>
          <img src={imgSrc} alt="Avatar" className={styles['swatch-pill-img']} data-testid="image-pill-test-id"></img>
        </div>
      );
    } else {
      return (
        <button
          className={`${styles['super-pill-button']} ${disabled ? styles['disabled-super-pill-button'] : ''}`}
          data-testid="empty-pill-test-id"
          onClick={onHandleClick}
          onKeyDown={onHandleClick}
        ></button>
      );
    }
  };

  return (
    <div className={`${selected ? styles['pill-selected'] : styles['pill-not-selected']} ${className || ''}`} ref={ref}>
      {returnPill()}
    </div>
  );
});
Pill.displayName = 'Pill';
export { PillStyle, PillType };
export default Pill;
export type { PillTheme };
