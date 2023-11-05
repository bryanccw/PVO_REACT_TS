import QRCode from 'react-qr-code';
import type { TicketModel } from '../../../../sdk/type';
import styles from './Ticket.module.scss';

type props = {
  ticket: TicketModel;
};

export const Ticket = ({ ticket }: props) => {
  return (
    <>
      <div className={styles['eticket-card']}>
        <div className={styles['eticket-card-wrapper']}>
          <div className={styles['eticket-card-partyName']}>{ticket.partyName}</div>
          <div className={styles['eticket-card-fullName']}>{ticket.fullName}</div>
          <div className={styles['eticket-card-ticketQR']}>
            <QRCode value={ticket.ticketId} fgColor="#2c2c2c" size={120} />
          </div>
          <div className={styles['eticket-card-ticketId']}>
            Ticket ID {ticket.ticketId}
            <br />* Show QR code to staff to check in.
          </div>
        </div>
      </div>
    </>
  );
};
