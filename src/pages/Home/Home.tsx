// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useAppSelector, useAppDispatch } from '../../hooks/redux-hooks';
import { Page } from '../../ui/components';
// import { MobileHeaderHome, EventCard } from '../../ui/app-components';
// import type { EventModel, DynamicObjectInterface } from '../../sdk/type';
import styles from './Home.module.scss';

export const Home = () => {
  // const { t } = useTranslation();
  // const dispatch = useAppDispatch();
  // const rtEvents = useAppSelector(s => s.event);

  // showing list
  // const [eventList, setEventList] = useState<DynamicObjectInterface[]>([]);
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   window.scrollTo(0, 0);

  // }, []);

  // useEffect(() => {
  //   // Setting up data
  //   // Get master event data from API
  //   let eventMaster: DynamicObjectInterface = rtEvents.allEvents;
  //   setEventList(eventMaster);
  //   if (rtEvents.loaded) setLoading(false);
  // }, [rtEvents]);

  return (
    <Page className={`${styles['event-home']}`}>
      <div className={styles['event-home-list']}>
        <div className={styles['date-item']}>
          <div className={styles['event-container']}></div>
        </div>
      </div>
      {/* {isLoading && <Loading />} */}
    </Page>
  );
};
