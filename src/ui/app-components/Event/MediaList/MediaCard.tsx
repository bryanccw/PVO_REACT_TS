import { MdPlayArrow } from 'react-icons/md';
import type { MediaModel } from '../../../../sdk/type';
import MediaImg from '../../../../assets/image/sample/sampleMedia.png';
import styles from './MediaList.module.scss';

type props = {
  media: MediaModel;
};

export const MediaCard = ({ media }: props) => {
  return (
    <div className={styles['media-list-item']}>
      <div className={styles['media-list-item-thumb']}>
        <img src={media.thumbnail || MediaImg} alt="demo event" />
        <div className={styles['play-icon']}>
          <MdPlayArrow size={18} />
        </div>
      </div>
      <div className={styles['media-list-item-title']}>{media.mediaDesc}</div>
    </div>
  );
};
