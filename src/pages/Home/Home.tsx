import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../hooks/redux-hooks';
import customerService from '../../sdk/services/customerService';
import {
  Page,
  Button,
  ButtonSize,
  Notification,
  useToast,
  Table,
  TableVersion,
  Theme,
  SortOrders,
} from '../../ui/components';
import type { CustomerModel, CustomerSearchProps } from '../../sdk/type';
import styles from './Home.module.scss';

export const Home = () => {
  const { t } = useTranslation();
  const { addToast } = useToast();
  const { branches, selectedBranch } = useAppSelector(s => s.framework);

  const [searchObj, setSearchObj] = useState<CustomerSearchProps>();
  const [searchResults, setSearchResults] = useState<CustomerModel[]>([]);

  useEffect(() => {
    if (selectedBranch._id) {
      setSearchObj(prev => ({
        ...prev,
        branchCode: selectedBranch.branchCode,
      }));
    }
  }, [selectedBranch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearchObj(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const hasAtLeastOneValue = (obj: CustomerSearchProps): boolean => {
    return (
      (obj.custName && obj.custName.trim() !== '') ||
      (obj.phone && obj.phone.trim() !== '') ||
      (obj.email && obj.email.trim() !== '') ||
      (obj.icNo && obj.icNo.trim() !== '')
    );
  };

  const handleSearchButton = (e: React.FormEvent<HTMLInputElement | HTMLButtonElement | HTMLFormElement>) => {
    e && e.stopPropagation();
    e && e.preventDefault();

    if (searchObj && hasAtLeastOneValue(searchObj)) {
      customerService.advancedSearchCustomer(searchObj).then(res => {
        setSearchResults(res.data);
      });
    } else {
      addToast({
        id: 'search-failed',
        content: <Notification message={'Please provide at least ONE keyword'} />,
        topPosition: '20px',
      });
    }
  };

  const cols = [
    {
      key: 'custName',
      text: 'Name',
      sortable: true,
      render: (object: any) => <div>{object.custName}</div>,
    },
    {
      key: 'icNo',
      text: 'IC No',
      sortable: true,
      render: (object: any) => <div>{object.icNo}</div>,
    },
    {
      key: 'gender',
      text: 'Gender',
      sortable: true,
      render: (object: any) => <div>{object.gender}</div>,
    },
    {
      key: 'branchCode',
      text: 'Branch',
      sortable: true,
      render: (object: any) => <div>{object.branchCode}</div>,
    },
    {
      key: 'raceCode',
      text: 'Race',
      sortable: true,
      render: (object: any) => <div>{object.raceCode}</div>,
    },
    {
      key: 'phone1',
      text: 'Phone',
      sortable: true,
      render: (object: any) => (
        <div>
          {object.phone1} {object.phone2} {object.phone3} {object.phone4} {object.email}{' '}
        </div>
      ),
    },
  ];

  const sortCallback = (column: string, order: SortOrders, pageNumber: number): CustomerModel[] => {
    return (searchResults ?? []).sort((a: CustomerModel, b: CustomerModel) => {
      if (order === SortOrders.ASC) {
        if (typeof a[column] === 'string') {
          return a[column].localeCompare(b[column]);
        } else {
          return a[column] - b[column];
        }
      } else {
        if (typeof a[column] === 'string') {
          return b[column].localeCompare(a[column]);
        } else {
          return b[column] - a[column];
        }
      }
    });
  };

  return (
    <Page caption={t('customer.pageTitle')} className={`${styles['customer-container']}`}>
      <div className={styles['content-container']}>
        <div className={styles['customer-search']}>
          <form onSubmit={handleSearchButton}>
            <div className={styles['search-field']}>
              <div className={styles['search-field-label']}>Name</div>
              <div className={styles['search-field-input']}>
                <input value={searchObj?.name} name="custName" onChange={handleSearchChange} />
              </div>
            </div>
            <div className={styles['search-field']}>
              <div className={styles['search-field-label']}>IC Number</div>
              <div className={styles['search-field-input']}>
                <input value={searchObj?.icNo} name="icNo" onChange={handleSearchChange} />
              </div>
            </div>
            <div className={styles['search-field']}>
              <div className={styles['search-field-label']}>Branch</div>
              <div className={styles['search-field-input']}>
                <select name="branchCode" value={selectedBranch.branchCode}>
                  <option>All branches</option>
                  {branches?.map(b => (
                    <option key={b._id} value={b.branchCode}>
                      {b.branchName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles['search-field']}>
              <div className={styles['search-field-label']}>Phone</div>
              <div className={styles['search-field-input']}>
                <input value={searchObj?.phone} name="phone" onChange={handleSearchChange} />
              </div>
            </div>
            <div className={styles['search-field']}>
              <div className={styles['search-field-label']}>Email</div>
              <div className={styles['search-field-input']}>
                <input value={searchObj?.email} name="email" type="email" onChange={handleSearchChange} />
              </div>
            </div>
            <div className={styles['search-field']}>
              <div className={styles['search-field-label']}></div>
              <div className={styles['search-field-input']}>
                <Button title="Search" size={ButtonSize.SMALL} onClick={handleSearchButton} />
              </div>
            </div>
          </form>
        </div>
        <div className={styles['customer-search-result']}>
          <Table
            tableVersion={TableVersion.ADMIN}
            dataSource={searchResults ?? []}
            columns={cols}
            rowKey="_id"
            pagination={true}
            headerTheme={Theme.BLACK}
            onRowClick={(value, index) => console.log(value, index)}
            sortingCallback={sortCallback}
          ></Table>
        </div>
      </div>

      {/* {isLoading && <Loading />} */}
    </Page>
  );
};
