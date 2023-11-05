import type { StoryObj, Meta } from '@storybook/react';
import TooltipComponent, { TooltipPreference } from './Tooltip';
const { LEFT, RIGHT, TOP_CENTER, TOP_LEFT, TOP_RIGHT, BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT } = TooltipPreference;

export default {
  title: 'Components/Tooltip',
  component: TooltipComponent,
  argTypes: {
    preference: {
      description: 'Preferred Location of tooltip.',
      options: [LEFT, RIGHT, TOP_CENTER, TOP_LEFT, TOP_RIGHT, BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: TOP_CENTER,
          detail:
            "The default value of the prefernce attribute is 'TOP_CENTER'. preferecnce doesn't confirm tooltip location, Its position on viewport changes with space.",
        },
      },
    },
    message: {
      description: 'Message to be display in tooltip',
    },
  },
} as Meta<typeof TooltipComponent>;

type Story = StoryObj<typeof TooltipComponent>;

const commonArgs = {};
export const Tooltip: Story = {
  args: {
    message: 'Add Content to tooltip',
    ...commonArgs,
  },
};
