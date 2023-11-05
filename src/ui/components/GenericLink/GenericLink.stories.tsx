import React from 'react';
// import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import GenericLink, { LinkProvider } from './GenericLink';
import { Anchor } from './LinkProvider';

export default {
  title: 'Components/GenericLink',
  component: GenericLink,
  argTypes: {
    children: {
      description: 'JSX element to be displayed as link.',
    },
    href: {
      description: 'pass URL to be navigated by link',
      type: 'string',
    },
    forceNative: {
      type: 'boolean',
      description:
        'if true then anchor will be created and url pass to the anchor else custom element would be created (Nextjs Link) and url pass to the custom element',
      defaultValue: false,
    },
    legacyBehavior: {
      type: 'boolean',
      description:
        'if true then anchor will be created and url pass to the anchor else custom element would be created (Nextjs Link) and url pass to the custom element',
      defaultValue: false,
    },
    prefetch: {
      type: 'boolean',
      description:
        'if true then anchor will be created and url pass to the anchor else custom element would be created (Nextjs Link) and url pass to the custom element',
      defaultValue: false,
    },
    locale: {
      type: 'string',
      description:
        'if true then anchor will be created and url pass to the anchor else custom element would be created (Nextjs Link) and url pass to the custom element',
      defaultValue: '',
    },
  },
} as Meta<typeof GenericLink>;

type Story = StoryObj<typeof GenericLink>;
type StoryProvider = StoryObj<typeof LinkProvider>;

export const Default: Story = {
  decorators: [
    (Story, context) => {
      const args = context.args;
      const ref = React.useRef<HTMLAnchorElement>(null);
      return (
        <>
          <GenericLink {...args} ref={ref} />
        </>
      );
    },
  ],
  args: {
    children: <>Input link</>,
    href: '?path=/story/components-input--text-field',
  },
};

export const LinkWithCustomElement: StoryProvider = {
  decorators: [
    (Story, context) => {
      const args = context.args;
      return (
        <LinkProvider element={args.element}>
          <GenericLink {...args} />
        </LinkProvider>
      );
    },
  ],
  args: {
    children: <>Force Native link</>,
    href: '?path=/story/components-input--text-field',
    forceNative: false,
    element: Anchor,
  },
};
