import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Button, { ButtonSize } from '../Form/Button/Button';
import Drawer, { DrawerDirections } from './Drawer';
const { BOTTOM, FULLHEIGHT, RIGHT } = DrawerDirections;

export default {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    closeIcon: {
      description: 'User can hide or show close icon ',
      table: {
        type: {
          summary: 'boolean',
          detail: 'Display closeIcon = true , Hide closeIcon = false',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    onClose: {
      description: 'onClick event on Close icon to close drawer',
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
    closeOnBackdropClick: {
      description: 'User wants hide or show drawer when clicked on backdrop. Check Console to see on close message',
      table: {
        type: {
          summary: 'boolean',
          detail: 'Display closeOnBackdropClick = true , Hide closeOnBackdropClick = false',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    header: {
      description: 'Header JSX element',
      table: {
        type: {
          summary: 'JSX',
        },
      },
    },
    footer: {
      description: 'Footer JSX element',
      table: {
        type: {
          summary: 'JSX',
        },
      },
    },
    className: {
      description: 'className to give style, applies to root element of component',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    bottomGap: {
      description: 'Margin space at the bottom',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 68,
        },
      },
    },
    drawerWidth: {
      description: 'Width of the drawer',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    direction: {
      description: 'Drawer direction in the page',
      control: { type: 'select' },
      option: [BOTTOM, FULLHEIGHT, RIGHT],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 68,
        },
      },
    },
    children: {
      description: 'User can pass Drawer Body',
      defaultValue: {},
    },
  },
} as Meta<typeof Drawer>;

type Story = StoryObj<typeof Drawer>;

export const InteractiveComponent: Story = {
  decorators: [
    (Story, context) => {
      const args = context.args;

      const [isOpen, setIsOpen] = React.useState({ state: false, text: '' });
      return (
        <>
          <Button
            title="Open Drawer"
            size={ButtonSize.SMALL}
            onClick={() => setIsOpen({ state: true, text: 'Open Drawer Button Clicked.' })}
            data-testid="open-drawer-button"
          />
          <h4>
            <b>Note : </b>Button<i> Open Drawer</i> is not part of <code>Drawer</code> component.
          </h4>
          <h3>{isOpen.text}</h3>
          {isOpen.state ? (
            <Drawer {...args} onClose={() => setIsOpen({ state: false, text: 'Close icon clicked.' })} />
          ) : (
            <></>
          )}
        </>
      );
    },
  ],
  args: {
    header: <div>Product Details</div>,
    footer: (
      <>
        <Button title="Cancel" size={ButtonSize.SMALL} />
        <Button title="Apply" size={ButtonSize.SMALL} />
      </>
    ),
    closeIcon: true,
    children: <div>This drawer is used to display data. It is having diffrent view on mobile and desktop</div>,
  },
};

export const BackDropDrawer: Story = {
  args: {
    header: <div>Product Details</div>,
    footer: (
      <div>
        <h4>Footer</h4>
      </div>
    ),
    closeIcon: true,
    closeOnBackdropClick: true,
    children: <div>This drawer is used to display data. It is having diffrent view on mobile and desktop </div>,
  },
};

export const BasicDrawer: Story = {
  args: {
    closeIcon: true,
    closeOnBackdropClick: true,
    children: (
      <div>
        This drawer is used to display data. It is having diffrent view on mobile and desktop. This drawer is used to
        display data. It is having diffrent view on mobile and desktop This drawer is used to display data. It is having
        diffrent view on mobile and desktop This drawer is used to display data. It is having diffrent view on mobile
        and desktop This drawer is used to display data. It is having diffrent view on mobile and desktop
      </div>
    ),
  },
};

export const FullHeightDrawer: Story = {
  args: {
    closeIcon: true,
    closeOnBackdropClick: true,
    direction: DrawerDirections.FULLHEIGHT,
    bottomGap: 0,
    header: <div>Details</div>,
    children: (
      <div>
        This drawer is used to display data. It is having diffrent view on mobile and desktop. This drawer is used to
        display data. It is having diffrent view on mobile and desktop This drawer is used to display data. It is having
        diffrent view on mobile and desktop This drawer is used to display data. It is having diffrent view on mobile
        and desktop This drawer is used to display data. It is having diffrent view on mobile and desktop
      </div>
    ),
  },
};
