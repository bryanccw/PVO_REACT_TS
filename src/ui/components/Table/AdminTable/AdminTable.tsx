import { useState, useEffect, forwardRef } from 'react';
import { Theme } from '../../types/enums';
import { PaginationVersion, SortOrders } from '../types/enums';
import Pagination from '../Pagination/Pagination';
import { DynamicObjectInterface, PaginationDataInterface, SortingDataInterface, TableProps } from '../types/propType';
import { handleSorting, TableBody, TableHeader } from '../TableComponents';
import styles from './AdminTable.module.scss';

const AdminTable = forwardRef<HTMLTableElement, TableProps>(
  ({
    columns,
    dataSource,
    rowKey,
    onRowClick,
    selected,
    setSelectedKeys,
    className,
    pagination = false,
    headerTheme = Theme.GRAY,
    sortingCallback,
    paginationObject,
    paginationCallback,
    enableCheckbox = false,
    formatPaginationCallback,
    forwardedRef,
    disabledItems,
    ...rest
  }: TableProps) => {
    const initialPagination = paginationObject || {
      totalRecords: dataSource.length,
      rowsPerPage: 10,
      currentPage: 0,
      recordStartIndex: 0,
      recordEndIndex: 10,
    };
    const [paginationData, setPaginationData] = useState<PaginationDataInterface>(initialPagination);
    const [sortingData, setSortingData] = useState<SortingDataInterface>({});
    const [tableData, setTableData] = useState<DynamicObjectInterface[]>(dataSource);
    const [checkedItemsCount, setCheckedItemsCount] = useState<number>(0);

    useEffect(() => {
      setTableData(
        sortingCallback
          ? sortingCallback(columns[0].key, SortOrders.ASC, paginationData.currentPage)
          : handleSorting(sortingData, dataSource),
      );

      setPaginationData(initialPagination);
    }, [dataSource]);

    const getWidth = (width = 0) => {
      if (width) {
        return { width: `${width}%` };
      }

      return {};
    };

    return (
      <>
        <table
          className={`${styles['table-container']} ${className ? className : ''}`}
          {...rest}
          data-testid="table-data-test-id"
          ref={forwardedRef}
        >
          <TableHeader
            columns={columns}
            tableData={tableData}
            rowKey={rowKey}
            getWidth={getWidth}
            sortingData={sortingData}
            setSortingData={setSortingData}
            setTableData={setTableData}
            headerTheme={headerTheme}
            sortingCallback={sortingCallback}
            paginationData={paginationData}
            styles={styles}
            enableCheckbox={enableCheckbox}
            checkedItemsCount={checkedItemsCount}
            disabledItems={disabledItems}
          />
          <TableBody
            columns={columns}
            tableData={tableData}
            setTableData={setTableData}
            selected={selected}
            rowKey={rowKey}
            setSelectedKeys={setSelectedKeys}
            onRowClick={onRowClick}
            pagination={pagination}
            paginationData={paginationData}
            getWidth={getWidth}
            styles={styles}
            isServerSideFetch={!!paginationCallback}
            enableCheckbox={enableCheckbox}
            disabledItems={disabledItems}
            setCheckedItemsCount={setCheckedItemsCount}
          />
        </table>
        {pagination ? (
          <Pagination
            formatPaginationCallback={formatPaginationCallback}
            paginationVersion={PaginationVersion.ADMIN}
            {...paginationData}
            updatePaginationData={updatedData => {
              paginationCallback?.({
                ...paginationData,
                ...updatedData,
              });
              setPaginationData({
                ...paginationData,
                ...updatedData,
              });
            }}
          />
        ) : (
          ''
        )}
      </>
    );
  },
);
AdminTable.displayName = 'AdminTable';

export default AdminTable;
export type { PaginationDataInterface };
