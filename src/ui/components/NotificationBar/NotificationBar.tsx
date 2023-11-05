import { useState, forwardRef } from 'react';
import {} from '../Icons/Icons';
import {} from '../Breakpoint/BreakpointProvider';
import { LinkTarget, Theme, Breakpoints, useBreakpoint, FAIcon, TextLink, TextLinkStyle, IconStyle } from '../';
import { NotificationBarPropType, NotificationBarTheme } from './types/propTypes';
import { NOTIFICATION_BAR_TEXT_LIMIT } from './types/enums';
import styles from './NotificationBar.module.scss';

/**
 * @description
 * Notification Bar component used to display full with bar with blue color theme.
 * Figma:- https://www.figma.com/file/NmGzJoDRtkn481G3lgg0Z9/Amway-DS-–%C2%A0Global-Core-Components?t=rf95r7TuC5gW3g13-0
 * @param message
 * @type string
 * @description to display in notification bar.
 *
 * @param icon
 * @type iconName
 * @description to display custom icon.
 *
 *
 * @param iconStyle
 * @type IconStyle
 * @description to display custom icon's style i.e., solid, regular, brands.
 *
 * @param linkText
 * @type string
 * @description text to display link.
 *
 * @param linkRedirect
 * @type string
 * @description redirection link on click of link text.
 *
 * @param linkTarget
 * @type string
 * @description open the link in same window or others.
 *
 * @param iconClickHandler
 * @type function
 * @description click handler for icon.
 * @returns Notification Bar React Node
 *  *
 * @param ctaLabel
 * @type string
 * @description take label to show for action.
 *
 * @param theme
 * @type string
 * @description background color
 *
 * @param ctaClickHandler
 * @type function
 * @description handle click event
 *
 * @param isCloseIconRequired
 * @type boolean
 * @description close button required
 */
const NotificationBar = forwardRef<HTMLDivElement, NotificationBarPropType>(
  (
    {
      message,
      icon = 'close',
      iconStyle = IconStyle.SOLID,
      linkText = '',
      linkRedirect = '',
      linkTarget = LinkTarget.BLANK,
      iconClickHandler,
      theme = Theme.PURPLE,
      isCloseIconRequired = true,
      ctaLabel = '',
      ctaClickHandler,
      isShowMore = true,
    }: NotificationBarPropType,
    ref,
  ) => {
    let textLimit = NOTIFICATION_BAR_TEXT_LIMIT.DESKTOP;
    // when we remove deprecated props linkText will remove and direct use ctaLabel
    const linkLabel = ctaLabel || linkText;
    const viewPortType = useBreakpoint();
    switch (viewPortType) {
      case Breakpoints.MD:
        textLimit = NOTIFICATION_BAR_TEXT_LIMIT.TABLET;
        break;
      case Breakpoints.LG:
        textLimit = NOTIFICATION_BAR_TEXT_LIMIT.DESKTOP;
        break;
      case Breakpoints.XL:
        textLimit = NOTIFICATION_BAR_TEXT_LIMIT.DESKTOP_HIGHRES;
        break;
      default:
        // Breakpoints.XS || Breakpoints.SM
        textLimit = NOTIFICATION_BAR_TEXT_LIMIT.MOBILE;
        break;
    }

    const [showViewMore, setShowViewMore] = useState<boolean>(
      isShowMore ? (linkLabel !== '' ? message.length + linkLabel.length : message.length) > textLimit : false,
    );

    return (
      <div className={`${styles['notification-bar-container']} ${styles[theme]}`} ref={ref}>
        <div className={styles['notification-bar-text']}>
          <p data-testid="notification-message">{showViewMore ? `${message.slice(0, textLimit - 9)}...` : message}</p>
          {showViewMore ? (
            <TextLink
              data-testid="view-more"
              href={''}
              target={linkTarget}
              text={'View More'}
              textLinkStyle={TextLinkStyle.UNDERLINE}
              onClick={e => {
                e.preventDefault();
                setShowViewMore(false);
              }}
            />
          ) : (
            /** When we remove deperecated props we have to remove this code as well */
            linkText !== '' && (
              <TextLink
                data-testid="link-text"
                href={linkRedirect}
                tabIndex={0}
                target={linkTarget}
                text={linkText}
                textLinkStyle={TextLinkStyle.UNDERLINE}
              />
            )
          )}
          {ctaLabel && (
            <TextLink
              data-testid="action-link"
              textLinkStyle={TextLinkStyle.UNDERLINE}
              text={ctaLabel}
              onClick={() => {
                ctaClickHandler && ctaClickHandler();
              }}
            />
          )}
        </div>
        {/** When we remove deperecated props we have to remove this code as well */}
        {isCloseIconRequired && (
          <div
            className={styles['notification-close-icon']}
            data-testid="notification-icon"
            role={'presentation'}
            onClick={() => iconClickHandler && iconClickHandler()}
          >
            <FAIcon theme={Theme.WHITE} iconName={icon} iconStyle={iconStyle} className={styles['icon']} />
          </div>
        )}
      </div>
    );
  },
);
NotificationBar.displayName = 'NotificationBar';

export default NotificationBar;
export { LinkTarget };
export type { NotificationBarPropType, NotificationBarTheme };
