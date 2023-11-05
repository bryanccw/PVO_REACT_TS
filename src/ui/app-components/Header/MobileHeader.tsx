import { MdArrowBackIosNew } from 'react-icons/md';
import { DynamicObjectInterface } from '../../../sdk/type';
import styles from './Header.module.scss';

type Props = {
  backFn: DynamicObjectInterface;
  backBtnTransparent?: boolean;
  title?: string;
};

export const MobileHeader = ({ backFn, backBtnTransparent, title }: Props) => {
  return (
    <>
      <div className={styles['mobile-header']}>
        <div className={`${styles['arrow-back']} ${backBtnTransparent ? styles['transparent'] : ''}`} onClick={backFn}>
          <MdArrowBackIosNew size={20} />
        </div>
        {title && <div className={styles['page-title']}>{title}</div>}
      </div>
    </>
  );
};
