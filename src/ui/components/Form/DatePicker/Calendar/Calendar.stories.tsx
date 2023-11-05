import type { StoryObj, Meta } from '@storybook/react';
import CalendarComponent from './Calendar';

export default {
  title: 'Components/Form/Calendar',
  component: CalendarComponent,
  argTypes: {
    showFullCalendar: {
      description: 'Flag to show full calendar',
      table: {
        type: {
          summary: 'boolean',
          detail: 'Display full calendar = true, Show next 30 days = false',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    selectRange: {
      description: 'Flag to allow select a date range',
      table: {
        type: {
          summary: 'boolean',
          detail: 'Select range = true, able to select a date range',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    onChange: {
      description: 'Callback on date selection confirmation',
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
    disabledDates: {
      description: 'List of dates to be disabled',
      table: {
        type: {
          summary: 'array',
        },
        defaultValue: {
          summary: [],
        },
      },
    },
    timeLabel: {
      description: 'Label for time field',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Time Label',
        },
      },
    },
    timeLabelStart: {
      description: 'Placeholder text for start time in case of range',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Select time (start time)',
        },
      },
    },
    timeLabelEnd: {
      description: 'Placeholder text for end time in case of range',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Select time (end time)',
        },
      },
    },
    showTime: {
      description: 'Flag to show time section',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    value: {
      description: 'Current value to make date selected',
      table: {
        type: {
          summary: 'Date',
        },
        defaultValue: undefined,
      },
    },
    valueTo: {
      description: 'Current end value to make date selected in case of range',
      table: {
        type: {
          summary: 'Date',
        },
        defaultValue: undefined,
      },
    },
    calendarTitle: {
      description: 'provides title to calender and hides additional details.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: '',
      },
    },
    show4WeeksOnly: {
      description: 'Flag to show only 4 week time span',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
  },
} as Meta<typeof CalendarComponent>;

type Story = StoryObj<typeof CalendarComponent>;

export const Default: Story = {
  args: {
    showFullCalendar: true,
    selectRange: false,
    onChange: () => null,
    calendarTitle: '',
    show4WeeksOnly: false,
  },
};

export const RangePicker: Story = {
  args: {
    showFullCalendar: true,
    selectRange: true,
    onChange: () => null,
    calendarTitle: '',
    show4WeeksOnly: false,
  },
};

export const WithTitle: Story = {
  args: {
    showFullCalendar: true,
    selectRange: false,
    onChange: () => null,
    calendarTitle: 'Payment Date',
    show4WeeksOnly: true,
  },
};
