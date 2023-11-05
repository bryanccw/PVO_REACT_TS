import type { StoryObj, Meta } from '@storybook/react';
import { Theme, IconStyle } from '../../';
import IconButtonComponent from './IconButton';

const { PURPLE, BLACK, WHITE } = Theme;

export default {
  title: 'Components/Form/IconButton',
  component: IconButtonComponent,
  argTypes: {
    theme: {
      description: 'Select Listed Theme of the Button',
      control: { type: 'select' },
      options: [PURPLE, BLACK, WHITE],
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    containerClassName: {
      options: [' '],
      control: { type: 'select' },
      description: 'Select CSS Class for container',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
          detail: 'User can select different className for container span',
        },
      },
    },
    className: {
      options: [' '],
      control: { type: 'select' },
      description: 'Select CSS Class for icon',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
          detail: 'User can select different className for icon',
        },
      },
    },
  },
  disabled: {
    description: 'Make IconButton Component Enable/Disable',
    control: { type: 'boolean' },
    defaultValue: false,
  },
  iconWithBorder: {
    descripttion: 'Provide Icon Button component border Enable/Disable',
    control: { type: 'boolean' },
    defaultValue: false,
  },
} as Meta<typeof IconButtonComponent>;

type Story = StoryObj<typeof IconButtonComponent>;

export const IconButtonDisabled: Story = {
  args: {
    iconName: 'download',
    iconStyle: IconStyle.SOLID,
    disabled: true,
  },
};

export const IconButtonWithBoarder: Story = {
  args: {
    iconName: 'download',
    iconStyle: IconStyle.SOLID,
    iconWithBorder: true,
  },
};

export const IconButtonWithTheme: Story = {
  args: {
    iconName: 'download',
    iconStyle: IconStyle.SOLID,
    theme: PURPLE,
  },
};
