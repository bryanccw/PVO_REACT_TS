import type { StoryObj, Meta } from '@storybook/react';
import { IconStyle, Theme } from '../../';
import ToggleComponent, { ToggleStyle } from './Toggle';

const { PURPLE, BLUE, ORANGE, GREEN, RED, YELLOW } = Theme;

export default {
  title: 'Components/Form/Toggle',
  component: ToggleComponent,
  argTypes: {
    disabled: {
      description: "Toggle component's Visibility ",
      table: {
        type: {
          summary: 'boolean',
          detail: 'Display Toggle = true , Hide Toggle = false',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    theme: {
      description: 'Select Listed Theme of the Toggle',
      control: { type: 'select' },
      options: [PURPLE, BLUE, ORANGE, GREEN, RED, YELLOW],
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    toggleStyle: {
      description: 'Select Listed Toggle Style ',
      control: { type: 'select' },
      options: [ToggleStyle.SWITCH, ToggleStyle.INDIVIDUAL, ToggleStyle.TABS],
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
} as Meta<typeof ToggleComponent>;

type Story = StoryObj<typeof ToggleComponent>;

export const SwitchToogle: Story = {
  args: {
    text: 'Add Label',
    toggleStyle: ToggleStyle.SWITCH,
    disabled: false,
  },
};

export const IndividualToggle: Story = {
  args: {
    text: 'Tab Name',
    isActive: false,
    toggleStyle: ToggleStyle.INDIVIDUAL,
    disabled: false,
  },
};

export const TabToggleWithIcon: Story = {
  args: {
    toggleStyle: ToggleStyle.TABS,
    activeTab: 1,
    iconOnly: true,
    tabList: [
      { iconName: 'house', iconStyle: IconStyle.SOLID },
      { iconName: 'house' },
      { iconName: 'house' },
      { iconName: 'house' },
    ],
  },
};
