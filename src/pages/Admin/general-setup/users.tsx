import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserModel } from '../../../sdk/type';
import { Table, TableVersion, Page, Theme, SortOrders } from '../../../ui/components';
import userService from '../../../sdk/services/userService';

export const UsersSetup = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState<UserModel[]>();

  useEffect(() => {
    userService.getUsers().then(res => {
      setUsers(res.data);
    });
  }, []);

  const cols = [
    {
      key: 'userName',
      text: t('admin.users.userName'),
      sortable: true,
      render: (object: any) => <div>{object.userName}</div>,
    },
    {
      key: 'name',
      text: t('admin.users.name'),
      sortable: true,
      render: (object: any) => <div>{object.name}</div>,
    },
    {
      key: 'role',
      text: t('admin.users.role'),
      sortable: true,
      render: (object: any) => <div>{object.role}</div>,
    },
  ];

  const sortCallback = (column: string, order: SortOrders, pageNumber: number): UserModel[] => {
    return (users ?? []).sort((a: UserModel, b: UserModel) => {
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
    <Page caption={t('admin.users.title')}>
      <Table
        tableVersion={TableVersion.ADMIN}
        dataSource={users ?? []}
        columns={cols}
        rowKey="_id"
        pagination={true}
        headerTheme={Theme.BLACK}
        onRowClick={(value, index) => console.log(value, index)}
        sortingCallback={sortCallback}
      ></Table>
    </Page>
  );
};
