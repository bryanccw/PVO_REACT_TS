import type { FieldWrapperPropsTypes } from './types/propsType';
import styles from './FieldWrapper.module.scss';

const FieldWrapper = ({ children, className }: FieldWrapperPropsTypes) => {
  return <div className={`${styles['field-wrapper']} ${className}`}>{children}</div>;
};

export default FieldWrapper;
export type { FieldWrapperPropsTypes };
