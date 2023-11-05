import { AnchorHTMLAttributes, ForwardedRef } from 'react';
import { Theme, IconPropInterface } from '../../';
import { TextLinkIconPosition, TextLinkStyle, TextLinkUnderlineStyle } from './enums';
/**
 * @type props => icon can be used as follows -
 * cheveron-right;
 * icon = { icon: faChevronLeft, shade: Shade.LIGHT|DARK }
 */
export type TextLinkTheme =
  | Theme.SUCCESS
  | Theme.WARNING
  | Theme.ERROR
  | Theme.PURPLE
  | Theme.BLUE
  | Theme.GREEN
  | Theme.RED
  | Theme.YELLOW
  | Theme.ORANGE
  | Theme.ACTION
  | Theme.BLACK
  | Theme.WHITE;
export interface RawLinkPropsTypes extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  disabled?: boolean;
  theme?: TextLinkTheme;
  icon?: IconPropInterface;
  customClass?: string;
  iconPosition?: TextLinkIconPosition;
  textLinkStyle?: TextLinkStyle;
  underline?: TextLinkUnderlineStyle;
  forwardedRef?: ForwardedRef<HTMLAnchorElement>;
  legacyBehavior?: boolean;
  ariaLabelledBy?: string;
}
export type TextLinkPropsTypes = Omit<RawLinkPropsTypes, 'className' | 'forwardedRef'>;
