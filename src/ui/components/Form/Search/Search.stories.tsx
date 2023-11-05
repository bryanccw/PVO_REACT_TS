import type { StoryObj, Meta } from '@storybook/react';
import { LoggerService } from '../../../utils/logger';
import { MLPVersion, Theme } from '../../';
import SearchComponent from './Search';

const { ONE, TWO } = MLPVersion;

export default {
  title: 'Components/Form/Search',
  component: SearchComponent,
  argTypes: {
    value: {
      description: 'value represents content displaying in the search component',
      table: {
        type: {
          summary: 'string or number',
        },
      },
    },
    onChange: {
      description: 'Search value change can be done or control',
      table: {
        type: {
          summary: 'function',
          detail: 'Requires callback function.',
        },
        defaultValue: {
          summary: '()=>{}',
        },
      },
    },
    onSearch: {
      description: 'Search value change can be done or control',
      table: {
        type: {
          summary: 'function',
          detail: 'Requires callback function.',
        },
        defaultValue: {
          summary: '()=>{}',
        },
      },
    },
    disabled: {
      description: 'A disabled input field is unusable and un-clickable.',
      table: {
        type: {
          summary: 'boolean',
          detail: 'Enabled Input = false , Disabled Input = true',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    required: {
      description: 'property can be used to mark search as required field',
      table: {
        type: {
          summary: 'boolean',
          detail: 'default search = false , required search = true',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    onClear: {
      description: 'Event on click clear icon',
      table: {
        type: {
          summary: 'function',
          detail: 'Requires callback function.',
        },
        defaultValue: {
          summary: '()=>{}',
        },
      },
    },
    className: {
      description: 'To give the class to text field.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    message: {
      description: 'show display messsage with component.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
          detail: 'display text below the component.',
        },
      },
    },
    placeholder: {
      description: 'To specify a short hint that describes the expected value.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    data: {
      description: 'options for drop-down selection',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    configData: {
      description: 'helps to define display label in result and corresponding selection event.',
      table: {
        type: {
          summary: 'object',
          detail: 'passing this prop requires data prop.',
        },
        defaultValue: {
          summary: `{}`,
        },
      },
    },
    mlpVersion: {
      description: 'To render a default or SearchBar variant view',
      options: [ONE, TWO],
      table: {
        type: {
          summary: 'MLPVersion',
        },
        defaultValue: {
          summary: 'MLPVersion.ONE',
        },
      },
    },
    theme: {
      description: 'Select Listed Theme of the Search',
      control: { type: 'select' },
      options: [Theme.BLACK, Theme.ERROR],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: Theme.BLACK,
          detail: 'default theme of search.',
        },
      },
    },
    label: {
      description: 'Label of the search',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
          detail: 'It is required for Tooltip',
        },
      },
    },
    labelInfo: {
      description: 'information icon with label.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
          detail: 'It works only with label',
        },
      },
    },
  },
} as Meta<typeof SearchComponent>;

type Story = StoryObj<typeof SearchComponent>;

const commonArgs = {
  id: 'Search_id',
  language: '',
  tabIndex: 0,
  className: '',
  placeholder: 'Your Search',
  disabled: false,
  required: false,
  message: '',
  onChange: () => null,
  onSearch: () => null,
  onClear: () => null,
};

export const Search: Story = {
  args: {
    value: '',
    ...commonArgs,
  },
};

export const SearchFieldWithLabel: Story = {
  args: {
    value: '',
    ...commonArgs,
    label: 'Field Label',
    required: true,
    data: [
      { id: 1, title: 'Search Result' },
      { id: 2, title: 'Search Result' },
      { id: 3, title: 'Search Result' },
    ],
    configData: {
      label: 'title',
      onSelect: selectedItem => {
        LoggerService.log(selectedItem);
      },
    },
    name: 'search_box',
  },
};

export const SearchFieldWithLabelAndTooltip: Story = {
  args: {
    value: '',
    ...commonArgs,
    label: 'Field Label',
    labelInfo: 'Tooltip message',
    data: [
      { id: 1, title: 'Search Result' },
      { id: 2, title: 'Search Result' },
      { id: 3, title: 'Search Result' },
    ],
    configData: {
      label: 'title',
      onSelect: selectedItem => {
        LoggerService.log(selectedItem);
      },
    },
    name: 'search_box',
  },
};

export const SearchFieldWithLabelAndRequired: Story = {
  args: {
    value: '',
    ...commonArgs,
    label: 'Field Label',
    required: true,
    data: [
      { id: 1, title: 'Search Result' },
      { id: 2, title: 'Search Result' },
      { id: 3, title: 'Search Result' },
    ],
    configData: {
      label: 'title',
      onSelect: selectedItem => {
        LoggerService.log(selectedItem);
      },
    },
    name: 'search_box',
  },
};

export const SearchFieldWithLabelCombination: Story = {
  args: {
    value: '',
    ...commonArgs,
    label: 'Field Label',
    labelInfo: 'Tooltip message',
    required: true,
    data: [
      { id: 1, title: 'Search Result' },
      { id: 2, title: 'Search Result' },
      { id: 3, title: 'Search Result' },
    ],
    configData: {
      label: 'title',
      onSelect: selectedItem => {
        LoggerService.log(selectedItem);
      },
    },
    name: 'search_box',
  },
};

export const SearchBarVariant: Story = {
  args: {
    value: '',
    ...commonArgs,
    mlpVersion: TWO,
  },
};

export const SearchFieldWithResult: Story = {
  args: {
    value: '',
    data: [
      { id: 1, title: 'Search Result' },
      { id: 2, title: 'Search Result' },
      { id: 3, title: 'Search Result' },
    ],
    configData: {
      label: 'title',
      onSelect: selectedItem => {
        LoggerService.log(selectedItem);
      },
    },
    ...commonArgs,
  },
};
