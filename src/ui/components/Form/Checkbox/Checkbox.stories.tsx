import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { Theme } from '../../types/enums';
import CheckboxComponent from './Checkbox';

const { BLUE, BLACK, WHITE } = Theme;

export default {
  title: 'Components/Form/Checkbox',
  component: CheckboxComponent,
  argTypes: {
    text: {
      description: 'Name of the field',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    disabled: {
      description: 'Toggle Enable/Disable Checkbox',
      table: {
        type: {
          summary: 'boolean',
          detail: 'Enabled Checkbox = false , Disabled Checkbox = true',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    checkboxStyle: {
      description: 'Deprecated',
    },
    theme: {
      description: 'Select Listed Theme of the TextLink',
      control: { type: 'select' },
      options: [BLUE, BLACK, WHITE],
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    checked: {
      description: 'Check/uncheck the Checkbox',
      table: {
        type: {
          summary: 'boolean',
          detail: 'Checked = true , Unchecked = false',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
  },
} as Meta<typeof CheckboxComponent>;

type Story = StoryObj<typeof CheckboxComponent>;

export const Checkbox: Story = {
  args: {
    text: (
      <>
        <section style={{ font: 'bold', textDecoration: 'underline' }}>Term & Conditions</section>
      </>
    ),
    theme: Theme.BLACK,
    disabled: false,
  },
};
