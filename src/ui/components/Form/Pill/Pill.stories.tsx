import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { Theme, IconStyle } from '../../';
import Pill from './Pill';
import { PillStyle, PillType } from './types/enums';

const { PURPLE, BLUE, ORANGE, GREEN, RED, YELLOW, SUCCESS, WARNING, ERROR, BLACK, WHITE } = Theme;

export default {
  title: 'Components/Form/Pill',
  component: Pill,
  decorators: [
    (Story, context) => {
      const [selected, setSelected] = React.useState(context.args?.selected || false);
      return (
        <>
          <Pill {...context.args} selected={selected} onPillClick={() => setSelected(!selected)} />
          <h4>Pill {`${selected ? '' : 'Un'}selected`}</h4>
        </>
      );
    },
  ],
  argTypes: {
    title: {
      description: 'Display text on Pills button',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    colorCode: {
      description: 'swatch color for Pill',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    imgSrc: {
      description: 'src to Image Pill',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    disabled: {
      description: 'Make Pill Component Enable/Disable',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    selected: {
      description: ' provides pill is selected or not',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    onPillClick: {
      description: 'click event on pill',
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
    Icon: {
      description: 'User can pass icon from font-awesome library.',
    },
    rightIcon: {
      description: 'User can pass iconName, iconStyle and shade in object',
      control: { type: 'object' },
    },
    theme: {
      description: 'Select Listed Theme of the Pill',
      control: { type: 'select' },
      options: [PURPLE, BLUE, ORANGE, GREEN, RED, YELLOW, SUCCESS, WARNING, ERROR, BLACK, WHITE],
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    pillStyle: {
      description: 'changes style of pill',
      control: { type: 'select' },
      options: [PillStyle.DEFAULT, PillStyle.CHIP],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: PillStyle.DEFAULT,
          detail: 'default pillStyle of pill.',
        },
      },
    },
    pillType: {
      description: 'changes types of pill',
      control: { type: 'select' },
      options: [PillType.SOLID, PillType.OUTLINE],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: PillType.OUTLINE,
          detail: 'default pill Type of pill.',
        },
      },
    },
  },
} as Meta<typeof Pill>;

type Story = StoryObj<typeof Pill>;

export const BasicPill: Story = {
  args: {
    title: 'Vanilla',
    className: 'basic-pill-story',
  },
};

export const PillComponetWithIocn: Story = {
  args: {
    title: 'Vanilla',
    icon: {
      iconName: 'calendar',
      iconStyle: IconStyle.SOLID,
    },
  },
};

export const ChipStyle: Story = {
  args: {
    title: 'Vanilla',
    pillStyle: PillStyle.CHIP,
  },
};

export const ChipStyleWithRightIcon: Story = {
  args: {
    title: 'Vanilla',
    pillStyle: PillStyle.CHIP,
    theme: ORANGE,
    rightIcon: {
      iconName: 'circle-xmark',
      iconStyle: 'solid',
      shade: 'dark',
    },
  },
};

export const ChipStyleDisabled: Story = {
  args: {
    title: 'Vanilla',
    pillStyle: PillStyle.CHIP,
    disabled: true,
  },
};

export const DisabledPill: Story = {
  args: {
    title: 'Vanilla',
    disabled: true,
  },
};

export const DisabledSelectedPill: Story = {
  args: {
    title: 'Vanilla',
    disabled: true,
    selected: true,
  },
};

export const SwatchPill: Story = {
  args: {
    colorCode: '#9E2744',
  },
};

export const SelectedSwatchPill: Story = {
  args: {
    colorCode: '#9E2744',
    selected: true,
  },
};

export const DisabledSwatchPill: Story = {
  args: {
    colorCode: '#9E2744',
    disabled: true,
  },
};

export const DisabledSelectedSwatchPill: Story = {
  args: {
    colorCode: '#9E2744',
    disabled: true,
    selected: true,
  },
};

export const ImagePill: Story = {
  args: {
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU',
  },
};

export const SelectedImagePill: Story = {
  args: {
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU',
    selected: true,
  },
};
