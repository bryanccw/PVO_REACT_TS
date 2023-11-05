import { ReactNode } from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import Table from './Table';
import { ColumnsInterface, DynamicObjectInterface, PaginationDataInterface, TableProps } from './types/propType';
import { TableVersion } from './types/enums';

const columns: ColumnsInterface[] = [
  {
    key: 'status',
    text: 'Status',
    render: object => <div>{object.name as ReactNode}</div>,
  },
  {
    key: 'name',
    text: 'Name',
    width: 35,
    sortable: true,
    render: object => <div>{object.name as ReactNode}</div>,
  },
  {
    key: 'created',
    text: 'Created',
    width: 20,
    sortable: true,
    render: object => <span>{object['created'] as ReactNode}</span>,
  },
  {
    key: 'startDate',
    text: 'Start date',
    width: 25,
    sortable: true,
    render: object => <span>{object['startDate'] as ReactNode}</span>,
  },
  {
    key: 'endDate',
    text: 'End date',
    width: 25,
    sortable: true,
    render: object => <span>{object['endDate'] as ReactNode}</span>,
  },
  {
    key: 'actions',
    width: 20,
    text: 'Actions',
    render: object => <div>action menu{object.name as ReactNode}</div>,
  },
];

const dataSource: DynamicObjectInterface[] = [
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SG1',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SG2',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SG3',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SG4',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SG5',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SG7',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SG6',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SG8',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SG9',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SP1',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SP2',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SP3',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SP4',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SP5',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SP6',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SP7',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SP8',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SP9',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SR1',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SR2',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SR3',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SR4',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SR5',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SR6',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SR7',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SR8',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SR9',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special ST1',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special ST2',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special ST3',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special ST4',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special ST5',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special ST6',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special ST7',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special ST8',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special ST9',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SS1',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SS2',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SS3',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SS4',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
];

const defaultProps: TableProps = {
  columns: columns,
  dataSource: dataSource,
  rowKey: 'name',
  onRowClick: (data: DynamicObjectInterface) => data,
  setSelectedKeys: (value: string[]) => value,
};

