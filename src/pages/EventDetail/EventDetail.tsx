import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { Drawer } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import type { EventModel, RegistrationModel } from '../../sdk/type';
import { useAppSelector, useAppDispatch } from '../../hooks/redux-hooks';
import { Button, IconStyle, Drawer, Page, useToast, Notification } from '../../ui/components';
import { MobileHeader, RegisteredTag, RegisteredSuccess, MediaList, Ticket } from '../../ui/app-components';
import { isTokenValid } from '../../ui/utils/auth';
import { formatTime24, formatFullDate } from '../../ui/utils/dateUtils';
import IconCalendar from '../../assets/image/icons/ico_calendar.png';
import IconLocation from '../../assets/image/icons/ico_location.png';
import IconTickets from '../../assets/image/icons/ico_tickets.png';
import registrationDataService from '../../sdk/services/registrationDataService';
import { fetchAllEvents } from '../../sdk/store/eventActions';
import eventImg from '../../assets/image/sample/sampleEvent.png';
import styles from './EventDetail.module.scss';

export const EventDetail = () => {
  let navigate = useNavigate();
  const { t } = useTranslation();
  const { addToast } = useToast();
  const dispatch = useAppDispatch();
  const rtEvents = useAppSelector(s => s.event);

  const { eventId } = useParams();
  const { status } = useParams();

  const [event, setEvent] = useState<EventModel>();
  const [thumbnail, setThumbnail] = useState('');

  const [isLogon, setLogon] = useState<boolean>(false);

  const [showRegistered, setRegistered] = useState<boolean>(false);
  const [showSuccess, setSuccess] = useState<boolean>(false);
  const [showTicket, setShowTicket] = useState<boolean>(false);

  const [registration, setRegistration] = useState<RegistrationModel>();

  useEffect(() => {
    // this is needed, because InfiniteCalendar forces window scroll
    document.querySelector('#root')?.scrollIntoView();
    window.removeEventListener('beforeunload', () => undefined);

    // demo for registered
    if (status === 'registered') {
      setSuccess(true);
      setRegistered(true);
    }

    // Sample for registration
    registrationDataService.getRegistrationData().then(registrationInfo => {
      setRegistration(registrationInfo.data[0]);
    });

    if (isTokenValid()) {
      setLogon(true);
    }
  }, []);

  useEffect(() => {
    const events: EventModel[] = rtEvents.allEvents;
    let curEvent: EventModel | undefined = events.find((a: EventModel) => a._id === eventId);

    if (!rtEvents.loaded) {
      // console.log('event not loaded, fetch by ID');
      dispatch(
        fetchAllEvents({
          limit: 30,
          searchParam: {
            eventId: eventId,
          },
        }),
      );
    } else {
      setEvent(curEvent);
    }

    if (curEvent?.venueInformation?.images?.length) {
      setThumbnail(`data:image/jpeg;base64,${curEvent.venueInformation?.images[0]}`);
    }
  }, [rtEvents]);

  const goBack = () => {
    navigate('/');
  };

  const registerEvent = () => {
    setRegistered(true);
    setSuccess(true);
  };

  const viewEventTicket = () => {
    setShowTicket(true);
  };

  const closeSuccess = () => {
    setSuccess(false);
  };

  return (
    <Page className={`${styles['event-detail-page']}  ${showRegistered ? styles['registered'] : ''}`}>
      <MobileHeader backFn={goBack} />

      <div className={styles['event-details']}>
        <div className={styles['event-details-thumbnail']}>
          <img src={thumbnail || eventImg} alt="event thumb" />
        </div>

        {event && (
          <div className={styles['event-details-wrapper']}>
            <div className={styles['event-details-title']}>
              {showRegistered && (
                <div className={styles['event-details-registered']}>
                  <RegisteredTag />
                </div>
              )}
              {event?.eventName}
            </div>
            <div className={styles['event-details-desc']}>{event?.venueInformation.description}</div>
            <div className={styles['event-details-view-toggle']}>{t('event.viewLess')}</div>
            <div className={styles['event-details-buttons']}>
              <div className={styles['share']}>
                <Button
                  onClick={() =>
                    addToast({
                      id: 'share',
                      content: <Notification message={'Share'} />,
                      topPosition: '20px',
                    })
                  }
                  title="Share"
                  icon={{
                    iconName: 'share',
                    iconStyle: IconStyle.SOLID,
                  }}
                ></Button>
              </div>

              <div className={`${styles['event-register']} ${styles['desktop']}`}>
                {isLogon && !showRegistered && <Button onClick={registerEvent} title={t('event.register')} />}
                {isLogon && showRegistered && <Button onClick={viewEventTicket} title={t('event.viewTicket')} />}
              </div>
            </div>
          </div>
        )}

        <div className={styles['event-details-card']}>
          <div className={styles['title']}>{t('event.eventDetails')}</div>
          <div className={styles['item']}>
            <div className={styles['icon']}>
              <img src={IconCalendar} alt="date" />
            </div>
            <div className={styles['info']}>
              {formatFullDate(event?.date || '')}
              <br />
              {formatTime24(event?.startTime || '')} - {formatTime24(event?.endTime || '')}
            </div>
          </div>
          <div className={styles['item']}>
            <div className={styles['icon']}>
              <img src={IconLocation} alt="location" />
            </div>
            <div className={styles['info']}>
              {t('event.hostedAt', {
                location: `${event?.venueInformation.address} . ${event?.venueInformation.city}`,
              })}
            </div>
          </div>
          <div className={styles['item']}>
            <div className={styles['icon']}>
              <img src={IconTickets} alt="tickets" />
            </div>
            <div className={`${styles['info']} ${styles['warning']}`}>Only 3 tickets left</div>
          </div>
        </div>

        <MediaList />
      </div>

      <div className={`${styles['event-register']} ${styles['mobile']}`}>
        {isLogon && !showRegistered && <Button onClick={registerEvent} title={t('event.register')} />}
        {isLogon && showRegistered && <Button onClick={viewEventTicket} title={t('event.viewTicket')} />}
      </div>

      {showSuccess && (
        <Drawer closeOnBackdropClick={true} onClose={closeSuccess} className={styles['event-registration']}>
          {registration && <RegisteredSuccess registration={registration} />}
        </Drawer>
      )}

      {showTicket && (
        <Drawer closeOnBackdropClick={true} onClose={() => setShowTicket(false)} className={styles['popEvent']}>
          {registration && <Ticket ticket={registration?.tickets[0]} />}
        </Drawer>
      )}
    </Page>
  );
};
