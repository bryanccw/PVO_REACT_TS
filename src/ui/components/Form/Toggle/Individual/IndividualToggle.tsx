import { FC } from 'react';
import { IndividualTogglePropTypes } from '../types/IndividualTogglePropTypes';
import { FAIcon, IconStyle } from '../../../';
import styles from './IndividualToggle.module.scss';

const IndividualToggle: FC<IndividualTogglePropTypes> = ({
  text,
  icon,
  isActive = false,
  theme,
  disabled,
  ...restProps
}: IndividualTogglePropTypes) => (
  <div
    className={`${styles['individual-container']} ${icon ? styles['icon-container'] : styles['text-container']} ${
      disabled ? '' : isActive ? '' : styles['inactive']
    } ${disabled ? '' : theme ? styles[theme] : ''} ${disabled ? styles['disabled'] : ''} `}
    {...restProps}
    data-testid="individual-test-id"
  >
    {icon ? <FAIcon {...icon} theme={theme} className={styles['icon']} iconStyle={IconStyle.SOLID} /> : text}
  </div>
);

export default IndividualToggle;
