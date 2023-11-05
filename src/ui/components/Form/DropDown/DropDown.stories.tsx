import type { StoryObj, Meta } from '@storybook/react';
import { LoggerService } from '../../../utils/logger';
import { TooltipPreference } from '../../';
import { MLPVersion } from '../../types/enums';
import { DropDownValidations } from './types/enums';
import DropDown from './DropDown';
import type { DropDownData } from './types/propsType';

const { DEFAULT, VALID, INVALID } = DropDownValidations;
const { BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT, LEFT, RIGHT, TOP_CENTER, TOP_LEFT, TOP_RIGHT } = TooltipPreference;

export default {
  title: 'Components/Form/DropDown',
  component: DropDown,
  argTypes: {
    mlpVersion: {
      description: 'MLP Version of dropdown',
      table: {
        type: {
          summary: 'number',
          detail: 'defines type of dropdown',
        },
        defaultValue: {
          summary: 2,
        },
      },
    },
    disabled: {
      description: 'A disabled dropdown field is unusable and un-clickable.',
      table: {
        type: {
          summary: 'boolean',
          detail: 'Enabled dropdown = false , Disabled dropdown = true',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    disabledFilter: {
      description: 'A disabled dropdown field filter functionality.',
      table: {
        type: {
          summary: 'boolean',
          detail: 'Enabled dropdown = false , Disabled dropdown = true',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    placeholder: {
      description: 'placeholder of the dropdown',
    },
    dropdownLabel: {
      description: 'Label on the dropdown',
    },
    labelInfo: {
      description: 'information icon with dropdownlabel.',
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
    labelInfoPreference: {
      description: 'position of tooltip.',
      control: { type: 'select' },
      options: [BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT, LEFT, RIGHT, TOP_CENTER, TOP_LEFT, TOP_RIGHT],
      table: {
        type: {
          summary: 'TooltipPreference',
        },
        defaultValue: {
          summary: 'RIGHT',
        },
      },
    },
    value: {
      description: 'value stores the selected value in dropdown',
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
      options: [],
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
    message: {
      description: 'Message to be display with DropDown',
    },
    onClick: {
      description: 'DropDown value change can be chaged based on the event',
      table: {
        type: {
          summary: 'function',
          detail: 'Requires callback function.',
        },
        defaultValue: {
          summary: `()=>{}`,
        },
      },
    },
    status: {
      description: 'validation condition of DropDown',
      control: { type: 'select' },
      options: [DEFAULT, VALID, INVALID],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
          detail: 'It should be used when Visiual validation required.',
        },
      },
    },
    readOnly: {
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
          detail: 'a user can tab to it, highlight it, and copy the text from it.',
        },
      },
    },
  },
} as Meta<typeof DropDown>;

type Story = StoryObj<typeof DropDown>;

const commonArgs = {
  data: [
    { id: 1, name: 'Dropdown value 1', isDisabled: true },
    { id: 2, name: 'Dropdown value 2' },
    { id: 3, name: 'Dropdown value 3' },
    { id: 4, name: 'Dropdown value 4' },
    { id: 5, name: 'Edge' },
  ] as DropDownData[],

  onChange: e => LoggerService.log(e.target.value),
  configData: {
    label: 'name',
    disableItemKey: 'isDisabled',
    onSelect: (e: DropDownData) => {
      typeof e['name'] === 'string' && LoggerService.log(e['name']);
    },
  },
  mlpVersion: MLPVersion.ONE,
  lang: '',
  value: '',
  tabIndex: 0,
  id: 'DropDown_id',
  className: '',
  disabled: false,
  dropdownLabel: 'Label',
  placeholder: '',
  message: '',
  disabledFilter: false,
  onClick: () => {
    LoggerService.log('onClick clicked');
  },
};

export const DropDownField: Story = {
  args: {
    ...commonArgs,
  },
};

export const DropDownFieldWithTooltip: Story = {
  args: {
    name: 'Dropdown Field',
    labelInfo: 'Some Tooltip',
    labelInfoPreference: BOTTOM_RIGHT,
    ...commonArgs,
  },
};

export const DropDownFieldMLP: Story = {
  args: {
    ...commonArgs,
    name: 'Dropdown Field',
    mlpVersion: MLPVersion.TWO,
  },
};

export const DropDownWithoutField: Story = {
  args: {
    ...commonArgs,
    name: 'Dropdown Field',
    dropdownLabel: '',
    placeholder: 'Placeholder',
    mlpVersion: MLPVersion.TWO,
  },
};

export const DropDownWithMessage: Story = {
  args: {
    ...commonArgs,
    name: 'DropDown with label',
    message: 'Message',
    dropdownLabel: 'Label',
    mlpVersion: MLPVersion.TWO,
  },
};

export const DropDownWithStatus: Story = {
  args: {
    ...commonArgs,
    name: 'DropDown with label',
    message: 'Message',
    dropdownLabel: 'Label',
    status: VALID,
    mlpVersion: MLPVersion.TWO,
  },
};

export const DropDownWithDefinedTopAndWidth: Story = {
  args: {
    ...commonArgs,
    name: 'DropDown with label',
    message: 'Message',
    dropdownLabel: 'Label',
    status: VALID,
    mlpVersion: MLPVersion.ONE,
    width: '200px',
    top: 50,
  },
};

const multiSelectArgs = {
  ...commonArgs,
  multiSelection: true,
  configData: {
    label: 'name',
    onSelect: (selectedItems: DropDownData[]) => {
      const selectedNames: string[] = selectedItems.map(item => item.name as string);
      LoggerService.log(selectedNames);
    },
  },
  lang: '',
  tabIndex: 0,
  id: 'DropDown_id',

  className: '',
  disabled: false,
  dropdownLabel: 'Label',
  placeholder: '',
  message: '',
  disabledFilter: false,
  onClick: () => {
    LoggerService.log('onClick clicked');
  },
};

export const DropDownMultiSelect: Story = {
  args: {
    name: 'Dropdown Multi Select Field',
    ...multiSelectArgs,
  },
};
