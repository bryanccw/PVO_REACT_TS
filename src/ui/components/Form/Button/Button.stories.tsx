import type { StoryObj, Meta } from '@storybook/react';
import { Theme } from '../../';
import { ButtonIconPosition, ButtonStyles, ButtonSize, ButtonWidth } from './types/enums';
import Button from './Button';

const { SOLID, OUTLINE } = ButtonStyles;
const { PURPLE, BLUE, ORANGE, GREEN, RED, YELLOW, BLACK, WHITE } = Theme;
const { SMALL, MEDIUM } = ButtonSize;
const { LEFT, RIGHT } = ButtonIconPosition;
const { FIT_CONTENT, FULL_WIDTH } = ButtonWidth;

export default {
  title: 'Components/Form/Button',
  component: Button,
  argTypes: {
    title: {
      description: 'Display text on button',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Click Me',
        },
      },
    },
    type: {
      description: 'Select behavioural types of button',
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset'],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'button',
        },
      },
    },
    disabled: {
      description: 'Select between enable/disable',
      table: {
        type: {
          summary: 'boolean',
          detail: 'Enabled Button = false , Disabled Button = true',
        },
        defaultValue: {
          summary: 'false',
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
    icon: {
      description: 'User can pass icon from font-awesome library.',
    },
    size: {
      description: 'To give size to button either small or medium',
      options: [SMALL, MEDIUM],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: MEDIUM,
        },
      },
    },
    iconPosition: {
      description: 'It helps to place icon adjacent to text (left/right) position',
      options: [LEFT, RIGHT],
    },
    buttonStyle: {
      description: 'Select any listed style for button',
      control: { type: 'select' },
      options: [SOLID, OUTLINE],
    },
    buttonWidth: {
      description: 'Select button width',
      control: { type: 'select' },
      options: [FIT_CONTENT, FULL_WIDTH],
    },
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
    onClick: {
      description: 'User click event',
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
    onFocus: {
      description: 'Focus event',
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
    onMouseOver: {
      description: 'Mouse pointer over the button event',
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
    onMouseOut: {
      description: 'Mouse leave button event',
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
    onLoad: {
      description: 'Button added to the DOM event',
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
    tabIndex: {
      description: 'Controls tab button focus movement',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: '1',
        },
      },
    },
    language: {
      description: 'Change Language of text',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'en',
        },
      },
    },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    title: 'Button',
    type: 'button',
    theme: BLACK,
    size: MEDIUM,
    buttonStyle: SOLID,
  },
};

export const Outline: Story = {
  args: {
    title: 'Button',
    type: 'button',
    theme: BLACK,
    size: MEDIUM,
    buttonStyle: OUTLINE,
  },
};

export const SolidIcon: Story = {
  args: {
    title: 'Button',
    type: 'button',
    theme: ORANGE,
    size: MEDIUM,
    buttonStyle: SOLID,
    icon: {
      iconName: 'file-text',
    },
    iconPosition: LEFT,
  },
};

export const OutlineIcon: Story = {
  args: {
    title: 'Button',
    type: 'button',
    theme: GREEN,
    size: MEDIUM,
    buttonStyle: OUTLINE,
    icon: {
      iconName: 'file-text',
    },
    iconPosition: RIGHT,
  },
};

export const Small: Story = {
  args: {
    title: 'Button',
    type: 'button',
    theme: PURPLE,
    size: SMALL,
    buttonStyle: OUTLINE,
    icon: {
      iconName: 'file-text',
    },
    iconPosition: RIGHT,
  },
};

export const Medium: Story = {
  args: {
    title: 'Button',
    type: 'button',
    theme: RED,
    size: MEDIUM,
    buttonStyle: OUTLINE,
    icon: {
      iconName: 'file-text',
    },
    iconPosition: RIGHT,
  },
};

export const FullWidthButton: Story = {
  args: {
    title: 'Button',
    type: 'button',
    size: MEDIUM,
    buttonStyle: SOLID,
    iconPosition: RIGHT,
    buttonWidth: FULL_WIDTH,
  },
};

export const FitContentButton: Story = {
  args: {
    title: 'Button',
    type: 'button',
    theme: BLACK,
    size: MEDIUM,
    buttonStyle: SOLID,
    iconPosition: RIGHT,
    buttonWidth: FIT_CONTENT,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Button',
    type: 'button',
    theme: BLACK,
    size: MEDIUM,
    buttonStyle: SOLID,
    icon: {
      iconName: 'file-text',
    },
    iconPosition: RIGHT,
    disabled: true,
  },
};
