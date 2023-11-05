import { IconName } from '@fortawesome/fontawesome-svg-core';
import { LinkTarget, Theme, IconStyle } from '../../';

/**
 ** @param message
 * @type string
 * @description to display in notification bar.
 *
 ** @param icon
 * @type IconName
 * @description to display custom icon.
 *
 ** @param linkText
 * @type string
 * @description text to display link.
 *
 ** @param linkRedirect
 * @type string
 * @description redirection link on click of link text.
 *
 ** @param linkTarget
 * @type string
 * @description open the link in same window or others.
 *
 ** @param iconClickHandler
 * @type function
 * @description click handler for icon.
 *
 ** @param ctaLabel
 * @type string
 * @description label i.e. reload page
 *
 ** @param ctaClickHandler
 * @type function
 * @description callback for action perform i.e. page reload
 */
export type NotificationBarTheme = Theme.PURPLE | Theme.RED;
export interface NotificationBarPropType {
  message: string;
  /**
   * @deprecated icon prop will be removed in future version
   */
  icon?: IconName;
  /**
   * @deprecated iconStyle prop will be removed in future version
   */
  iconStyle?: IconStyle;
  /**
   * @deprecated linkText prop will be removed in future version
   */
  linkText?: string;
  /**
   * @deprecated linkRedirect prop will be removed in future version
   */
  linkRedirect?: string;
  /**
   * @deprecated linkTarget prop will be removed in future version
   */
  linkTarget?: LinkTarget;
  /**
   * @deprecated linkTarget prop will be removed in future version
   */
  iconClickHandler?: () => 0;
  isCloseIconRequired?: boolean;
  theme?: NotificationBarTheme;
  ctaLabel?: string;
  ctaClickHandler?: () => void;
  isShowMore?: boolean;
}
