import React from 'react';
import { Theme, TextLinkPropsTypes, FAIconProps } from '../../../';

/**
 * @description close 'X' icon can not be used while textLink is passed.
 */

export type NotificationTheme = Theme.BLACK | Theme.SUCCESS | Theme.WARNING | Theme.ACTION | Theme.ERROR;
export type NotificationPropType = {
  message: string;
  theme?: NotificationTheme;
  textLink?: TextLinkPropsTypes;
  description?: string;
  hasBoldText?: boolean;
  hasNotificationIcon?: boolean;
  customIcon?: FAIconProps;
  zIndex?: number;
  onCloseClick?: React.MouseEventHandler<HTMLSpanElement> | null;
  forwardedRef?: React.ForwardedRef<HTMLDivElement>;
};
