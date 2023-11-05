import { useEffect, useState } from 'react';
import ARIA_LABELS from '../../../AccessibiltyLabels';
import { FAIcon, IconStyle } from '../../../Icons/Icons';
import { PaginationProps } from '../../types/propType';
import styles from './AdminPagination.module.scss';

const AdminPagination = ({
  totalRecords,
  currentPage = 0,
  rowsPerPage = 10,
  updatePaginationData,
  startRecordIndex = () => 1,
  endRecordIndex,
  goToPreviousPage,
  goToNextPage,
  formatPaginationCallback,
  ariaLabelledByNextPage = ARIA_LABELS.NEXT_PAGE,
  ariaLabelledByPrevPage = ARIA_LABELS.PREVIOUS_PAGE,
}: PaginationProps) => {
  const DOTS = '...';
  const numberOfPages = Math.ceil(totalRecords / rowsPerPage);
  const range = (start: number, end: number) => Array.from({ length: end - start + 1 }, (_, idx) => idx + start);

  useEffect(() => {
    setPageArr(paginationRange() || []);
  }, [currentPage, totalRecords]);

  const paginationRange = () => {
    const siblingCount = 1;
    const totalPageCount = Math.ceil(totalRecords / rowsPerPage);
    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return [];
  };

  const [pageArr, setPageArr] = useState<Array<number | string>>(
    numberOfPages <= 7 ? [...new Array(numberOfPages).keys()] : paginationRange() || [],
  );

  const goToPage = (page: number) => {
    const nextPage = page;
    updatePaginationData({
      currentPage: nextPage,
      recordStartIndex: startRecordIndex?.(nextPage, rowsPerPage),
      recordEndIndex: endRecordIndex?.(nextPage, rowsPerPage),
    });
  };

  const disableNextButton = () => numberOfPages === currentPage + 1;

  return (
    <div className={styles['pagination-container']}>
      <div className={styles['pagination-next-prev-controls']}>
        <div
          role="button"
          aria-label={ariaLabelledByPrevPage}
          tabIndex={0}
          className={`${styles['icon-container']} ${currentPage === 0 ? styles['inactive'] : ''} `}
          data-testid="pagination-back-button"
          onClick={goToPreviousPage}
          onKeyDown={goToPreviousPage}
        >
          <FAIcon iconName={'angle-left'} iconStyle={IconStyle.SOLID} />
        </div>
        <div className={styles['pagination-page-numbers']} data-testid="page-numbers">
          {pageArr.map((v, i) => (
            <div
              key={`${v}-${i + 1}`}
              role="presentation"
              className={`${styles['page-number']} ${
                typeof v === 'number' && currentPage + 1 === v ? styles['active'] : ''
              }`}
              data-testid={`page-numbers-${i}`}
              onKeyDown={() => typeof v === 'number' && goToPage(v - 1)}
              onClick={() => typeof v === 'number' && goToPage(v - 1)}
            >
              {v}
            </div>
          ))}
        </div>
        <div
          role="button"
          aria-label={ariaLabelledByNextPage}
          tabIndex={0}
          className={`${styles['icon-container']} ${disableNextButton() ? styles['inactive'] : ''}`}
          data-testid="pagination-next-button"
          onClick={() => !disableNextButton() && goToNextPage?.()}
          onKeyDown={goToNextPage}
        >
          <FAIcon iconName={'angle-right'} iconStyle={IconStyle.SOLID} />
        </div>
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
    </div>
  );
};

export default AdminPagination;
