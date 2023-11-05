import type { Meta, StoryObj } from '@storybook/react';
import SliderComponent from './Slider';

export default {
  title: 'Components/Form/Slider',
  component: SliderComponent,
  argTypes: {
    min: {
      description: 'Min slider value',
      table: {
        type: {
          summary: 'string',
          detail: 'User can select slider min value',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    max: {
      description: 'Max slider value',
      table: {
        type: {
          summary: 'string',
          detail: 'User can select slider max value',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    value: {
      description: 'Current slider value',
      table: {
        type: {
          summary: 'string',
          detail: 'User can select current slider value',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    step: {
      description: ' Slider incremental step value',
      table: {
        type: {
          summary: 'string',
          detail: 'User can configure step value',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    onChange: {
      description: 'onchange slider event',
      table: {
        type: {
          summary: 'function',
        },
        defaultValue: {
          summary: () => {
            // action here
          },
        },
      },
    },
  },
} as Meta<typeof SliderComponent>;

type Story = StoryObj<typeof SliderComponent>;

export const Slider: Story = {
  args: {},
};

export const DefaultSlider: Story = {
  args: {
    min: 0,
    max: 100,
    step: 0.1,
    value: 0,
  },
};
