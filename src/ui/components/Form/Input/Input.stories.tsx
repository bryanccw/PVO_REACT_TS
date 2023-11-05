import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { LoggerService } from '../../../utils/logger';
import { MLPVersion, TooltipPreference, BreakpointProvider } from '../../';
import InputComponent from './Input';
import { InputValidations, InputTypes, InputAutoComplete } from './types/enums';

const { BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT, LEFT, RIGHT, TOP_CENTER, TOP_LEFT, TOP_RIGHT } = TooltipPreference;

export default {
  title: 'Components/Form/Input',
  component: InputComponent,
  decorators: [
    Story => (
      <BreakpointProvider>
        <Story />
      </BreakpointProvider>
    ),
  ],
  argTypes: {
    name: {
      description: 'Name of the input',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    label: {
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
    mlpVersion: {
      options: [MLPVersion.ONE, MLPVersion.TWO],
      description: 'If true, classic input box will be shown else input box with floating label will be created',
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
      description: 'value represents content displaying in the input',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    type: {
      description: 'type represents type of value input can have',
      options: [InputTypes.NUMBER, InputTypes.TEXT],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: InputTypes.TEXT,
          detail: "The default value of the type attribute is 'text'.",
        },
      },
    },
    message: {
      description: 'Message to be display with input',
    },
    onChange: {
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
    status: {
      description: 'Validation condition of input',
      options: [InputValidations.VALID, InputValidations.INVALID],
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
    autoFocus: {
      description: 'Input field should automatically get focus when the page loads',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
          detail: 'autofocus enable input get in focus.',
        },
      },
    },
    readOnly: {
      description: 'A read-only input field cannot be modified',
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
    autoComplete: {
      description: 'Input field should have autocomplete on or off.',
      control: { type: 'select' },
      options: [InputAutoComplete.ON, InputAutoComplete.OFF],
      table: {
        type: {
          summary: 'string',
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
    inputIcon: {
      description: 'User can pass icon from font-awesome library.',
    },
    id: {
      description: 'To give unique identification to the text field.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    inputIconOnClick: {
      description: 'User can pass onClick callback for inputIcon.',
    },
    lang: {
      description: 'To give the language to text field.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    tabIndex: {
      description: 'To make element focusable globally.',
      table: {
        type: {
          summary: 'number',
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
    placeholder: {
      description: 'To specify a short hint that describes the expected value.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    minLength: {
      description: 'Minimum number of characters required.',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    maxLength: {
      description: 'Maximum number of characters allowed.',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    prefix: {
      description: 'User can pass partial fixed value.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    iconImgSrc: {
      description: 'User can pass icon image instead of font-awesome icons. Only supported in mlpv2.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    iconClassName: {
      description: 'User can pass custom class to style the icon image. Only supported in mlpv2.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
} as Meta<typeof InputComponent>;

type Story = StoryObj<typeof InputComponent>;

const commonArgs = {
  id: 'Input_id',
  lang: '',
  tabIndex: 0,
  className: '',
  value: '',
  type: InputTypes.TEXT,
  placeholder: 'Placeholder',
  disabled: false,
  autoFocus: false,
  // autoComplete: false,
  readOnly: false,
  minLength: 0,
  maxLength: Infinity,
  onClear: e => LoggerService.log(e),
  mlpVersion: MLPVersion.ONE,
  prefix: '',
  ctaTextLink: {
    text: '',
  },
};

export const TextField: Story = {
  args: {
    ...commonArgs,
    name: 'Text Field',
    label: '',
    message: '',
    labelInfo: '',
    value: 'basic input',
  },
};

export const TextFieldWithLabel: Story = {
  args: {
    ...commonArgs,
    name: 'Text Field with field',
    message: 'Message',
    label: 'Field Label',
    labelInfo: 'Field Label',
    labelInfoPreference: BOTTOM_CENTER,
    prefix: 'partial\\value\\',
  },
};

export const TextFieldRightIcon: Story = {
  args: {
    ...commonArgs,
    name: 'Text Field with right icon',
    message: 'Message',
    inputIcon: { iconName: 'cart-shopping' },
  },
};

export const FloatLabelTextField: Story = {
  args: {
    ...commonArgs,
    name: 'Text Field',
    message: '',
    status: InputValidations.DEFAULT,
    mlpVersion: MLPVersion.TWO,
  },
};

export const FloatLabelTextFieldWithLabel: Story = {
  args: {
    ...commonArgs,
    name: 'Text Field with field',
    message: 'Helper Text',
    label: 'Field Label',
    mlpVersion: MLPVersion.TWO,
  },
};

export const FloatLabelTextFieldWithPartialInput: Story = {
  args: {
    ...commonArgs,
    name: 'partialInput',
    message: '',
    label: 'Field Label',
    prefix: 'https://global-dev.amcom-corp-preprod.amway.net/comamshopws/myshop/',
    mlpVersion: MLPVersion.TWO,
  },
};

export const FloatLabelTextFieldRightIcon: Story = {
  args: {
    ...commonArgs,
    name: 'Text Field with right icon',
    message: '',
    inputIcon: { iconName: 'cart-shopping' },
    inputIconOnClick: () => LoggerService.log('right icon clicked'),
    mlpVersion: MLPVersion.TWO,
  },
};

export const FloatLabelTextFieldRightIconSuccess: Story = {
  args: {
    ...commonArgs,
    name: 'Text Field with right icon',
    inputIcon: { iconName: 'cart-shopping' },
    inputIconOnClick: () => LoggerService.log('right icon clicked'),
    mlpVersion: MLPVersion.TWO,
    status: InputValidations.VALID,
    message: 'Helper Text',
  },
};

export const FloatLabelTextFieldRightIconError: Story = {
  args: {
    ...commonArgs,
    name: 'Text Field with right icon',
    inputIcon: { iconName: 'cart-shopping' },
    inputIconOnClick: () => LoggerService.log('right icon clicked'),
    mlpVersion: MLPVersion.TWO,
    status: InputValidations.INVALID,
    message: 'Helper Text',
  },
};

export const FloatLabelTextFieldCtaTextLink: Story = {
  args: {
    ...commonArgs,
    name: 'Text Field with CTA TextLink',
    inputIcon: { iconName: 'cart-shopping' },
    mlpVersion: MLPVersion.TWO,
    type: InputTypes.NUMBER,
    message: 'Helper Text',
    ctaTextLink: {
      text: 'Search',
      onClick: () => LoggerService.log('CTA clicked'),
    },
  },
};

export const FloatLabelTextFieldRightIconImage: Story = {
  args: {
    ...commonArgs,
    name: 'Text Field with right icon image',
    iconImgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU',
    inputIcon: { iconName: 'cart-shopping' },
    mlpVersion: MLPVersion.TWO,
    status: InputValidations.INVALID,
    message: 'Helper Text',
  },
};
