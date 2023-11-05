import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import BreakpointProvider, { useBreakpoint } from '../Breakpoint/BreakpointProvider';

export default {
  title: 'Components/BreakpointProvider',
  component: BreakpointProvider,
  decorators: [Story => <Story />],
  argTypes: {},
} as Meta<typeof BreakpointProvider>;

const Viewport = () => {
  const viewPortType = useBreakpoint();
  return (
    <>
      <div>Viewport Type</div>
      <div>{viewPortType}</div>
    </>
  );
};

type Story = StoryObj<typeof BreakpointProvider>;

export const Defult: Story = {
  name: 'BreakpointProvider',
  args: {
    children: <Viewport />,
  },
};
