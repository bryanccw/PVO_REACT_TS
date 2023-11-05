import type { StoryObj, Meta } from '@storybook/react';
import { LoggerService } from '../../../utils/logger';
import { MLPVersion } from '../../';
import TextAreaComponent, { TextAreaValidations } from './TextArea';

export default {
  title: 'Components/Form/TextArea',
  component: TextAreaComponent,
  argTypes: {
    name: {
      description: 'Name of the TextArea',
    },
    label: {
      description: 'Label of the TextArea',
    },
    labelInfo: {
      description: 'Information icon with label.',
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
      description: 'value represents content displaying in the TextArea',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    autoFocus: {
      description: 'TextArea field should automatically get focus when the page loads',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
          detail: 'autofocus enable TextArea get in focus.',
        },
      },
    },
    readOnly: {
      description: 'A read-only TextArea field cannot be modified',
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
      description: 'A disabled TextArea field is unusable and un-clickable.',
      table: {
        type: {
          summary: 'boolean',
          detail: 'Enabled TextArea = false , Disabled TextArea = true',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    resize: {
      description: 'A resizable TextArea can be resized.',
      table: {
        type: {
          summary: 'boolean',
          detail: 'resizable TextArea can be resized on drag else will take width',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    onChange: {
      description: 'text area value change can be done or control',
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
      description: 'validation condition for text area',
      options: [TextAreaValidations.VALID, TextAreaValidations.INVALID],
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
  },
} as Meta<typeof TextAreaComponent>;

type Story = StoryObj<typeof TextAreaComponent>;

const commonArgs = {
  id: 'TextArea_id',
  lang: '',
  tabIndex: 0,
  className: '',
  placeholder: 'Text Area',
  disabled: false,
  resize: false,
  autoFocus: false,
  readOnly: false,
  minLength: 0,
  maxLength: Infinity,
  rows: 2,
  cols: 20,
  onChange: e => LoggerService.log(e.target.value),
};

export const TextArea: Story = {
  args: {
    ...commonArgs,
    name: 'Text Area Field',
    value: 'text area',
    label: '',
    labelInfo: '',
  },
};

export const TextAreaFieldWithLabel: Story = {
  args: {
    ...commonArgs,
    name: 'Text area field with label',
    value: 'text area',
    label: 'Label',
    labelInfo: 'Label info',
  },
};

export const TextAreaFieldMLPVersion2Default: Story = {
  args: {
    ...commonArgs,
    mlpVersion: MLPVersion.TWO,
    name: 'Text area field with label',
    label: 'Label',
    labelInfo: 'Label info',
    status: TextAreaValidations.DEFAULT,
    disabled: false,
    value: 'Text Area',
    placeholder: '',
    rows: 5,
  },
};

export const TextAreaFieldMLPVersion2WithoutLabel: Story = {
  args: {
    ...commonArgs,
    mlpVersion: MLPVersion.TWO,
    name: 'Text area field without label',
    label: '',
    status: TextAreaValidations.VALID,
    disabled: false,
    value: 'Value',
    placeholder: 'Value',
  },
};

export const TextAreaFieldMLPVersion2Success: Story = {
  args: {
    ...commonArgs,
    mlpVersion: MLPVersion.TWO,
    name: 'Text area field with label',
    label: 'Label',
    labelInfo: 'Label info',
    status: TextAreaValidations.VALID,
    disabled: false,
    value: '',
    placeholder: '',
  },
};

export const TextAreaFieldMLPVersion2SuccessWithMessage: Story = {
  args: {
    ...commonArgs,
    mlpVersion: MLPVersion.TWO,
    name: 'Text area field with label',
    label: 'Label',
    labelInfo: 'Label info',
    status: TextAreaValidations.VALID,
    disabled: false,
    value: '',
    message: 'Success',
    placeholder: '',
  },
};

export const TextAreaFieldMLPVersion2Error: Story = {
  args: {
    ...commonArgs,
    mlpVersion: MLPVersion.TWO,
    name: 'Text area field with label',
    label: 'Label',
    labelInfo: 'Label info',
    status: TextAreaValidations.INVALID,
    disabled: false,
    value: '',
    placeholder: '',
  },
};

export const TextAreaFieldMLPVersion2ErrorWithMessage: Story = {
  args: {
    ...commonArgs,
    mlpVersion: MLPVersion.TWO,
    name: 'Text area field with label',
    label: 'Label',
    labelInfo: 'Label info',
    status: TextAreaValidations.INVALID,
    disabled: false,
    value: '',
    placeholder: '',
    message: 'Message',
  },
};

export const TextAreaFieldMLPVersion2Disabled: Story = {
  args: {
    ...commonArgs,
    mlpVersion: MLPVersion.TWO,
    name: 'Text area field with label',
    value: 'Value',
    label: 'Label',
    labelInfo: 'Label info',
    disabled: true,
  },
};

export const TextAreaFieldMLPVersion2Placeholder: Story = {
  args: {
    ...commonArgs,
    mlpVersion: MLPVersion.TWO,
    name: 'Text area field with label',
    placeholder: 'Placeholder',
    disabled: false,
  },
};
