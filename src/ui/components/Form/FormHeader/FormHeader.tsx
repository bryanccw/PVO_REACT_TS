import type { FormHeaderPropsTypes } from './types/propsType';
import styles from './FormHeader.module.scss';

const FormHeader = ({ className, caption }: FormHeaderPropsTypes) => {
  return (
    <div className={`${styles['form-header']} ${className}`}>
      <div className={styles['caption']}>{caption}</div>
    </div>
  );
};

export default FormHeader;
export type { FormHeaderPropsTypes };
