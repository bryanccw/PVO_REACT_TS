# Table

`<a href="https://www.figma.com/file/gRZuKlCwt91sX116bB9L0o/PDP---Alpha-2?node-id=2806%3A110571&t=a50U8K8jap5IuAHn-0">`Table `</a>` UI component to render collection of data in tabular format.

### Inclusion

```ts
import { Table } from '@nextgen-web-framework/all';

const columns = [
  {
    key: 'status',
    text: 'Status',
    width: 10,
    render: (object) => <div>{object.status}</div>,
  },
  {
    key: 'name',
    text: 'Name',
    sortable: true,
    render: (object) => <div>{object['name']}</div>,
  },
];

const dataSource = [
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SG1',
  },
  {
    status: 'Switch',
    name: 'APR101523AZWMY_Special SG10',
  },
];

return (
  <Table
    columns={columns}
    dataSource={dataSource}
    pagination={true}
    rowKey={'name'}
    selected={'APR101523AZWMY_Special SG1'}
    checkbox: true,
    onRowClick={(obj, index) => {
      console.log(obj, index);
    }}
  />
);
```

### Optional Props

| Name                     | Description                                                  | Default value                         |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------- |
| Columns                  | Columns array of object                                      | --                                    |
| dataSource               | Data source array of object                                  | --                                    |
| pagination               | Whether to set pagination or not                             | false                                 |
| rowKey                   | Unique key in data source                                    | --                                    |
| selected                 | Selected row to highlight                                    | --                                    |
| onRowClick               | Callback function on row click                               | --                                    |
| headerTheme              | Theme for header                                             | Theme.Gray                            |
| sortingCallback          | Method for API sorting                                       | --                                    |
| paginationObject         | values of current page.                                      | PaginationDataInterface               |
| paginationCallback       | Method for page change                                       | --                                    |
| tableVersion             | Version of Table                                             | Admin Version                         |
| enableCheckbox           | With Checkbox function (rowKey MUST BE set in order to work) | False                                 |
| selectedKeys             | Return keys of the checkbox selected rows                    | --                                    |
| formatPaginationCallback | Function helps to customize pagination end text              | (obj:PaginationDataInterface)=>string |
| disabledItems            | List of keys for disabled rows                               | --                                    |

### Storybook

[link to storybook](https://link_to_storybook)
