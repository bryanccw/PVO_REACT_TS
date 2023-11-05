import { useState, useEffect, forwardRef } from 'react';
import { Theme } from '../../types/enums';
import { PaginationVersion, SortOrders } from '../types/enums';
import Pagination from '../Pagination/Pagination';
import { DynamicObjectInterface, PaginationDataInterface, SortingDataInterface, TableProps } from '../types/propType';
import { TableBody, TableHeader, handleSorting } from '../TableComponents';
import styles from './DefaultTable.module.scss';

const DefaultTable = forwardRef<HTMLTableElement, TableProps>(
  ({
    columns,
    dataSource,
    rowKey,
    onRowClick,
    selected,
    setSelectedKeys,
    className,
    pagination = false,
    headerTheme = Theme.BLACK,
    sortingCallback,
    paginationObject,
    paginationCallback,
    enableCheckbox = false,
    formatPaginationCallback,
    disabledItems,
    ...rest
  }: TableProps) => {
    const initialPagination = paginationObject || {
      totalRecords: dataSource.length,
      rowsPerPage: 5,
      currentPage: 0,
      recordStartIndex: 0,
      recordEndIndex: 5,
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
            setCheckedItemsCount={setCheckedItemsCount}
            disabledItems={disabledItems}
          />
          <TableBody
            columns={columns}
            tableData={tableData}
            setTableData={setTableData}
            selected={selected}
            setSelectedKeys={setSelectedKeys}
            rowKey={rowKey}
            onRowClick={onRowClick}
            pagination={pagination}
            paginationData={paginationData}
            getWidth={getWidth}
            styles={styles}
            isServerSideFetch={!!paginationCallback}
            enableCheckbox={enableCheckbox}
            setCheckedItemsCount={setCheckedItemsCount}
            disabledItems={disabledItems}
          />
        </table>
        {pagination ? (
          <Pagination
            formatPaginationCallback={formatPaginationCallback}
            paginationVersion={PaginationVersion.WEB}
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
DefaultTable.displayName = 'DefaultTable';

export default DefaultTable;
