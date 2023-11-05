import { FC, forwardRef, MouseEvent as ReactMouseEvent } from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import {
  Theme,
  FAIcon,
  FAIconProps,
  IconStyle,
  filterIconTheme,
  filterTextLinkTheme,
  TextLink,
  TextLinkStyle,
} from '../../';
import { NotificationPropType, NotificationTheme } from './types/propsType';
import styles from './Notification.module.scss';

function getNotificationIcon(type: Theme, customIcon: IconName) {
  if (customIcon) {
    return customIcon;
  }
  switch (type) {
    case Theme.SUCCESS:
      return 'circle-check';
    case Theme.WARNING:
      return 'triangle-exclamation';
    case Theme.ERROR:
      return 'square-exclamation';
    case Theme.ACTION:
      return 'bolt';
    default:
      return null;
  }
}

const Notification: FC<NotificationPropType> = forwardRef<HTMLDivElement, NotificationPropType>(
  (
    {
      textLink,
      message,
      description,
      onCloseClick = null,
      theme = Theme.SUCCESS,
      hasNotificationIcon = true,
      customIcon,
      hasBoldText = true,
      zIndex = 4,
      ...restProps
    },
    ref,
  ) => {
    const customIconProps = customIcon || ({} as FAIconProps);
    const { iconName, iconStyle = IconStyle.SOLID, className = '', ...restCustomIconProps } = customIconProps;

    const notificationIconCondition = getNotificationIcon(theme, iconName);
    const handleOnCloseClick = (e: ReactMouseEvent<HTMLSpanElement, MouseEvent>) => {
      if (onCloseClick && typeof onCloseClick === 'function') {
        onCloseClick(e);
      }
    };
    return (
      <div
        className={`${styles['notification-container']} ${styles[theme]} ${
          description ? styles['detailed-notififation'] : ''
        }`}
        style={zIndex && zIndex <= 5 ? { zIndex: zIndex } : { zIndex: 4 }}
        {...restProps}
        ref={ref || restProps?.forwardedRef}
      >
        <span className={styles['sub-continer']}>
          {hasNotificationIcon && notificationIconCondition && (
            <FAIcon
              iconName={notificationIconCondition}
              iconStyle={iconStyle}
              className={`${styles['icon']} ${description ? styles['icon-spacing'] : ''} ${className}`}
              {...restCustomIconProps}
            />
          )}
          <section data-testid="notification-info-testid">
            <p className={`${!hasBoldText && styles['no-bold-text']}`}>{message}</p>
            {description ? <p className={styles['message-deatils']}>{description}</p> : <></>}
          </section>
        </span>
        {textLink?.text ? (
          <div className={styles['notification-text-link']}>
            <TextLink
              href={textLink.href}
              text={textLink.text}
              theme={filterTextLinkTheme(theme)}
              textLinkStyle={TextLinkStyle.UNDERLINE}
            />
          </div>
        ) : (
          <></>
        )}
        <FAIcon
          iconName={'xmark'}
          iconStyle={IconStyle.SOLID}
          theme={filterIconTheme(theme)}
          onClick={handleOnCloseClick}
          data-testid="notification-close-icon"
        />
      </div>
    );
  },
);
Notification.displayName = 'Notification';

export default Notification;
export type { NotificationPropType, NotificationTheme };
