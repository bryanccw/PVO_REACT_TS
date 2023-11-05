import { PaginationProps } from '../types/propType';
import { PaginationVersion } from '../types/enums';
import DefaultPagination from './DefaultPagination/DefaultPagination';
import AdminPagination from './AdminPagination/AdminPagination';

const Pagination = ({ paginationVersion = PaginationVersion.ADMIN, ...rest }: PaginationProps) => {
  const { totalRecords, currentPage, rowsPerPage, updatePaginationData } = rest;

  const startRecordIndex = (pageIndex: number, rows: number) => {
    const index = (pageIndex + 1) * rows - rows;
    if (index < 0) {
      return 0;
    } else {
      return index;
    }
  };
  const endRecordIndex = (pageIndex: number, rows: number) => {
    const index = (pageIndex + 1) * rows;
    if (index > totalRecords) {
      return totalRecords;
    } else {
      return index;
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      const previousPage = currentPage - 1;
      updatePaginationData({
        currentPage: previousPage,
        recordStartIndex: startRecordIndex(previousPage, rowsPerPage),
        recordEndIndex: endRecordIndex(previousPage, rowsPerPage),
      });
    }
  };

  const goToNextPage = () => {
    if (currentPage + 1 < Math.ceil(totalRecords / rowsPerPage)) {
      const nextPage = currentPage + 1;
      updatePaginationData({
        currentPage: nextPage,
        recordStartIndex: startRecordIndex(nextPage, rowsPerPage),
        recordEndIndex: endRecordIndex(nextPage, rowsPerPage),
      });
    }
  };

  return paginationVersion === PaginationVersion.ADMIN ? (
    <AdminPagination
      startRecordIndex={startRecordIndex}
      endRecordIndex={endRecordIndex}
      goToPreviousPage={goToPreviousPage}
      goToNextPage={goToNextPage}
      {...rest}
    />
  ) : (
    <DefaultPagination
      startRecordIndex={startRecordIndex}
      endRecordIndex={endRecordIndex}
      goToPreviousPage={goToPreviousPage}
      goToNextPage={goToNextPage}
      {...rest}
    />
  );
};

export default Pagination;
