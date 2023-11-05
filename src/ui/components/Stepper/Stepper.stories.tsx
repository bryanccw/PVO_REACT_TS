import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Stepper from './Stepper';

export default {
  title: 'Components/Stepper',
  component: Stepper,
  decorators: [(Story, context) => <Story {...context.args} label={`Step 1 of 4`} currentStep={1} totalSteps={4} />],
  argTypes: {},
} as Meta<typeof Stepper>;

type Story = StoryObj<typeof Stepper>;

const commonArgs = {
  currentStep: 1,
  totalSteps: 4,
};

export const BasicStepper: Story = {
  args: {
    ...commonArgs,
  },
};

export const BasicStepperWithHelper: Story = {
  args: {
    ...commonArgs,
    helperText: 'Helper Text',
  },
};
