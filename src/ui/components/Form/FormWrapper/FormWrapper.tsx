import { Theme, FormHeader } from '../../';
import { FormPosition } from './types/enums';
import type { FormWrapperPropsTypes } from './types/propsType';
import styles from './FormWrapper.module.scss';

const FormWrapper = ({
  className,
  caption,
  children,
  theme = Theme.WHITE,
  position = FormPosition.CENTER,
}: FormWrapperPropsTypes) => {
  return (
    <div className={`${styles['form-wrapper']} ${styles[theme]} ${styles[position]} ${className}`}>
      {caption && <FormHeader caption={caption} />}
      {children}
    </div>
  );
};

export default FormWrapper;
export { FormPosition };
export type { FormWrapperPropsTypes };
