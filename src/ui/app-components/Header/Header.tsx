import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import customerService from '../../../sdk/services/customerService';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { Search } from '../../components';
import type { CustomerModel } from '../../../sdk/type';
import { isTokenValid } from '../../../ui/utils/auth';
import { isEmpty } from '../../utils/helper';
import { doLogout } from '../../utils/auth';
import { debounce } from '../../utils/debounceUtil';
import { BranchSelector } from '../BranchSelector/BranchSelector';
import {
  fetchBranches,
  fetchPaymentModes,
  fetchProductCategories,
  fetchRaces,
} from '../../../sdk/store/frameworkActions';
import { userActions } from '../../../sdk/store/userActions';
import styles from './Header.module.scss';

type Props = {};

export const Header = (props: Props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector(s => s.user);
  const [isLogon, setIsLogon] = useState(false);

  const [searchKey, setSearchKey] = useState<string>('');
  const [searchResult, setSearchResult] = useState<CustomerModel[]>([]);
  const [isNoResult, setIsNoResult] = useState<boolean>(false);

  const searchDebounce = useMemo(
    () => ({
      tId: null,
    }),
    [],
  );

  useEffect(() => {
    const user_ls = JSON.parse(localStorage.getItem('user') || '{}') ?? {};
    if (!isEmpty(user_ls) && isTokenValid()) {
      dispatch(userActions.setUser(user_ls));
      dispatch(fetchBranches());
      dispatch(fetchPaymentModes());
      dispatch(fetchProductCategories());
      dispatch(fetchRaces());
      setIsLogon(true);
    }
  }, []);

  const noData = {
    custName: t('header.search.noResult'),
  };
  useEffect(() => {
    if (searchKey.length >= 3) {
      triggerSearch();
    } else {
      setSearchResult([]);
    }
  }, [searchKey]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  };

  const onSearch = () => {
    searchKeyword();
  };

  const searchKeyword = () => {
    customerService.searchCustomer(searchKey).then(res => {
      const result = res.data;

      if (result.length === 0) {
        result.push(noData);
        setIsNoResult(true);
      } else {
        setIsNoResult(false);
      }

      setSearchResult(result);
    });
  };

  const triggerSearch = debounce(searchKeyword, searchDebounce);
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
            <BranchSelector />
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
          <div className={styles['label']}>{t('header.search.lookingFor')} </div>
          <Search
            value={searchKey}
            data={searchResult ?? []}
            placeholder={t('header.search.placeholder')}
            className={`${styles['main-search']} ${isNoResult ? styles['show-no-result'] : ''}`}
            onChange={onSearchChange}
            onSearch={onSearch}
            configData={{
              label: 'custName',
              onSelect: data => console.log(data),
            }}
          />
        </div>
      </header>
    </>
  );
};
