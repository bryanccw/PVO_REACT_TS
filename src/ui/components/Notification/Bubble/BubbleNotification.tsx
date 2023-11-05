import { FC, forwardRef } from 'react';
import { Theme } from '../../';
import { BubbleNotificationPropType, BubbleNotificationTheme } from './types/propsType';
import styles from './BubbleNotification.module.scss';

const BubbleNotification: FC<BubbleNotificationPropType> = forwardRef<HTMLDivElement, BubbleNotificationPropType>(
  ({ message, messageCount, theme = Theme.SUCCESS, className = '', ...restProps }, ref) => (
    <div
      className={`${styles['bubble-container']} ${styles[theme]} ${className}`}
      {...restProps}
      data-testid="bubble-test-id"
      ref={ref}
    >
      <span className={`${styles['messageCount']}`}>{`${messageCount}`}</span>
      <span className={`${styles['message']}`}>{`${message}`}</span>
    </div>
  ),
);
BubbleNotification.displayName = 'BubbleNotification';

export default BubbleNotification;
export type { BubbleNotificationTheme };
