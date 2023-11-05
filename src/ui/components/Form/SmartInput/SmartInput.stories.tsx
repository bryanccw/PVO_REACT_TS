import type { StoryObj, Meta } from '@storybook/react';
import { LoggerService } from '../../../utils/logger';
import { InputTypes, InputValidations } from '../';
import { TextLinkStyle } from '../../';
import SmartInputComponent from './SmartInput';
import { InputType } from './types/enums';

const countryCode = [
  { id: 1, name: '(+91)' },
  { id: 2, name: '(+66)' },
  { id: 3, name: '(+61)' },
  { id: 4, name: '(+60)' },
];

export default {
  title: 'Components/Form/SmartInput',
  component: SmartInputComponent,
  argTypes: {
    name: {
      description: 'Name of the input',
    },
    defaultLabel: {
      description: 'Label when no input',
    },
    mobileLabel: {
      description: 'Label of mobile',
    },
    emailLabel: {
      description: 'Label of email',
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
    value: {
      description: 'value represents content displaying in the input',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    inputType: {
      description: 'type represents type of value input type can have',
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
    smartInputType: {
      description: 'type represents type of value input can have',
      options: [InputType.EMAIL_MOBILE, InputType.EMAIL, InputType.MOBILE],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: InputType.EMAIL_MOBILE,
          detail: "The default value of the type attribute is 'text'.",
        },
      },
    },
    message: {
      description: 'Message to be display with input',
    },
    status: {
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: InputValidations.DEFAULT,
        detail: 'Default value is default, VALID and INVALID can be added to show error or success',
      },
    },
    onChange: {
      description: 'input value change can be done or control',
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
    ctaTextLink: {
      description: 'Text link props',
      table: {
        type: {
          summary: 'object',
        },
      },
    },
  },
} as Meta<typeof SmartInputComponent>;

type Story = StoryObj<typeof SmartInputComponent>;

const commonArgs = {
  id: 'Input_id',
  defaultLabel: 'Email or Mobile',
  mobileLabel: 'Mobile',
  emailLabel: 'Email',
  value: '',
  dropdownLabel: 'Country',
  name: 'Text field',
  data: countryCode,
  configData: {
    label: 'name',
    onSelect: e => LoggerService.log(`${e?.name}`),
  },
};

export const InputWithEmailOrMobile: Story = {
  args: {
    ...commonArgs,
    name: 'Input With Email or Mobile',
    message: '',
    labelInfo: '',
    smartInputType: InputType.EMAIL_MOBILE,
    inputType: InputTypes.TEXT,
  },
};

export const EmailInput: Story = {
  args: {
    ...commonArgs,
    name: 'Email Input',
    message: '',
    labelInfo: '',
    smartInputType: InputType.EMAIL,
    inputType: InputTypes.TEXT,
  },
};

export const MobileInput: Story = {
  args: {
    ...commonArgs,
    name: 'Mobile Input',
    message: '',
    labelInfo: '',
    smartInputType: InputType.MOBILE,
    inputType: InputTypes.NUMBER,
  },
};

export const MobileInputWithCTA: Story = {
  args: {
    ...commonArgs,
    name: 'Mobile Input',
    message: '',
    labelInfo: '',
    smartInputType: InputType.MOBILE,
    inputType: InputTypes.NUMBER,
    ctaTextLink: { text: 'Search', textLinkStyle: TextLinkStyle.UNDERLINE },
  },
};

export const MobileInputWithMessageAndStatus: Story = {
  args: {
    ...commonArgs,
    name: 'Mobile Input',
    message: 'This is message',
    labelInfo: '',
    status: InputValidations.VALID,
    smartInputType: InputType.MOBILE,
    inputType: InputTypes.NUMBER,
  },
};
