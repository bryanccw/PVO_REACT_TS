import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { LinkTarget, Theme, IconStyle } from '../';
import TextLink from './TextLink';
import { TextLinkIconPosition, TextLinkStyle, TextLinkUnderlineStyle } from './types/enums';

const { CHEVRON, CHEVRONUNDERLINE, ICON, UNDERLINE, ICONUNDERLINE } = TextLinkStyle;
const { BLANK, SELF, PARENT, TOP, FRAMENAME } = LinkTarget;
const { PURPLE, BLUE, ORANGE, GREEN, RED, YELLOW, BLACK, WHITE, SUCCESS, WARNING, ERROR } = Theme;
const { HOVER, NOHOVER, FIXED } = TextLinkUnderlineStyle;
const { LEFT, RIGHT } = TextLinkIconPosition;

export default {
  title: 'Components/TextLink',
  component: TextLink,
  argTypes: {
    text: {
      description: 'String to be display of link',
    },
    href: {
      description: 'Valid URL of target location',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Target_URL',
          detail: 'Redirection URL Required.',
        },
      },
    },
    icon: {
      description: 'User can pass icon from font-awesome library.',
    },
    iconPosition: {
      description: 'It helps to place icon adjacent to text (left/right)',
    },
    textLinkStyle: {
      description: 'Select Any Listed style',
      control: { type: 'select' },
      options: [CHEVRON, CHEVRONUNDERLINE, ICON, UNDERLINE, ICONUNDERLINE],
    },
    target: {
      description: 'Select Target Type of the TextLink.',
      control: { type: 'select' },
      options: [BLANK, SELF, PARENT, TOP, FRAMENAME],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: SELF,
          detail: 'User can select different target for redirection.',
        },
      },
    },
    disabled: {
      description: 'Toggle Enable/Disable TextLink',
      table: {
        type: {
          summary: 'boolean',
          detail: 'Enabled TextLink = false , Disabled TextLink = true',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    theme: {
      description: 'Select Listed Theme of the TextLink',
      control: { type: 'select' },
      options: [PURPLE, BLUE, ORANGE, GREEN, RED, YELLOW, BLACK, WHITE, SUCCESS, WARNING, ERROR],
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    underline: {
      description: 'Select Underline Condition of the TextLink.',
      control: { type: 'select' },
      options: [HOVER, NOHOVER, FIXED],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: HOVER,
          detail: 'User can select different target for redirection.',
        },
      },
    },
  },
} as Meta<typeof TextLink>;

type Story = StoryObj<typeof TextLink>;

const commonArgs = {
  id: 'TextLink_id',
  lang: '',
  tabIndex: 0,
};

export const Chevron: Story = {
  args: {
    ...commonArgs,
    text: 'TextLink',
    href: '#',
    target: SELF,
    textLinkStyle: CHEVRON,
    iconPosition: RIGHT,
    disabled: false,
  },
};

export const ChevronAndUnderline: Story = {
  args: {
    ...commonArgs,
    text: 'TextLink',
    href: 'https://www.figma.com/file/NmGzJoDRtkn481G3lgg0Z9/Amway-DS-%E2%80%93%C2%A0Global-Core-Components?node-id=23416%3A109630&t=4Qf0SGvNnDZfVUaO-0',
    icon: {
      iconName: 'chevron-right',
      iconStyle: IconStyle.SOLID,
    },
    textLinkStyle: CHEVRONUNDERLINE,
    disabled: false,
    target: SELF,
    iconPosition: RIGHT,
  },
};

export const Underline: Story = {
  args: {
    ...commonArgs,
    text: 'TextLink',
    href: 'https://www.figma.com/file/NmGzJoDRtkn481G3lgg0Z9/Amway-DS-%E2%80%93%C2%A0Global-Core-Components?node-id=23416%3A109630&t=4Qf0SGvNnDZfVUaO-0',
    textLinkStyle: UNDERLINE,
    target: SELF,
    disabled: false,
  },
};

export const Icon: Story = {
  args: {
    ...commonArgs,
    text: 'TextLink',
    href: 'https://www.figma.com/file/NmGzJoDRtkn481G3lgg0Z9/Amway-DS-%E2%80%93%C2%A0Global-Core-Components?node-id=23416%3A109630&t=4Qf0SGvNnDZfVUaO-0',
    textLinkStyle: ICON,
    icon: {
      iconName: 'file-text',
    },
    iconPosition: LEFT,
    disabled: false,
    target: SELF,
    underline: HOVER,
  },
};

export const IconAndUnderline: Story = {
  args: {
    ...commonArgs,
    text: 'TextLink',
    href: 'https://www.figma.com/file/NmGzJoDRtkn481G3lgg0Z9/Amway-DS-%E2%80%93%C2%A0Global-Core-Components?node-id=23416%3A109630&t=4Qf0SGvNnDZfVUaO-0',
    textLinkStyle: ICONUNDERLINE,
    icon: {
      iconName: 'file-text',
    },
    iconPosition: LEFT,
    disabled: false,
    target: SELF,
  },
};

export const TextLinkWithEvent: Story = {
  decorators: [
    (Story, context) => {
      const [log, setLog] = React.useState('TextLink is not clicked.');

      return (
        <>
          <TextLink {...context.args} text="Text Link" href="" onClick={() => setLog('TextLink is clicked.')} />
          <h4>{log}</h4>
        </>
      );
    },
  ],
  args: {
    ...commonArgs,
    textLinkStyle: ICONUNDERLINE,
    disabled: false,
    target: SELF,
    iconPosition: TextLinkIconPosition.RIGHT,
  },
};
