import { useTranslation } from 'react-i18next';
import type { ErrorComponentPropsTypes } from './types/propsType';
import styles from './ErrorComponent.module.scss';

const ErrorComponent = ({ touched, error }: ErrorComponentPropsTypes) => {
  const { t } = useTranslation();
  return (
    <>
      {touched && error ? (
        <div className={styles['error-form']}>{t(error)}</div>
      ) : (
        <div className={styles['no-error-form']}></div>
      )}
    </>
  );
};

export default ErrorComponent;
export type { ErrorComponentPropsTypes };
