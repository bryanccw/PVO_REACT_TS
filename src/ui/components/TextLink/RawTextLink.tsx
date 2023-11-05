import { FC } from 'react';
import { FAIcon, GenericLink, filterIconTheme } from '../';
import { RawLinkPropsTypes } from './types/propsType';
import { TextLinkIconPosition, TextLinkUnderlineStyle } from './types/enums';
import styles from './TextLink.module.scss';

/**
 *
 * @description RawTextLink provide <a></a> with basic css;
 *  it can be used only through other Components.
 *  styling can be override through prop (className) only.
 *  Ex-  TextLink, Card with Images.
 *  Note :-  TextLink uses GenericLink.
 */

const RawTextLink: FC<RawLinkPropsTypes> = ({
  text,
  className,
  disabled,
  href = '',
  theme,
  icon,
  customClass,
  iconPosition,
  underline = TextLinkUnderlineStyle.HOVER,
  onClick,
  forwardedRef,
  ariaLabelledBy,
  ...restProps
}) => {
  const { LEFT, RIGHT } = TextLinkIconPosition;

  //filters underline class corresponding to prop
  const { HOVER, NOHOVER, FIXED } = TextLinkUnderlineStyle;
  const underlineClassName = {
    [HOVER]: '',
    [NOHOVER]: styles['no-hover-underline'],
    [FIXED]: styles['fixed-underline'],
  }[underline];
  return (
    <span
      role="link"
      aria-label={ariaLabelledBy}
      className={`${styles['text-link']} ${underlineClassName} ${theme ? styles[theme] : ''} ${className || ''} ${
        disabled ? styles['disabled'] : ''
      }`}
      data-testid="textlink-test-id"
      onClick={onClick}
      onKeyDown={restProps.onKeyDown}
      tabIndex={0}
    >
      {iconPosition === LEFT && icon && (
        <FAIcon
          {...icon}
          theme={filterIconTheme(theme)}
          className={`${styles['icon']} ${customClass || ''} ${styles['icon-left']}`}
        />
      )}
      <GenericLink href={onClick ? '#' : href} {...restProps} forwardedRef={forwardedRef}>
        {text}
      </GenericLink>
      {iconPosition === RIGHT && icon && (
        <FAIcon
          {...icon}
          theme={filterIconTheme(theme)}
          className={`${styles['icon']} ${customClass || ''} ${styles['icon-right']}`}
        />
      )}
    </span>
  );
};
RawTextLink.displayName = 'RawTextLink';
export default RawTextLink;
