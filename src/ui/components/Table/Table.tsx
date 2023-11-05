import { forwardRef } from 'react';
import { TableVersion, SortOrders } from './types/enums';
import { TableProps, TableHeaderTheme, TableTheme } from './types/propType';
import AdminTable from './AdminTable/AdminTable';
import DefaultTable from './DefaultTable/DefaultTable';

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ tableVersion = TableVersion.ADMIN, ...rest }: TableProps, ref) =>
    tableVersion === TableVersion.ADMIN ? (
      <AdminTable {...rest} forwardedRef={ref} />
    ) : (
      <DefaultTable {...rest} forwardedRef={ref} />
    ),
);
Table.displayName = 'Table';
export default Table;
export { TableVersion, SortOrders };
export type { TableProps, TableHeaderTheme, TableTheme };
