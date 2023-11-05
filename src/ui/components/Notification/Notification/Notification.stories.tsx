import type { StoryObj, Meta } from '@storybook/react';
import { Theme } from '../../';
import Notification from './Notification';

const { SUCCESS, WARNING, ERROR, ACTION, BLACK } = Theme;

export default {
  title: 'Components/Notification/Notification',
  component: Notification,
  argTypes: {
    theme: {
      description: 'Select Listed Theme of the Notification',
      control: { type: 'select' },
      options: [SUCCESS, WARNING, ERROR, ACTION, BLACK],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: SUCCESS,
        },
      },
    },
    message: {
      description: 'Text Message',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    description: {
      description: 'description of Text Message',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    hasCloseIcon: {
      description: 'Toggle X icon visibility',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    zIndex: {
      description: 'z-index of page header',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    onCloseClick: {
      description: 'triggers when user click on notification',
    },
    customIcon: {
      description: 'Custom icon for notification and it supports all FAIcon props',
    },
    textLink: {
      description: 'textlink can be placed at "X".',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: { text: '', href: '' },
        },
      },
    },
  },
} as Meta<typeof Notification>;

type Story = StoryObj<typeof Notification>;

const commonArgs = {
  message: 'Notification Message ',
  theme: SUCCESS,
  hasBoldText: true,
  hasNotificationIcon: true,
  textLink: { text: '', href: '' },
  description: '',
};

export const Default: Story = {
  name: 'Notification',
  args: {
    ...commonArgs,
  },
};

export const NotificationWithoutIcon: Story = {
  args: {
    ...commonArgs,
    hasNotificationIcon: false,
  },
};

export const NotificationWithTheme: Story = {
  args: {
    ...commonArgs,
    message: 'Success Message',
    theme: Theme.SUCCESS,
  },
};

export const NotificationWithCustomIcon: Story = {
  args: {
    ...commonArgs,
    message: 'Success Message',
    theme: Theme.SUCCESS,
    customIcon: {
      iconName: 'spinner',
    },
  },
};

export const NotificationWithThemeAndDetails: Story = {
  args: {
    ...commonArgs,
    message: 'Success Message',
    theme: Theme.SUCCESS,
    description: 'Details regarding this message. ',
  },
};

export const NotificationWithoutCloseButton: Story = {
  args: {
    ...commonArgs,
    onCloseClick: null,
  },
};

export const NotificationWithTextLink: Story = {
  args: {
    ...commonArgs,
    textLink: { text: 'Text Link', href: '#notification' },
  },
};

export const NotificationWithoutBoldText: Story = {
  args: {
    ...commonArgs,
    theme: Theme.SUCCESS,
    hasBoldText: false,
  },
};

export const BasicNotificationWithZIndex1: Story = {
  args: {
    ...commonArgs,
    zIndex: '1',
  },
};

export const BasicNotificationWithZIndexMoreThan5: Story = {
  args: {
    ...commonArgs,
    zIndex: '100',
  },
};
