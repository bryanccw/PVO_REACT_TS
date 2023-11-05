import { forwardRef } from 'react';
import { IconStyle } from '../';
import RawTextLink from './RawTextLink';
import { TextLinkIconPosition, TextLinkStyle, TextLinkUnderlineStyle } from './types/enums';
import { TextLinkPropsTypes, TextLinkTheme } from './types/propsType';
import styles from './TextLink.module.scss';

/**
 * @description TextLink provide anchor tag wrapped with style;
 * Props -> text (Required), href (Required), theme ,target and others.
 * Prop -> target dafault value is _self.
 */
const TextLink = forwardRef<HTMLAnchorElement, TextLinkPropsTypes>(
  ({ textLinkStyle = TextLinkStyle.CHEVRON, ...restProps }: TextLinkPropsTypes, ref) => {
    const { CHEVRON, CHEVRONUNDERLINE, ICON, UNDERLINE, ICONUNDERLINE } = TextLinkStyle;
    const { HOVER, FIXED } = TextLinkUnderlineStyle;
    const { LEFT } = TextLinkIconPosition;
    const customProps = { iconPosition: LEFT, underline: HOVER, ...restProps };
    const { icon = '', iconPosition } = customProps;
    switch (textLinkStyle) {
      case CHEVRON:
        customProps.icon = {
          iconName: iconPosition === LEFT ? 'chevron-left' : 'chevron-right',
          iconStyle: IconStyle.SOLID,
        };
        customProps.customClass = styles['default-icon'];
        break;
      case CHEVRONUNDERLINE:
        customProps.icon = {
          iconName: iconPosition === LEFT ? 'chevron-left' : 'chevron-right',
          iconStyle: IconStyle.SOLID,
        };
        customProps.underline = FIXED;
        customProps.customClass = styles['default-icon'];
        break;
      case UNDERLINE:
        customProps.underline = FIXED;
        break;
      case ICON:
        if (!icon) {
          customProps.icon = {
            iconName: iconPosition === LEFT ? 'chevron-left' : 'chevron-right',
            iconStyle: IconStyle.SOLID,
          };
          customProps.customClass = styles['default-icon'];
        }
        break;
      case ICONUNDERLINE:
        if (!icon) {
          customProps.icon = {
            iconName: iconPosition === LEFT ? 'chevron-left' : 'chevron-right',
            iconStyle: IconStyle.SOLID,
          };
          customProps.customClass = 'default-icon';
        }
        customProps.underline = FIXED;
        break;
      default:
        break;
    }
    return <RawTextLink {...customProps} forwardedRef={ref} />;
  },
);
TextLink.displayName = 'TextLink';

export { TextLinkIconPosition, TextLinkStyle, TextLinkUnderlineStyle };
export type { TextLinkPropsTypes, TextLinkTheme };
export default TextLink;
