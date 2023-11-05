import { Theme } from '../../../';

export type BubbleNotificationTheme = Theme.SUCCESS | Theme.WARNING | Theme.ACTION | Theme.ERROR;
export type BubbleNotificationPropType = {
  message: string;
  messageCount: number;
  theme?: BubbleNotificationTheme;
  className?: string;
};
