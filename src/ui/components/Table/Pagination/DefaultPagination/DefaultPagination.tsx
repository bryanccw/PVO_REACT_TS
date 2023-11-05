import ARIA_LABELS from '../../../AccessibiltyLabels';
import { FAIcon, IconStyle } from '../../../Icons/Icons';
import DropDown from '../../../Form/DropDown/DropDown';
import { DynamicObjectInterface, PaginationProps } from '../../types/propType';
import styles from './DefaultPagination.module.scss';

const DefaultPagination = ({
  totalRecords,
  currentPage = 0,
  rowsPerPage = 5,
  updatePaginationData,
  startRecordIndex = () => 1,
  endRecordIndex,
  goToPreviousPage,
  goToNextPage,
  formatPaginationCallback,
  // ariaLabelledByNextPage = ARIA_LABELS.NEXT_PAGE,
  ariaLabelledByPrevPage = ARIA_LABELS.PREVIOUS_PAGE,
}: PaginationProps) => (
  <div className={styles['pagination-container']}>
    <div className={styles['pagination-rows']}>
      <span>Rows per page:</span>
      <DropDown
        name="rows-per-page-dropdown"
        value={rowsPerPage}
        data={[
          { id: 1, rows: 5 },
          { id: 2, rows: 10 },
          { id: 3, rows: 25 },
        ]}
        data-testid="dropdown-test-id"
        configData={{
          label: 'rows',
          onSelect: (e: DynamicObjectInterface) => {
            const updateData: DynamicObjectInterface = {
              rowsPerPage: e.rows,
            };

            const previousPageEnd = endRecordIndex?.(currentPage, e.rows as number) || 0;
            if (previousPageEnd >= totalRecords) {
              updateData['recordStartIndex'] = startRecordIndex(currentPage - 1, e.rows as number);
              updateData['recordEndIndex'] = previousPageEnd;
              updateData['currentPage'] = currentPage > 0 ? currentPage - 1 : currentPage;
            } else {
              updateData['recordEndIndex'] = endRecordIndex?.(currentPage, e.rows as number);
            }
            if (updatePaginationData) {
              updatePaginationData(updateData);
            }
          },
        }}
        disabledFilter
      />
    </div>
    <div className={styles['pagination-record-range']}>
      {formatPaginationCallback ? (
        formatPaginationCallback?.({
          recordStartIndex: startRecordIndex?.(currentPage, rowsPerPage) + 1,
          recordEndIndex: endRecordIndex?.(currentPage, rowsPerPage) || rowsPerPage,
          totalRecords,
          currentPage: currentPage + 1,
          rowsPerPage,
        })
      ) : (
        <>
          {startRecordIndex?.(currentPage, rowsPerPage) + 1}-{endRecordIndex?.(currentPage, rowsPerPage)} of{' '}
          {totalRecords}
        </>
      )}
    </div>
    <div className={styles['pagination-next-prev-controls']}>
      <div
        role="button"
        aria-label={ariaLabelledByPrevPage}
        tabIndex={0}
        className={styles['icon-container']}
        data-testid="pagination-back-button"
        onClick={goToPreviousPage}
        onKeyDown={goToPreviousPage}
      >
        <FAIcon iconName={'angle-left'} iconStyle={IconStyle.SOLID} />
      </div>
      <div
        role="button"
        aria-label={ariaLabelledByPrevPage}
        tabIndex={0}
        className={styles['icon-container']}
        data-testid="pagination-next-button"
        onClick={goToNextPage}
        onKeyDown={goToNextPage}
      >
        <FAIcon iconName={'angle-right'} iconStyle={IconStyle.SOLID} />
      </div>
    </div>
  </div>
);

export default DefaultPagination;
