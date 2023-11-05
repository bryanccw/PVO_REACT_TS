import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { EventModel } from '../../../../sdk/type';
import { formatFullDate } from '../../../utils/dateUtils';
import eventImg from '../../../../assets/image/sample/sampleEvent.png';
import styles from './EventCard.module.scss';

type EventCardProps = {
  event: EventModel;
};

export const EventCard = ({ event }: EventCardProps) => {
  let navigate = useNavigate();

  const [thumbnail, setThumbnail] = useState('');

  useEffect(() => {
    if (event.venueInformation?.images?.length) {
      setThumbnail(`data:image/jpeg;base64,${event.venueInformation?.images[0]}`);
    }
  }, []);

  const eventOnClick = (event: EventModel) => {
    navigate(`/event/${event._id}`);
  };

  return (
    <div className={styles['event-card']} onClick={() => eventOnClick(event)}>
      <div className={styles['event-card-wrapper']}>
        <div className={styles['event-card-info']}>
          <div className={styles['event-card-info-title']}>{event.eventName}</div>
          <div className={styles['event-card-info-time']}>
            {formatFullDate(event?.date?.toLocaleString() || '')} <br />
            {event.venueInformation.address} . {event.venueInformation.city}
          </div>
        </div>
        <div className={styles['event-card-info-img']}>
          <img src={thumbnail || eventImg} alt="demo-pic" />
        </div>
      </div>
    </div>
  );
};
