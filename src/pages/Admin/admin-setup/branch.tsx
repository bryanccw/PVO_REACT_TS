import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BranchModel } from '../../../sdk/type';
import { Table, TableVersion, Page, Theme, SortOrders } from '../../../ui/components';
import branchService from '../../../sdk/services/branchService';

export const BranchSetup = () => {
  const { t } = useTranslation();
  const [branches, setBranches] = useState<BranchModel[]>();

  useEffect(() => {
    branchService.getBranch().then(res => {
      setBranches(res.data);
    });
  }, []);

  const cols = [
    {
      key: 'branchCode',
      text: t('admin.branch.code'),
      sortable: true,
      render: (object: any) => <div>{object.branchCode}</div>,
    },
    {
      key: 'branchName',
      text: t('admin.branch.name'),
      sortable: true,
      render: (object: any) => <div>{object.branchName}</div>,
    },
  ];

  const sortCallback = (column: string, order: SortOrders, pageNumber: number): BranchModel[] => {
    return (branches ?? []).sort((a: BranchModel, b: BranchModel) => {
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
    <Page caption={t('admin.branch.title')}>
      <Table
        tableVersion={TableVersion.ADMIN}
        dataSource={branches ?? []}
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
