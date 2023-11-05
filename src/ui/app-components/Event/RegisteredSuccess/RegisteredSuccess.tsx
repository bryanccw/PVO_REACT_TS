import { useEffect, useState } from 'react';
import type { RegistrationModel } from '../../../../sdk/type';
import SuccessBG from '../../../../assets/image/success-bg.png';
import styles from './RegisteredSuccess.module.scss';

type props = {
  registration: RegistrationModel;
};

export const RegisteredSuccess = ({ registration }: props) => {
  const [registrationInfo, setRegistrationInfo] = useState<RegistrationModel>(registration);

  useEffect(() => {
    // Setting up data
    setRegistrationInfo(registration);
  }, []);

  return (
    <>
      <div className={styles['success-wrapper']}>
        <div className={styles['successInfo-box']}>
          <img className={styles['successInfo-box-bg']} src={SuccessBG} alt="success" />
          <div className={styles['successInfo-box-title']}>Registration Saved</div>
          <div className={styles['successInfo-box-info']}>You&apos;re all set!</div>
          <div className={styles['successInfo-box-desc']}>
            You reserved [{registrationInfo?.totalTickets}] tickets to {registrationInfo?.event.eventName}. You and your
            guests will receive a confirmation email within 24 hours.
          </div>
        </div>
      </div>
    </>
  );
};
