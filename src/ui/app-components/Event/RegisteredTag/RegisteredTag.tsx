import IconTicketsWhite from '../../../../assets/image/icons/ico-ticket-white.png';
import styles from './RegisteredTag.module.scss';

export const RegisteredTag = () => {
  return (
    <div className={styles.registeredTag}>
      <img src={IconTicketsWhite} alt="bg" />
      <div>Registered</div>
    </div>
  );
};
