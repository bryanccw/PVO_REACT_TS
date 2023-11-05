import type { Meta, StoryObj } from '@storybook/react';
import { InputTypes, InputValidations } from '../Input/Input';
import { LoggerService } from '../../../utils/logger';
import { TextLinkStyle } from '../../';
import { DropDownData } from '../DropDown/types/propsType';
import PhoneNumberComponent from './PhoneNumber';
export default {
  title: 'Components/Form/PhoneNumber',
  component: PhoneNumberComponent,
  argTypes: {
    name: {
      description: 'component name attribute cam be passed.',
      control: { type: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'string',
        },
      },
    },
    className: {
      description: 'component name attribute cam be passed.',
      control: { type: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'string',
        },
      },
    },
    message: {
      description: 'component name attribute cam be passed.',
      control: { type: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'string',
        },
      },
    },
    dropdownDisabled: {
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
    dropdownLabel: {
      description: 'Label on the dropdown',
    },
    dropdownValue: {
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
      description: 'helps to define display dropdown result label in result and corresponding selection event.',
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
    inputDisabled: {
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
    inputValue: {
      description: 'value represents content displaying in the input',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    inputType: {
      description: 'type represents type of value input can have',
      options: [InputTypes.NUMBER, InputTypes.TEXT],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: InputTypes.NUMBER,
          detail: "The default value of the type attribute is 'text'.",
        },
      },
    },
    inputLabel: {
      description: 'Label of the input',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    ctaTextLink: {
      description: 'Text link props',
      table: {
        type: {
          summary: 'object',
        },
      },
    },
    status: {
      description: 'Validation condition of input',
      options: [InputValidations.DEFAULT, InputValidations.VALID, InputValidations.INVALID],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: InputValidations.DEFAULT,
          detail: 'It should be used when Visiual validation required.',
        },
      },
    },
    onInputChange: {
      description: 'Input value change can be done or control',
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
  },
} as Meta<typeof PhoneNumberComponent>;

const data = [
  { id: 1, name: '(+91)' },
  { id: 2, name: '(+66)' },
  { id: 2, name: '(+1)' },
];

const commonArgs = {
  name: 'phonenumber-story',
  data: data,
  configData: {
    label: 'name',
    onSelect: (e: DropDownData) => LoggerService.log(e.name as string),
  },
  onInputChange: val => {
    LoggerService.log(val || '');
  },
  dropdownLabel: 'Country',
  inputLabel: 'Phone Number',
  message: '',
};

type Story = StoryObj<typeof PhoneNumberComponent>;

export const PhoneNumber: Story = {
  args: {
    ...commonArgs,
    name: 'PhoneNumber',
  },
};

export const PhoneNumberFilled: Story = {
  args: {
    ...commonArgs,
    name: 'Phone Field',
    inputType: InputTypes.TEXT,
    inputValue: '(123) 456-7890',
    dropdownValue: '+1',
  },
};

export const PhoneNumberComponentDisabled: Story = {
  args: {
    ...commonArgs,
    name: 'Phone Field',
    inputDisabled: true,
    dropdownDisabled: true,
  },
};

export const PhoneNumberComponentSuccess: Story = {
  args: {
    ...commonArgs,
    name: 'Phone Field',
    status: InputValidations.VALID,
    message: 'Success message',
  },
};

export const PhoneNumberComponentError: Story = {
  args: {
    ...commonArgs,
    name: 'Phone Field',
    status: InputValidations.INVALID,
    message: 'Error message',
  },
};

export const PhoneNumberComponentWithCTA: Story = {
  args: {
    ...commonArgs,
    name: 'Phone Field',
    ctaTextLink: {
      text: 'Change',
      textLinkStyle: TextLinkStyle.UNDERLINE,
    },
  },
};
