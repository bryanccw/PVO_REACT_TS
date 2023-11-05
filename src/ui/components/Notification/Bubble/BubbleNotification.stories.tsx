import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { Theme } from '../../types/enums';
import BubbleNotification from './BubbleNotification';

const { SUCCESS, WARNING, ERROR, ACTION } = Theme;

export default {
  title: 'Components/Notification/BubbleNotification',
  component: BubbleNotification,
  argTypes: {
    theme: {
      description: 'Select Listed Theme of the Notification',
      control: { type: 'select' },
      options: [SUCCESS, WARNING, ERROR, ACTION],
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
    messageCount: {
      description: 'Notification Count',
      table: {
        type: {
          summary: 'Number',
        },
        defaultValue: {
          summary: 0,
        },
      },
    },
    className: {
      description: 'Wrapper class [.module.scss]',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
} as Meta<typeof BubbleNotification>;

const message = 'more notifications',
  messageCount = 3,
  commonArgs = {
    className: '',
    theme: SUCCESS,
  };

type Story = StoryObj<typeof BubbleNotification>;

export const Default: Story = {
  name: 'BubbleNotification',
  decorators: [
    (Story, context) => {
      const args = context.args;

      return <BubbleNotification {...args} theme={Theme.SUCCESS} message={message} messageCount={messageCount} />;
    },
  ],
  args: {
    ...commonArgs,
    message: message,
    messageCount: 3,
  },
};
