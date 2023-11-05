import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, useToast, ButtonSize, Notification } from '../../components';
import type { UserModel } from '../../../sdk/type';
import { isEmpty } from '../../utils/helper';
import { doLogout } from '../../utils/auth';
import styles from './Header.module.scss';

type Props = {};

export const Header = (props: Props) => {
  const { t } = useTranslation();
  const { addToast } = useToast();
  const [user, setUser] = useState<UserModel | null>(null);
  const [isLogon, setIsLogon] = useState(false);

  useEffect(() => {
    const user_ls = JSON.parse(localStorage.getItem('user') || '{}') ?? {};
    if (!isEmpty(user_ls)) {
      setUser(user_ls);
      setIsLogon(true);
    }
  }, []);

  return (
    <>
      <header className={styles['page-header']} data-testid="framework-header">
        <div className={styles['row1']}>
          <div className={styles['left']}>
            <span className={styles['title']}>{t('framework.title')}</span>
            <div className={styles['menu']}>
              <Link to={'/'} className={styles['link']}>
                {t('framework.menu.home')}
              </Link>{' '}
              |
              <Link to={'/admin'} className={styles['link']}>
                {t('framework.menu.admin')}
              </Link>
            </div>
          </div>
          <div className={styles['right']}>
            {!isLogon && (
              <Link to={'/auth/login'} className={styles['link']}>
                {t('framework.menu.login')}
              </Link>
            )}
            {isLogon && (
              <>
                <span className={styles['greeting']}>{t('framework.hi')} </span>
                <Link to={'/user/profile'} className={styles['link']}>
                  {user?.name}
                </Link>{' '}
                |{' '}
                <Link to={'#'} className={styles['link']} onClick={doLogout}>
                  {t('framework.menu.logout')}
                </Link>
              </>
            )}
          </div>
        </div>
        <div className={styles['row2']}>
          <div className={styles['label']}>Looking for </div>
          <input type="search" className={styles['main-search']} placeholder="e.g.: Name, IC Number, Phone, Email" />
          <div className={styles['main-search-button']}>
            <Button
              onClick={() =>
                addToast({
                  id: 'search',
                  content: <Notification message={'Prototype'} />,
                  topPosition: '20px',
                })
              }
              title="Go"
              size={ButtonSize.SMALL}
            />
          </div>
        </div>
      </header>
    </>
  );
};
