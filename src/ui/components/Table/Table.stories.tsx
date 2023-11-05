import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { Theme } from '../types/enums';
import Table from './Table';
import { TableVersion } from './types/enums';
import { PaginationDataInterface } from './types/propType';

const columns = [
  {
    key: 'id',
    text: 'ID Key',
    width: 10,
    render: object => <div>{object.id}</div>,
  },
  {
    key: 'name',
    text: 'Name',
    width: 20,
    sortable: true,
    render: object => <div style={{ width: '100%', overflow: 'hidden', textOverflow: 'ellipsis' }}>{object.name}</div>,
  },
  {
    key: 'created',
    text: 'Created',
    width: 20,
    sortable: true,
    render: object => <span>{object['created'] as React.ReactNode}</span>,
  },
  {
    key: 'startDate',
    text: 'Start date',
    width: 20,
    sortable: true,
    render: object => <span>{object['startDate'] as React.ReactNode}</span>,
  },
  {
    key: 'endDate',
    text: 'End date',
    width: 20,
    sortable: true,
    render: object => <span>{object['endDate'] as React.ReactNode}</span>,
  },
  {
    key: 'actions',
    width: 20,
    text: 'Actions',
    render: () => <div>...</div>,
  },
];

const dataSource = [
  {
    id: 'Switch-1',
    name: 'APR10152',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
    checked: true,
  },
  {
    id: 'Switch-2',
    name: 'APR101523AZWMY_Special SG1',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-3',
    name: 'APR101523AZWMY_Special SG2',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
    checked: true,
  },
  {
    id: 'Switch-4',
    name: 'APR101523AZWMY_Special SG3',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-5',
    name: 'APR101523AZWMY_Special SG4',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-6',
    name: 'APR101523AZWMY_Special SG5',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-7',
    name: 'APR101523AZWMY_Special SG7',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-8',
    name: 'APR101523AZWMY_Special SG6',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-9',
    name: 'APR101523AZWMY_Special SG9',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-10',
    name: 'APR101523AZWMY_Special SG8',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-11',
    name: 'APR101523AZWMY_Special SG10',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-12',
    name: 'APR101523AZWMY_Special SG12',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-13',
    name: 'APR101523AZWMY_Special SG11',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-14',
    name: 'APR101523AZWMY_Special SG13',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-15',
    name: 'APR101523AZWMY_Special SG14',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-16',
    name: 'APR101523AZWMY_Special SG17',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-17',
    name: 'APR101523AZWMY_Special SG15',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-18',
    name: 'APR101523AZWMY_Special SG19',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-19',
    name: 'APR101523AZWMY_Special SG16',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-20',
    name: 'APR101523AZWMY_Special SG18',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-21',
    name: 'APR101523AZWMY_Special SG20',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-22',
    name: 'APR101523AZWMY_Special SG21',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-23',
    name: 'APR101523AZWMY_Special SG22',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-24',
    name: 'APR101523AZWMY_Special SG23',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-25',
    name: 'APR101523AZWMY_Special SG24',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-26',
    name: 'APR101523AZWMY_Special SG7',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-27',
    name: 'APR101523AZWMY_Special SG5',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-28',
    name: 'APR101523AZWMY_Special SG9',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-29',
    name: 'APR101523AZWMY_Special SG6',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-30',
    name: 'APR101523AZWMY_Special SG2',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-31',
    name: 'APR101523AZWMY_Special SG1',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-32',
    name: 'APR101523AZWMY_Special SG10',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-33',
    name: 'APR101523AZWMY_Special SG3',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-34',
    name: 'APR101523AZWMY_Special SG8',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-35',
    name: 'APR101523AZWMY_Special SG4',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-36',
    name: 'APR101523AZWMY_Special SG7',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-37',
    name: 'APR101523AZWMY_Special SG5',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-38',
    name: 'APR101523AZWMY_Special SG9',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-39',
    name: 'APR101523AZWMY_Special SG6',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-40',
    name: 'APR101523AZWMY_Special SG2',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-41',
    name: 'APR101523AZWMY_Special SG1',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-42',
    name: 'APR101523AZWMY_Special SG10',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-43',
    name: 'APR101523AZWMY_Special SG3',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-44',
    name: 'APR101523AZWMY_Special SG8',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-45',
    name: 'APR101523AZWMY_Special SG4',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-46',
    name: 'APR101523AZWMY_Special SG7',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-47',
    name: 'APR101523AZWMY_Special SG5',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-48',
    name: 'APR101523AZWMY_Special SG9',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-49',
    name: 'APR101523AZWMY_Special SG6',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-50',
    name: 'APR101523AZWMY_Special SG2',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-51',
    name: 'APR101523AZWMY_Special SG1',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-52',
    name: 'APR101523AZWMY_Special SG10',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-53',
    name: 'APR101523AZWMY_Special SG3',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-54',
    name: 'APR101523AZWMY_Special SG8',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-55',
    name: 'APR101523AZWMY_Special SG4',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-56',
    name: 'APR101523AZWMY_Special SG7',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-57',
    name: 'APR101523AZWMY_Special SG5',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-58',
    name: 'APR101523AZWMY_Special SG9',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-59',
    name: 'APR101523AZWMY_Special SG6',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-60',
    name: 'APR101523AZWMY_Special SG2',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-61',
    name: 'APR101523AZWMY_Special SG1',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-62',
    name: 'APR101523AZWMY_Special SG10',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-63',
    name: 'APR101523AZWMY_Special SG3',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-64',
    name: 'APR101523AZWMY_Special SG8',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-65',
    name: 'APR101523AZWMY_Special SG4',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-66',
    name: 'APR101523AZWMY_Special SG7',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-67',
    name: 'APR101523AZWMY_Special SG5',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-68',
    name: 'APR101523AZWMY_Special SG9',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-69',
    name: 'APR101523AZWMY_Special SG6',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-70',
    name: 'APR101523AZWMY_Special SG2',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-71',
    name: 'APR101523AZWMY_Special SG4',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-72',
    name: 'APR101523AZWMY_Special SG7',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-73',
    name: 'APR101523AZWMY_Special SG5',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-74',
    name: 'APR101523AZWMY_Special SG9',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-75',
    name: 'APR101523AZWMY_Special SG6',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-76',
    name: 'APR101523AZWMY_Special SG2',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-77',
    name: 'APR101523AZWMY_Special SG5',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-78',
    name: 'APR101523AZWMY_Special SG9',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-79',
    name: 'APR101523AZWMY_Special SG6',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
  {
    id: 'Switch-80',
    name: 'APR101523AZWMY_Special SG2',
    created: '10/11/2022',
    startDate: '12/12/2022 14:00',
    endDate: '12/12/2022 14:30',
  },
];

const { PURPLE, BLUE, ORANGE, GREEN, RED, YELLOW, SUCCESS, WARNING, ERROR, BLACK, WHITE } = Theme;

export default {
  title: 'Components/Table',
  decorators: [
    (Story, context) => {
      const args = context.args;
      return <Story {...args} />;
    },
  ],
  component: Table,
  argTypes: {
    columns: {
      description: 'Columns array of object',
      control: { type: 'object' },
      table: {
        type: {
          summary: 'object',
        },
        defaultValue: {
          summary: 'Columns',
        },
      },
    },
    dataSource: {
      description: 'Data source array of object',
      control: { type: 'object' },
      table: {
        type: {
          summary: 'object',
        },
        defaultValue: {
          summary: 'Data source',
        },
      },
    },
    rowKey: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
          detail: 'Unique key in data source',
        },
      },
    },
    selected: {
      description: 'Selected row',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Index of the row or value of the unique key rowKey',
        },
      },
    },
    pagination: {
      description: 'To display pagination or not',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    checkbox: {
      description: 'To have checkbox or not',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    onRowClick: {
      description: 'Callback event for row click operation',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    headerTheme: {
      description: 'Select Listed Theme of the Button',
      control: { type: 'select' },
      options: [PURPLE, BLUE, ORANGE, GREEN, RED, YELLOW, SUCCESS, WARNING, ERROR, BLACK, WHITE],
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    sortingCallback: {
      description: 'Callback event for clicking sorting columns',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    paginationObject: {
      description: 'Provides customization into pagination.',
      control: { type: 'object' },
      table: {
        type: {
          summary: 'object',
        },
        defaultValue: {
          summary: 'change default pagination object',
          detail: 'PaginationDataInterface is used to formulate the customized pagination object.',
        },
      },
    },
    paginationCallback: {
      description: 'Callback event for clicking pagination keys.',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    formatPaginationCallback: {
      description: 'Callback helps to customize pagination end text',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    tableVersion: {
      description: 'changes types of table',
      control: { type: 'select' },
      options: [TableVersion.ADMIN, TableVersion.WEB],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: TableVersion.ADMIN,
          detail: 'default table Type of pill.',
        },
      },
    },
    enableCheckbox: {
      description: 'show(enable) checkbox on row',
      table: {
        type: {
          summary: 'boolean',
          detail: 'Enabled Checkbox = true , Disabled Checkbox = false',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    setSelectedKeys: {
      description: 'Callback event for key selection',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
  },
} as Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

export const AdminTable: Story = {
  args: {
    columns,
    dataSource,
    rowKey: 'id',
    selected: 'Switch-2',
    pagination: true,
    headerTheme: Theme.BLACK,
    tableVersion: TableVersion.ADMIN,
    enableCheckbox: true,
    disabledItems: ['Switch-4', 'Switch-5'],
  },
};

export const AdminTableWithCustomPaginationText: Story = {
  args: {
    columns,
    dataSource,
    rowKey: 'id',
    pagination: true,
    headerTheme: Theme.BLACK,
    enableCheckbox: true,
    tableVersion: TableVersion.ADMIN,
    formatPaginationCallback: ({ currentPage, totalRecords, rowsPerPage }: PaginationDataInterface) =>
      `Page ${currentPage + 1} of ${totalRecords / rowsPerPage}`,
  },
};

export const Default: Story = {
  args: {
    columns,
    dataSource,
    rowKey: 'id',
    pagination: true,
    tableVersion: TableVersion.WEB,
    headerTheme: Theme.GRAY,
    enableCheckbox: true,
  },
};
