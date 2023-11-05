import type { StoryObj, Meta } from '@storybook/react';
import { TooltipPreference } from '../../';
import DatePickerComponent from './DatePicker';

const { BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT, LEFT, RIGHT, TOP_CENTER, TOP_LEFT, TOP_RIGHT } = TooltipPreference;

export default {
  title: 'Components/Form/DatePicker',
  component: DatePickerComponent,
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
    inputLabel: {
      description: 'Label for input field',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Input Label',
        },
      },
    },
    labelInfo: {
      description: 'information icon with input label.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
          detail: 'It works only with label',
        },
      },
    },
    labelInfoPreference: {
      description: 'position of tooltip.',
      control: { type: 'select' },
      options: [BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT, LEFT, RIGHT, TOP_CENTER, TOP_LEFT, TOP_RIGHT],
      table: {
        type: {
          summary: 'TooltipPreference',
        },
        defaultValue: {
          summary: 'RIGHT',
        },
      },
    },
    placeholder: {
      description: 'Placeholder for input field',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Placeholder',
        },
      },
    },
    cancelLabel: {
      description: 'Label for cancel',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Cancel Label',
        },
      },
    },
    scheduleLabel: {
      description: 'Label for schedule field',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Schedule Label',
        },
      },
    },
    onCalendarToggle: {
      description: 'Callback on calendar toggle',
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
    onSelect: {
      description: 'Callback on selection',
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
    value: {
      description: 'Current selected value',
      table: {
        type: {
          summary: 'Date',
        },
        defaultValue: undefined,
      },
    },
    valueTo: {
      description: 'End field selected value in case of range',
      table: {
        type: {
          summary: 'Date',
        },
        defaultValue: undefined,
      },
    },
    displayText: {
      description: 'Custom display text of selection',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    description: {
      description: 'Description text for date picker',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    calendarHeading: {
      description: 'Calendar heading',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    calendarFooter: {
      description: 'Calendar footer text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
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
  },
} as Meta<typeof DatePickerComponent>;

type Story = StoryObj<typeof DatePickerComponent>;

export const DatePicker = {
  args: {
    showFullCalendar: true,
    onChange: () => {
      // action here
    },
    disabledDates: [],
    timeLabel: 'Time Label',
    labelInfo: 'Some Tooltip',
    labelInfoPreference: BOTTOM_CENTER,
    inputLabel: 'Input Label',
    placeholder: 'Placeholder',
    cancelLabel: 'Cancel Label',
    scheduleLabel: 'Schedule Label',
    onCalendarToggle: () => {
      // action here
    },
    onSelect: () => {
      // action here
    },
    value: undefined,
    displayText: '',
    description: 'Description Text',
    calendarHeading: 'Calendar Heading',
    calendarFooter: 'Calendar Footer',
    showTime: false,
    inputContainerHeight: '10px',
  },
};

export const WithTime: Story = {
  args: {
    showFullCalendar: true,
    onChange: () => {
      // action here
    },
    disabledDates: [],
    timeLabel: 'Time Label',
    inputLabel: 'Input Label',
    placeholder: 'Placeholder',
    cancelLabel: 'Cancel Label',
    scheduleLabel: 'Schedule Label',
    onCalendarToggle: () => {
      // action here
    },
    onSelect: () => {
      // action here
    },
    value: undefined,
    displayText: '',
    description: 'Description Text',
    calendarHeading: 'Calendar Heading',
    calendarFooter: 'Calendar Footer',
    showTime: true,
  },
};

export const OnlyDates: Story = {
  args: {
    showFullCalendar: false,
    onChange: () => {
      // action here
    },
    disabledDates: [],
    timeLabel: 'Time Label',
    inputLabel: 'Input Label',
    placeholder: 'Placeholder',
    cancelLabel: 'Cancel Label',
    scheduleLabel: 'Schedule Label',
    onCalendarToggle: () => {
      // action here
    },
    onSelect: () => {
      // action here
    },
    value: undefined,
    displayText: '',
    description: 'Description Text',
    calendarHeading: 'Calendar Heading',
    calendarFooter: 'Calendar Footer',
    showTime: true,
  },
};

export const DateRange: Story = {
  args: {
    showFullCalendar: true,
    selectRange: true,
    onChange: () => {
      // action here
    },
    disabledDates: [],
    timeLabel: 'Time Label',
    inputLabel: 'Input Label',
    placeholder: 'Placeholder',
    cancelLabel: 'Cancel Label',
    scheduleLabel: 'Schedule Label',
    onCalendarToggle: () => {
      // action here
    },
    onSelect: () => {
      // action here
    },
    value: undefined,
    displayText: '',
    description: 'Description Text',
    calendarHeading: 'Calendar Heading',
    calendarFooter: 'Calendar Footer',
    showTime: true,
  },
};
