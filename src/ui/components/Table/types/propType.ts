import { ReactNode, TableHTMLAttributes, ForwardedRef } from 'react';
import { Theme } from '../../types/enums';
import { SortOrders, TableVersion, PaginationVersion } from './enums';
// eslint-disable-next-line
export type DynamicObjectInterface = any;

export interface ColumnsInterface {
  key: string;
  text: ReactNode;
  width?: number;
  sortable?: boolean;
  render: (value: DynamicObjectInterface, index: number) => ReactNode;
}
export type TableHeaderTheme = Theme;
export type TableTheme = Theme.GRAY | Theme.BLACK;
export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  columns: ColumnsInterface[];
  dataSource: DynamicObjectInterface[];
  rowKey?: string;
  onRowClick?: (value: DynamicObjectInterface, index: number) => void;
  selected?: string;
  pagination?: boolean;
  /**
   * @deprecated headerTheme is deprecated. Please use `theme` instead.
   */
  headerTheme?: TableHeaderTheme;
  theme?: TableTheme;
  sortingCallback?: (column: string, order: SortOrders, pageNumber: number) => DynamicObjectInterface[];
  paginationObject?: PaginationDataInterface;
  paginationCallback?: (paginationObject: PaginationDataInterface) => DynamicObjectInterface;
  formatPaginationCallback?: (paginationObject: PaginationDataInterface) => string;
  tableVersion?: TableVersion;
  enableCheckbox?: boolean;
  setSelectedKeys?: (value: string[]) => void;
  forwardedRef?: ForwardedRef<HTMLTableElement>;
  disabledItems?: DynamicObjectInterface[];
}

export interface TableHeaderProps {
  columns: ColumnsInterface[];
  tableData: DynamicObjectInterface[];
  rowKey?: string;
  getWidth: (value: number | undefined) => object;
  setTableData: (value: DynamicObjectInterface[]) => void;
  sortingData: SortingDataInterface;
  setSortingData: (value: SortingDataInterface) => void;
  /**
   * @deprecated headerTheme is deprecated. Please use `theme` instead.
   */
  headerTheme?: TableHeaderTheme;
  theme?: TableTheme;
  isServerSideSorting?: boolean;
  sortingCallback?: (column: string, order: SortOrders, pageNumber: number) => DynamicObjectInterface[];
  paginationData: PaginationDataInterface;
  styles?: DynamicObjectInterface;
  enableCheckbox?: boolean;
  checkedItemsCount?: number;
  setCheckedItemsCount?: (value: number) => void;
  disabledItems?: DynamicObjectInterface[];
}

export interface TableBodyProps {
  columns: ColumnsInterface[];
  tableData: DynamicObjectInterface[];
  getWidth: (value: number | undefined) => object;
  setTableData: (value: DynamicObjectInterface[]) => void;
  rowKey?: string;
  onRowClick?: (value: DynamicObjectInterface, index: number) => void;
  selected?: string;
  setSelectedKeys?: (value: string[]) => void;
  pagination?: boolean;
  paginationData: PaginationDataInterface;
  styles?: DynamicObjectInterface;
  isServerSideFetch?: boolean;
  enableCheckbox?: boolean;
  setCheckedItemsCount?: (value: number) => void;
  disabledItems?: DynamicObjectInterface[];
}

export interface SortingDataInterface {
  [key: string]: SortOrders;
}
export interface PaginationDataInterface {
  totalRecords: number;
  currentPage: number;
  rowsPerPage: number;
  recordStartIndex: number;
  recordEndIndex: number;
}
export interface PaginationProps extends PaginationDataInterface {
  paginationVersion?: PaginationVersion;
  ariaLabelledByPrevPage?: string;
  ariaLabelledByNextPage?: string;
  formatPaginationCallback?: (paginationObject: PaginationDataInterface) => string;
  updatePaginationData: (values: DynamicObjectInterface) => void;
  startRecordIndex?: (pageIndex: number, rows: number) => number;
  endRecordIndex?: (pageIndex: number, rows: number) => number;
  goToPreviousPage?: () => void;
  goToNextPage?: () => void;
}
