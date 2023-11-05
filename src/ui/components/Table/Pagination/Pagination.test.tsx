import { render, cleanup, waitFor, fireEvent } from '@testing-library/react';
import { PaginationProps } from '../types/propType';
import { PaginationVersion } from '../types/enums';
import Pagination from './Pagination';

const defaultProps: PaginationProps = {
  totalRecords: 10,
  currentPage: 0,
  rowsPerPage: 5,
  recordEndIndex: 5,
  recordStartIndex: 0,
  updatePaginationData: data => data,
};

describe('Pagination Component Test Cases', () => {
  afterEach(cleanup);

  test('Pagination Component mounted', () => {
    render(<Pagination {...defaultProps} />);
    const pagination = document.querySelector('.pagination-container');
    expect(pagination).toBeInTheDocument();
  });

  test('Current page less than zeron', () => {
    render(<Pagination {...defaultProps} currentPage={-1} />);
    const pagination = document.querySelector('.pagination-container');
    expect(pagination).toBeInTheDocument();
  });

  test('Total records less than rows per page limit', () => {
    render(<Pagination {...defaultProps} totalRecords={4} />);
    const pagination = document.querySelector('.pagination-container');
    expect(pagination).toBeInTheDocument();
  });

  test('Rows per page dropdown value change', () => {
    const { getByTestId, getByText } = render(
      <Pagination paginationVersion={PaginationVersion.WEB} {...defaultProps} />,
    );
    const dropdownHandle = getByTestId('dropdown-test-id');
    if (dropdownHandle) {
      waitFor(() => {
        fireEvent.click(dropdownHandle);
      });

      waitFor(() => {
        const rowsDropdownList = getByText('25');
        if (rowsDropdownList) {
          fireEvent.click(rowsDropdownList);
        }
      });
    }
    expect(dropdownHandle).toBeInTheDocument();
  });

  test('Rows per page dropdown value change when on second page', () => {
    const { getByTestId, getByText } = render(
      <Pagination {...defaultProps} paginationVersion={PaginationVersion.WEB} currentPage={1} />,
    );
    const dropdownHandle = getByTestId('dropdown-test-id');
    if (dropdownHandle) {
      waitFor(() => {
        fireEvent.click(dropdownHandle);
      });

      waitFor(() => {
        const rowsDropdownList = getByText('25');
        if (rowsDropdownList) {
          fireEvent.click(rowsDropdownList);
        }
      });
    }
    expect(dropdownHandle).toBeInTheDocument();
  });

  test('Rows per page dropdown value change when total records are more than current rows last index', () => {
    const { getByTestId, getByText } = render(
      <Pagination paginationVersion={PaginationVersion.WEB} {...defaultProps} totalRecords={50} />,
    );
    const dropdownHandle = getByTestId('dropdown-test-id');
    if (dropdownHandle) {
      waitFor(() => {
        fireEvent.click(dropdownHandle);
      });

      waitFor(() => {
        const rowsDropdownList = getByText('25');
        if (rowsDropdownList) {
          fireEvent.click(rowsDropdownList);
        }
      });
    }
    expect(dropdownHandle).toBeInTheDocument();
  });
});
