import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProductCategoryModel } from '../../../sdk/type';
import { Table, TableVersion, Page, Theme, SortOrders } from '../../../ui/components';
import productCategoryService from '../../../sdk/services/productCategoryService';

export const ProductCategorySetup = () => {
  const { t } = useTranslation();
  const [category, setCategory] = useState<ProductCategoryModel[]>();

  useEffect(() => {
    productCategoryService.getProductCategory().then(res => {
      setCategory(res.data);
    });
  }, []);

  const cols = [
    {
      key: 'categoryCode',
      text: t('admin.productCategory.code'),
      sortable: true,
      render: (object: any) => <div>{object.categoryCode}</div>,
    },
    {
      key: 'category',
      text: t('admin.productCategory.name'),
      sortable: true,
      render: (object: any) => <div>{object.category}</div>,
    },
  ];

  const sortCallback = (column: string, order: SortOrders, pageNumber: number): ProductCategoryModel[] => {
    return (category ?? []).sort((a: ProductCategoryModel, b: ProductCategoryModel) => {
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
    <Page caption={t('admin.productCategory.title')}>
      <Table
        tableVersion={TableVersion.ADMIN}
        dataSource={category ?? []}
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
