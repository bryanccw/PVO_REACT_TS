import styles from './Header.module.scss';

type Props = {
  title: string;
};

export const MobileHeaderHome = ({ title }: Props) => {
  return (
    <>
      <div className={styles['mobile-header-main']}>
        <div className={styles['page-title']}>{title}</div>
      </div>
    </>
  );
};
