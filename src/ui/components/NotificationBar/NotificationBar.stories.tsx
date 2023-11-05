import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { LoggerService } from '../../utils/logger';
import { Theme, BreakpointProvider, IconStyle } from '../';
import NotificationBar, { LinkTarget } from './NotificationBar';

const { BLANK, SELF, PARENT, TOP, FRAMENAME } = LinkTarget;

export default {
  title: 'Components/Notification/NotificationBar',
  component: NotificationBar,
  decorators: [
    (Story, context) => (
      <BreakpointProvider>
        <Story {...context.args} />
      </BreakpointProvider>
    ),
  ],
  argTypes: {
    message: {
      description: 'Text Message',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    icon: {
      description: 'User can pass icon from font-awesome library.',
    },
    linkText: {
      description: 'String to be display of link',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    linkRedirect: {
      description: 'Redirection URL.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    linkTarget: {
      description: 'Select Target Type of the Component.',
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
    iconClickHandler: {
      description: 'A callback function can be passed to show and control click behaviour on right action chevron',
      table: {
        type: {
          summary: 'function',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    theme: {
      description: 'Background color for Notification Bar Right Now supported Red & Purple',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Theme.PURPLE',
        },
      },
    },
    isCloseIconRequired: {
      description: 'Close button right side or notitication if not required we can set it false',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    ctaLabel: {
      description: 'Action button label',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    ctaClickHandler: {
      description: 'on ctalabel action perfrom callback funciton',
      table: {
        type: {
          summary: 'function',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    isShowMore: {
      description: 'showMore functionality required or not',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },
  },
} as Meta<typeof NotificationBar>;

type Story = StoryObj<typeof NotificationBar>;

// 202
export const DefaultNotificationBar: Story = {
  args: {
    message: 'Free shipping on orders more than €100!',
  },
};

export const CustomIconNotificationBar: Story = {
  args: {
    message: 'Free shipping on orders more than €100!',
    icon: 'chevron-down',
    iconStyle: IconStyle.SOLID,
  },
};

export const NotificationBarWithTextLink: Story = {
  args: {
    message: 'Free shipping on orders more than €100! (check console for interaction)',
    iconClickHandler: () => LoggerService.log('close button clicked'),
    linkText: 'Click Here',
    linkRedirect: 'http://www.google.com',
  },
};

export const NotificationBarWithViewMoreButton: Story = {
  args: {
    message:
      'Free shipping on orders more than €100! Free shipping on orders more than €100! Free shipping on orders more than €100! Free shipping on orders more than €100! Free shipping on orders more than €100! Free shipping on orders more than €100!',
    linkText: 'Click Here',
    linkRedirect: 'http://www.google.com',
  },
};

export const NotificationBarErrorStyle: Story = {
  args: {
    message: 'looks like something went wrong here (for cta interaction check console logs) ',
    theme: Theme.RED,
    isCloseIconRequired: false,
    ctaClickHandler: () => LoggerService.log('cta clicked!'),
    ctaLabel: 'reload page',
    isShowMore: false,
  },
};
