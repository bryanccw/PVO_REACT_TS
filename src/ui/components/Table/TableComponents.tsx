/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useEffect } from 'react';
import Checkbox from '../Form/Checkbox/Checkbox';
import { Theme } from '../types/enums';
import { FAIcon, IconStyle } from '../Icons/Icons';
import { SortOrders } from './types/enums';

import { TableHeaderProps, TableBodyProps, DynamicObjectInterface, SortingDataInterface } from './types/propType';

export const handleSorting = (sortingData: SortingDataInterface, tableData: DynamicObjectInterface[]) => {
  const [sortField] = Object.keys(sortingData);
  const sortOrder = sortingData[sortField];
  if (sortField) {
    const sorted = [...tableData].sort((a, b) => {
      if (!a[sortField] && !b[sortField]) {
        return 0;
      } else if (!a[sortField]) {
        return 1;
      } else if (!b[sortField]) {
        return -1;
      }

      return (
        a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
          numeric: true,
        }) * (sortOrder === SortOrders.ASC ? 1 : -1)
      );
    });
    return sorted;
  }
  return tableData;
};

export const TableHeader = ({
  columns,
  tableData,
  rowKey,
  getWidth,
  setTableData,
  sortingData,
  setSortingData,
  headerTheme = Theme.GRAY,
  sortingCallback,
  paginationData,
  styles = {},
  enableCheckbox,
  checkedItemsCount,
  disabledItems = [],
}: TableHeaderProps) => {
  const [headerCheckBox, setHeaderCheckBox] = useState(false);
  useEffect(() => {
    setHeaderCheckBox(checkedItemsCount === tableData.length);
  }, [checkedItemsCount]);

  const checkAllRowsCheckedExceptDisabled = () => {
    if (checkedItemsCount === tableData.length) {
      return true;
    } else if (rowKey) {
      const checkedCount_includeDisabled = tableData.filter(
        row => row.checked || disabledItems.includes(row[rowKey]),
      ).length;
      return checkedCount_includeDisabled === tableData.length;
    }
    return false;
  };

  const handleHeaderCheckbox = () => {
    const newTable = tableData.slice();
    if (headerCheckBox === false && !checkAllRowsCheckedExceptDisabled()) {
      newTable.forEach(row => {
        if (rowKey && !disabledItems.includes(row[rowKey])) {
          row.checked = true;
        }
      });
    } else {
      newTable.forEach(row => {
        if (rowKey && !disabledItems.includes(row[rowKey])) {
          row.checked = false;
        }
      });
    }

    setHeaderCheckBox(!headerCheckBox);
    setTableData(newTable);
  };
  return (
    <thead className={`${styles[headerTheme]}`}>
      <tr>
        {columns.map(({ key, text, width, sortable }, index) => {
          let icon = sortable ? (
            <FAIcon className={styles['icon']} iconName={'sort'} iconStyle={IconStyle.SOLID} />
          ) : (
            ''
          );
          if (sortable && sortingData[key] === SortOrders.ASC) {
            icon = <FAIcon className={styles['icon']} iconName={'sort-up'} iconStyle={IconStyle.SOLID} />;
          } else if (sortingData[key] === SortOrders.DESC) {
            icon = <FAIcon className={styles['icon']} iconName={'sort-down'} iconStyle={IconStyle.SOLID} />;
          }

          return (
            <>
              {enableCheckbox && index === 0 && (
                <Checkbox
                  text={''}
                  onChange={handleHeaderCheckbox}
                  checked={headerCheckBox}
                  theme={Theme.WHITE}
                  data-testid="table-header-checkbox-testid"
                />
              )}
              <th
                key={key}
                style={getWidth(width)}
                className={(isSort => (isSort ? styles['sortable-header'] : ''))(sortable)}
                onClick={() => {
                  if (sortable) {
                    const sortOrder =
                      sortingData[key] && sortingData[key] === SortOrders.ASC ? SortOrders.DESC : SortOrders.ASC;
                    setSortingData({ [key]: sortOrder });
                    setTableData(
                      sortingCallback
                        ? sortingCallback(key, sortOrder, paginationData.currentPage)
                        : handleSorting({ [key]: sortOrder }, tableData),
                    );
                  }
                }}
              >
                {text}
                {icon}
              </th>
            </>
          );
        })}
      </tr>
    </thead>
  );
};

