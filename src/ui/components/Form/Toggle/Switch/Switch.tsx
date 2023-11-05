import { FC } from 'react';
import { SwitchPropsTypes } from '../types/SwitchProps';
import styles from './Switch.module.scss';

const Swicth: FC<SwitchPropsTypes> = ({ text, isActive, disabled, ...restProps }: SwitchPropsTypes) => (
  <label role="presentation" className={`${styles['switch']}`}>
    <input
      type="checkbox"
      checked={disabled ? false : isActive}
      name={text}
      id={text}
      disabled={disabled}
      data-testid="switch-test-id"
      {...restProps}
    />
    <span className={`${styles['slider']} ${styles['round']}`}></span>
    <span className={`${styles['checkmark']}`}></span>
    <span className={styles['text']}>{text}</span>
  </label>
);

export default Swicth;
