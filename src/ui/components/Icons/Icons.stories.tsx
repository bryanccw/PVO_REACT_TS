// import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { Theme } from '../types/enums';
import { Shade, IconStyle } from './types/enums';
import { FAIcon } from './Icons';

const { PURPLE, BLUE, ORANGE, GREEN, RED, YELLOW, BLACK, WHITE } = Theme;
const { DARK, LIGHT } = Shade;
const { SOLID, REGULAR } = IconStyle;

export default {
  title: 'Components/Icon',
  component: FAIcon,
  argTypes: {
    theme: {
      description: 'Select Listed Theme of the Button',
      control: { type: 'select' },
      options: [PURPLE, BLUE, ORANGE, GREEN, RED, YELLOW, BLACK, WHITE],
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    shade: {
      description: 'It helps to place icon adjacent to text (left/right) position',
      options: [DARK, LIGHT],
    },
    iconStyle: {
      description: 'Icon Style to be passed if icon prop is passed as IconName instead of IconLookup',
      options: [SOLID, REGULAR],
    },
    className: {
      options: [' '],
      control: { type: 'select' },
      description: 'Select CSS Class',
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
  },
} as Meta<typeof FAIcon>;

type Story = StoryObj<typeof FAIcon>;

export const Regular: Story = {
  args: {
    iconName: 'house-chimney',
    theme: BLACK,
    shade: DARK,
    iconStyle: IconStyle.SOLID,
  },
};

export const Solid: Story = {
  args: {
    iconName: 'home',
    theme: BLACK,
    iconStyle: IconStyle.SOLID,
    shade: DARK,
  },
};
