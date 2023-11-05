import { CircularProgress } from '@material-ui/core';
import styles from './Loading.module.scss';

export const Loading = () => {
  return (
    <div className={styles['framework-loading']}>
      <CircularProgress />
    </div>
  );
};