export const TableBody = ({
  columns,
  tableData,
  rowKey,
  onRowClick,
  setTableData,
  selected,
  setSelectedKeys,
  pagination,
  paginationData,
  getWidth,
  styles = {},
  isServerSideFetch = false,
  enableCheckbox,
  setCheckedItemsCount,
  disabledItems = [],
}: TableBodyProps) => {
  const { recordStartIndex, recordEndIndex } = paginationData;
  const [selectedItemKeys, setSelectedItemKeys] = useState<string[]>([]);

  useEffect(() => {
    if (rowKey) {
      //Checkbox only working if rowKey is defined
      if (enableCheckbox) {
        const checkedItems = tableData.filter(row => row.checked).map(item => item[rowKey]);
        setSelectedItemKeys(checkedItems ?? []);

        if (setSelectedKeys) {
          //set return selected keys
          setSelectedKeys(checkedItems);
        }
      } else if (selected) {
        //set single selected item
        setSelectedItemKeys([selected]);
      }
    }
  }, [tableData]);

  const handleCheckbox = (rowData: DynamicObjectInterface) => {
    for (const element of tableData) {
      if (
        element[rowKey as string] === rowData[rowKey as string] &&
        !disabledItems.includes(rowData[rowKey as string])
      ) {
        //toggle checkbox of the clicked row
        element.checked = !element.checked;
        break;
      }
    }
    const checkedItems = tableData.filter(row => row.checked).map(row => row[rowKey as string]);
    if (setCheckedItemsCount) {
      //to toggle header checkbox if all selected
      setCheckedItemsCount(checkedItems.length);
    }
    setTableData(tableData);
    setSelectedItemKeys(checkedItems);

    if (setSelectedKeys) {
      //set return selected keys
      setSelectedKeys(checkedItems);
    }
  };

  const handleRowSelection = (rowData: DynamicObjectInterface, rowIndex: number) => {
    if (onRowClick) {
      onRowClick(rowData, rowIndex);
    }
  };
  return (
    <>
      {/* {selectedItemKeys.length > 0 && (`${selectedItemKeys.length} ${selectedItemKeys.length > 1 ? 'items' : 'item'} selected`)} */}
      <tbody>
        {(pagination && !isServerSideFetch
          ? tableData.slice(Number(recordStartIndex), Number(recordEndIndex))
          : tableData
        ).map((rowData: DynamicObjectInterface, rowIndex: number) => (
          <tr
            key={rowKey ? (`${rowData[rowKey]}-${rowIndex}` as string) : rowIndex}
            className={`${
              rowKey &&
              (enableCheckbox
                ? selectedItemKeys?.includes(rowData[rowKey as string])
                : selected === rowData[rowKey as string])
                ? styles['selected-row']
                : ''
            } ${disabledItems?.includes(rowData[rowKey as string]) ? styles['disabled-row'] : ''}`}
          >
            {columns.map((columnObj, index) => (
              <>
                {enableCheckbox && index === 0 && (
                  <Checkbox
                    text={''}
                    onChange={() => handleCheckbox(rowData)}
                    checked={rowData?.checked}
                    theme={Theme.BLACK}
                    data-testid="row-checkbox-testid"
                  />
                )}
                <td
                  key={columnObj.key}
                  style={getWidth(columnObj.width)}
                  onClick={() => {
                    handleRowSelection(rowData, rowIndex);
                  }}
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      handleRowSelection(rowData, rowIndex);
                    }
                  }}
                >
                  {columnObj.render(rowData, rowIndex)}
                </td>
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </>
  );
};
