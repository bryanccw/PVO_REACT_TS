import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from '../';
import ToastProvider, { useToast } from '../Toast/ToastProvider';

export default {
  title: 'Components/ToastProvider',
  decorators: [
    Story => {
      const { addToast, deleteToast } = useToast();

      return (
        <ToastProvider>
          <Story />
          <button
            onClick={() =>
              addToast({
                id: 'TOAST_ID',
                content: (
                  <Notification
                    message={'The bundle price has been updated'}
                    onCloseClick={() => deleteToast('TOAST_ID')}
                    data-testid="toast-notification-testid"
                  />
                ),
                topPosition: '20px',
              })
            }
            data-testid="toast-provider-testid"
          >
            Show Notification
          </button>
        </ToastProvider>
      );
    },
  ],
  component: ToastProvider,
  argTypes: {
    timeout: {
      description: 'Deprecated',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
} as Meta<typeof ToastProvider>;

type Story = StoryObj<typeof ToastProvider>;

export const Default: Story = {};
