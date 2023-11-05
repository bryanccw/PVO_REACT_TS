import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PaymentModeModel } from '../../../sdk/type';
import { Table, TableVersion, Page, Theme, SortOrders } from '../../../ui/components';
import paymentModeService from '../../../sdk/services/paymentModeService';

export const PaymentModeSetup = () => {
  const { t } = useTranslation();
  const [paymMode, setPaymMode] = useState<PaymentModeModel[]>();

  useEffect(() => {
    paymentModeService.getPaymentMode().then(res => {
      setPaymMode(res.data);
    });
  }, []);

  const cols = [
    {
      key: 'paymentModeCode',
      text: t('admin.paymentMode.code'),
      sortable: true,
      render: (object: any) => <div>{object.paymentModeCode}</div>,
    },
    {
      key: 'paymentMode',
      text: t('admin.paymentMode.name'),
      sortable: true,
      render: (object: any) => <div>{object.paymentMode}</div>,
    },
  ];

  const sortCallback = (column: string, order: SortOrders, pageNumber: number): PaymentModeModel[] => {
    return (paymMode ?? []).sort((a: PaymentModeModel, b: PaymentModeModel) => {
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
    <Page caption={t('admin.paymentMode.title')}>
      <Table
        tableVersion={TableVersion.ADMIN}
        dataSource={paymMode ?? []}
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
