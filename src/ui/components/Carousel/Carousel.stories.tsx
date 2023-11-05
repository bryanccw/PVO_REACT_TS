import React, { useEffect, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import CarouselComponent from './Carousel';
import { GUTTER_SIZE_PX } from './types/enums';

const { SMALL, MEDIUM, LARGE, EXTRA_LARGE } = GUTTER_SIZE_PX;

export default {
  title: 'Components/Carousel',
  component: CarouselComponent,
  argTypes: {
    hideButtons: {
      description: 'Show/Hide left right navigation buttons.',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    hideDots: {
      description: 'Show/Hide dots under the slides.',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    isAutoScrollEnable: {
      description: 'Enable/Disable automatic scrolling',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    isTileCarousel: {
      description: 'Enable/Disable tile view of carousel',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    gutterSize: {
      description: 'Size of tiles if carousel is given isTileCarousel true',
      control: { type: 'select' },
      options: [SMALL, MEDIUM, LARGE, EXTRA_LARGE],
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: MEDIUM,
        },
      },
    },
    noOfScrollSecs: {
      description: 'No. of secs for auto scrolling',
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 5,
        },
      },
    },
    pauseOnMouseOver: {
      description: 'Enable/Disable Pause On Mouse (only applicable for Auto scroll set to true) ',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    isDotInside: {
      description: 'Whether to display dot inside or outside of slide.',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    isInfiniteScroll: {
      description: 'Enable/Disable infinite scrolling.',
      control: { type: 'boolean' },
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
} as Meta<typeof CarouselComponent>;

const getProd = (): Promise<Array<React.ReactNode>> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(
        [...new Array(16)].map((e, i) => (
          <div
            key={`slide${+i}`}
            style={{
              minHeight: '487px',
              minWidth: '244px',
              backgroundColor: '#9e5e0e',
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {i + 1}
          </div>
        )),
      );
    }, 2000);
  });

type Story = StoryObj<typeof CarouselComponent>;

export const CardComponent: Story = {
  decorators: [
    (Story, context) => {
      const args = context.args;

      const [prod, setProd] = useState<Array<React.ReactNode>>(
        [...new Array(8)].map((e, i) => (
          <div
            key={`slide${+i}`}
            style={{
              minHeight: '487px',
              minWidth: '244px',
              backgroundColor: '#9e5e0e',
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {i + 1}
          </div>
        )),
      );
      useEffect(() => {
        setTimeout(() => {
          getProd().then((d: Array<React.ReactNode>) => setProd(d));
        }, 2000);
      }, []);

      args.children = prod;
      return <Story {...args} />;
    },
  ],
  args: {
    isTileCarousel: true,
  },
};

export const CardComponentWithOutDelay: Story = {
  decorators: [
    (Story, context) => {
      const args = context.args;

      return <Story {...args} />;
    },
  ],
  args: {
    isTileCarousel: true,
    children: [...new Array(8)].map((e, i) => (
      <div
        key={`slide${+i}`}
        style={{
          minHeight: '487px',
          minWidth: '244px',
          backgroundColor: '#9e5e0e',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {i + 1}
      </div>
    )),
  },
};

export const SingleImageComponent: Story = {
  decorators: [
    (Story, context) => {
      const args = context.args;

      return (
        <div style={{ position: 'relative' }}>
          <Story {...args} />
        </div>
      );
    },
  ],
  args: {
    isTileCarousel: false,
    children: (
      <>
        <div
          style={{
            width: '100vw',
          }}
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
            alt="Canyon at Nigh"
            style={{
              width: '100%',
            }}
          />
        </div>
        <div
          style={{
            width: '100vw',
          }}
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
            alt="Sunset Over the City"
            style={{
              width: '100%',
            }}
          />
        </div>
        <div
          style={{
            width: '100vw',
          }}
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
            alt="Sunset Over the City"
            style={{
              width: '100%',
            }}
          />
        </div>
      </>
    ),
  },
};
