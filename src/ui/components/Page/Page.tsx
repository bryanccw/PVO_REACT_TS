import type { PagePropsTypes } from './types/propsType';
import styles from './Page.module.scss';

const Page = ({ className, caption, children }: PagePropsTypes) => {
  return (
    <div className={`${styles['framework-page']} ${className}`}>
      {caption && <div className={styles['caption']}>{caption}</div>}
      {children}
    </div>
  );
};

export default Page;
export type { PagePropsTypes };
