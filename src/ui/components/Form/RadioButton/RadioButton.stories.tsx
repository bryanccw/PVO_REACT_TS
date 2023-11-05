import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { Theme } from '../../types/enums';
import RadioButtonComponent from './RadioButton';

const { PURPLE, BLUE, ORANGE, GREEN, RED, YELLOW, SUCCESS, WARNING, ERROR, BLACK, WHITE } = Theme;
export default {
  title: 'Components/Form/RadioButton',
  component: RadioButtonComponent,
  decorators: [
    (Story, context) => {
      const args = context.args;

      const [checked, setChecked] = React.useState(args?.checked || false);
      return (
        <>
          <Story {...args} checked={checked} onClick={() => setChecked(!checked)} />
          <h4>Radio Button is {`${checked ? '' : 'Un'}checked`}</h4>
        </>
      );
    },
  ],
  argTypes: {
    label: {
      description: 'Display text on radio button',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    className: {
      description: 'custom can be passed Class',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
          detail: 'User can select different className',
        },
      },
    },
    checked: {
      description: ' provides radio is selected or not',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    theme: {
      description: 'Select Listed Theme of the Radio button',
      control: { type: 'select' },
      options: [PURPLE, BLUE, ORANGE, GREEN, RED, YELLOW, SUCCESS, WARNING, ERROR, BLACK, WHITE],
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    name: {
      description: 'Name of the radio',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    id: {
      description: 'unique id to distinguish element on DOM.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    onChange: {
      description: 'Radio value change can be done or control',
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
      description: 'A disabled radio field is unusable and un-clickable.',
      table: {
        type: {
          summary: 'boolean',
          detail: 'Enabled RadioButton = false , Disabled RadioButton = true',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
  },
} as Meta<typeof RadioButtonComponent>;

type Story = StoryObj<typeof RadioButtonComponent>;

const commonArgs = {
  disabled: false,
  label: '',
  className: '',
};

export const RadioButton: Story = {
  args: {
    ...commonArgs,
  },
};

export const RadioButtonWithLabel: Story = {
  args: {
    ...commonArgs,
    label: 'Add to label',
  },
};