describe('Table Component Test Cases', () => {
  afterEach(cleanup);

  test('Table Component mounted', () => {
    const { getByTestId } = render(<Table {...defaultProps} />);
    const table = getByTestId('table-data-test-id');
    expect(table).toBeInTheDocument();
  });

  test('Table Component with className', () => {
    const { getByTestId } = render(<Table {...defaultProps} className="random-class" />);
    const table = getByTestId('table-data-test-id');
    expect(table).toBeInTheDocument();
  });

  test('Table Component without rowKey', () => {
    const { getByTestId } = render(<Table {...defaultProps} rowKey="" />);
    const table = getByTestId('table-data-test-id');
    expect(table).toBeInTheDocument();
  });

  test('Table Component with selected', () => {
    const { getByTestId } = render(<Table {...defaultProps} selected="APR101523AZWMY_Special SG1" enableCheckbox />);
    const table = getByTestId('table-data-test-id');
    expect(table).toBeInTheDocument();
  });
  test('Table Component with tableheader checkbox', () => {
    const { getByTestId } = render(<Table {...defaultProps} selected="APR101523AZWMY_Special SG1" enableCheckbox />);
    const table = getByTestId('table-header-checkbox-testid');
    fireEvent.change(table, {
      target: {
        checked: true,
      },
    });
    expect(table).toBeInTheDocument();
  });

  // ---------- Header CheckBox Toggle
  test('Table Component with tableheader checkbox', () => {
    const { getByTestId } = render(<Table {...defaultProps} selected="APR101523AZWMY_Special SG1" enableCheckbox />);
    const checkbox = getByTestId('table-header-checkbox-testid') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
  // ---------- Row CheckBox Toggle
  test('Table Component with tableRow CheckBox Toggle', () => {
    const { getAllByTestId } = render(<Table {...defaultProps} selected="APR101523AZWMY_Special SG1" enableCheckbox />);
    const checkBox = getAllByTestId('row-checkbox-testid') as HTMLInputElement[];
    expect(checkBox[0].checked).toBe(true);
    fireEvent.click(checkBox[0]);
    expect(checkBox[0].checked).toBe(false);
  });

  test('Table Component sort header', () => {
    const updatedDataSource = [
      ...dataSource,
      {
        ...dataSource[0],
        name: '',
      },
      {
        ...dataSource[1],
        name: '',
      },
      {
        ...dataSource[1],
      },
      {
        ...dataSource[1],
        name: '',
      },
    ];
    const { getByText, getByTestId } = render(
      <Table {...defaultProps} dataSource={updatedDataSource} selected="APR101523AZWMY_Special SG1" />,
    );
    const table = getByTestId('table-data-test-id');
    const nameColumnHeaderCell = getByText('Name');
    if (nameColumnHeaderCell) {
      waitFor(() => {
        fireEvent.click(nameColumnHeaderCell);
      });
      waitFor(() => {
        fireEvent.click(nameColumnHeaderCell);
      });
    }
    expect(table).toBeInTheDocument();
  });

  test('Web Table Component with pagination', () => {
    const { getByTestId, getAllByTestId } = render(
      <Table
        {...defaultProps}
        pagination={true}
        tableVersion={TableVersion.WEB}
        selected="APR101523AZWMY_Special SG1"
        paginationObject={{
          totalRecords: dataSource.length,
          rowsPerPage: 5,
          currentPage: 1,
          recordStartIndex: 0,
          recordEndIndex: 5,
        }}
      />,
    );
    const selectedRow = document.querySelector('.selected-row');
    if (selectedRow) {
      waitFor(() => {
        fireEvent.click(selectedRow);
      });
    }
    const backButton = getByTestId('pagination-back-button');
    if (backButton) {
      waitFor(() => {
        fireEvent.click(backButton);
      });
    }
    expect(backButton).toBeInTheDocument();
    const nextButton = getByTestId('pagination-next-button');
    if (nextButton) {
      waitFor(() => {
        fireEvent.click(nextButton);
      });
    }
    expect(nextButton).toBeInTheDocument();
    expect(nextButton.className).toBe('icon-container');

    const pageDropdown = getByTestId('dropdown-test-id');
    waitFor(() => {
      fireEvent.click(pageDropdown);
    });
    const pageDropdownItem = getAllByTestId('dropdown-result-test-id') as HTMLInputElement[];
    waitFor(() => {
      fireEvent.click(pageDropdownItem[1]);
    });
  });
  test('Admin Table Component with pagination', () => {
    const { getByTestId } = render(
      <Table
        {...defaultProps}
        pagination={true}
        selected="APR101523AZWMY_Special SG1"
        paginationObject={{
          totalRecords: dataSource.length,
          rowsPerPage: 5,
          currentPage: 1,
          recordStartIndex: 0,
          recordEndIndex: 5,
        }}
      />,
    );
    const selectedRow = document.querySelector('.selected-row');
    if (selectedRow) {
      waitFor(() => {
        fireEvent.click(selectedRow);
      });
    }
    const backButton = getByTestId('pagination-back-button');
    if (backButton) {
      waitFor(() => {
        fireEvent.click(backButton);
      });
    }
    expect(backButton).toBeInTheDocument();
    const nextButton = getByTestId('pagination-next-button');
    if (nextButton) {
      waitFor(() => {
        fireEvent.click(nextButton);
      });
    }
    expect(nextButton).toBeInTheDocument();
    expect(nextButton.className).toBe('icon-container ');
    const firstPageButton = getByTestId('page-numbers-0');
    if (firstPageButton) {
      waitFor(() => {
        fireEvent.click(firstPageButton);
      });
    }
    const lastPageButton = getByTestId('page-numbers-6');
    if (lastPageButton) {
      waitFor(() => {
        fireEvent.click(lastPageButton);
      });
    }
    const page4Button = getByTestId('page-numbers-4');
    if (page4Button) {
      waitFor(() => {
        fireEvent.click(page4Button);
      });
    }
  });
  test('Table Component with dots pagination dots', () => {
    const { getByTestId } = render(
      <Table
        {...defaultProps}
        pagination={true}
        selected="APR101523AZWMY_Special SG1"
        paginationObject={{
          totalRecords: dataSource.length,
          rowsPerPage: 5,
          currentPage: 5,
          recordStartIndex: 0,
          recordEndIndex: 5,
        }}
      />,
    );
    const selectedRow = document.querySelector('.selected-row');
    if (selectedRow) {
      waitFor(() => {
        fireEvent.click(selectedRow);
      });
    }
    const backButton = getByTestId('pagination-back-button');
    if (backButton) {
      waitFor(() => {
        fireEvent.click(backButton);
      });
    }
    expect(backButton).toBeInTheDocument();
    const nextButton = getByTestId('pagination-next-button');
    if (nextButton) {
      waitFor(() => {
        fireEvent.click(nextButton);
      });
    }
    expect(nextButton).toBeInTheDocument();
    expect(nextButton.className).toBe('icon-container ');
  });

  test('Admin Table Component with pagination', () => {
    const { getByTestId } = render(
      <Table
        {...defaultProps}
        dataSource={dataSource.slice(0, 7)}
        tableVersion={TableVersion.ADMIN}
        pagination={true}
        selected="APR101523AZWMY_Special SG1"
        formatPaginationCallback={({ recordStartIndex, recordEndIndex, totalRecords }: PaginationDataInterface) =>
          `${recordStartIndex}-${recordEndIndex} of ${totalRecords} Record`
        }
      />,
    );
    const selectedRow = document.querySelector('.selected-row');
    if (selectedRow) {
      waitFor(() => {
        fireEvent.click(selectedRow);
      });
    }
    const nextButton = getByTestId('pagination-next-button');
    if (nextButton) {
      waitFor(() => {
        fireEvent.click(nextButton);
      });
    }
    expect(nextButton).toBeInTheDocument();
    const pageNumbers = getByTestId('page-numbers');
    expect(pageNumbers).toBeInTheDocument();
    const pageNumberOne = getByTestId('page-numbers-0');
    const backButton = getByTestId('pagination-back-button');
    if (pageNumberOne) {
      expect(pageNumberOne).toBeInTheDocument();

      waitFor(() => {
        fireEvent.click(pageNumberOne);
        fireEvent.keyDown(pageNumberOne);
      });
    }
    expect(backButton).toBeInTheDocument();
    expect(backButton.className).toBe('icon-container inactive ');
    expect(nextButton.className).toBe('icon-container inactive');
  });
  test('Default Table Component with pagination', () => {
    const { getByTestId } = render(
      <Table
        {...defaultProps}
        tableVersion={TableVersion.WEB}
        pagination
        paginationObject={{
          totalRecords: dataSource.length,
          rowsPerPage: 5,
          currentPage: 0,
          recordStartIndex: 0,
          recordEndIndex: 5,
        }}
        formatPaginationCallback={({ recordStartIndex, recordEndIndex, totalRecords }: PaginationDataInterface) =>
          `${recordStartIndex}-${recordEndIndex} of ${totalRecords} Record`
        }
        selected="APR101523AZWMY_Special SG1"
      />,
    );
    const selectedRow = document.querySelector('.selected-row');

    if (selectedRow) {
      waitFor(() => {
        fireEvent.click(selectedRow);
      });
    }
    const nextButton = getByTestId('pagination-next-button');

    if (nextButton) {
      waitFor(() => {
        fireEvent.click(nextButton);
      });
    }
    expect(nextButton).toBeInTheDocument();

    const backButton = getByTestId('pagination-back-button');

    expect(backButton).toBeInTheDocument();
    expect(backButton.className).toBe('icon-container');
    expect(nextButton.className).toBe('icon-container');
  });
  test('Default Table Component with disabled rows array', () => {
    const { getByTestId, getAllByTestId } = render(
      <Table
        {...defaultProps}
        tableVersion={TableVersion.WEB}
        disabledItems={['APR101523AZWMY_Special SG1', 'APR101523AZWMY_Special SG4']}
        enableCheckbox
      />,
    );
    const table = getByTestId('table-data-test-id');
    expect(table).toBeInTheDocument();

    const selectedRow = document.querySelector('.disabled-row');
    expect(selectedRow).toBeInTheDocument();

    const checkBox = getAllByTestId('row-checkbox-testid') as HTMLInputElement[];
    expect(checkBox[0].checked).toBe(false);
    fireEvent.click(checkBox[0]);
    expect(checkBox[0].checked).toBe(false);
  });
  test('Admin Table Component with disabled rows array', () => {
    const { getByTestId } = render(
      <Table
        {...defaultProps}
        disabledItems={['APR101523AZWMY_Special SG8', 'APR101523AZWMY_Special SG4']}
        enableCheckbox
      />,
    );
    const table = getByTestId('table-data-test-id');
    expect(table).toBeInTheDocument();

    const selectedRow = document.querySelector('.disabled-row');
    expect(selectedRow).toBeInTheDocument();
  });
});
