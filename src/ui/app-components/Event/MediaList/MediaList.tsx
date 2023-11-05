import { useEffect, useState } from 'react';
import type { MediaModel, DynamicObjectInterface } from '../../../../sdk/type';
import mediaService from '../../../../sdk/services/mediaService';
import { MediaCard } from './MediaCard';
import styles from './MediaList.module.scss';

export const MediaList = () => {
  const [mediaList, setMediaList] = useState<DynamicObjectInterface[]>([]);

  useEffect(() => {
    // Setting up data
    mediaService.getMedia().then(res => setMediaList(res.data));
  }, []);

  return (
    <div className={styles['event-media-list']}>
      <div className={styles['title']}>Media</div>
      <div className={styles['media-list']}>
        {mediaList.map((media: MediaModel, idx) => {
          return <MediaCard media={media} key={idx} />;
        })}
      </div>
    </div>
  );
};
