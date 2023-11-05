import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import type { PanelProps } from './types/propTypes';
import PanelComponent from './Panel';

const store = configureStore({
  reducer: {
    // [profileSlice.name]: profileSlice.reducer,
  },
  devTools: true,
});

export default {
  title: 'Components/Panel',
  component: PanelComponent,
  decorators: [
    Story => (
      <Provider store={store}>
        <div style={{ position: 'fixed', top: '0px', bottom: '0px', left: '0px', right: '0px' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
} as Meta<typeof PanelComponent>;

type Story = StoryObj<typeof PanelComponent>;

export const Panel: Story = {
  args: {
    header: {
      title: 'Panel Title',
      showIcon: true,
      iconName: 'circle-exclamation',
      backButtonOnClick: (e: React.MouseEvent) => {
        // eslint-disable-next-line
        console.log('Back Click', e);
      },
      customAction: {
        label: 'Delete',
        onClick: (e: React.MouseEvent) => {
          // eslint-disable-next-line
          console.log('Custom Click', e);
        },
        visible: true,
      },
    },
    children: <div style={{ height: '900px', backgroundColor: '#f0f0f0' }}>Content</div>,
    footer: {
      visible: true,
      primaryButton: {
        label: 'Save',
        onClick: (e: React.MouseEvent) => {
          // eslint-disable-next-line
          console.log('Primary Click', e);
        },
        visible: true,
      },
      secondaryButton: {
        label: 'Cancel',
        onClick: (e: React.MouseEvent) => {
          // eslint-disable-next-line
          console.log('Primary Click', e);
        },
        visible: true,
      },
    },
  } as PanelProps,
};

// edxport default {

//   args: {
//     header: {
//       title: 'Panel Title',
//       showIcon: true,
//       iconName: 'circle-exclamation',
//       backButtonOnClick: (e: React.MouseEvent) => {
//         // eslint-disable-next-line
//         console.log('Back Click', e);
//       },
//       customAction: {
//         label: 'Delete',
//         onClick: (e: React.MouseEvent) => {
//           // eslint-disable-next-line
//           console.log('Custom Click', e);
//         },
//         visible: true,
//       },
//     },
//     children: <div style={{ height: '900px', backgroundColor: '#f0f0f0' }}>Content</div>,
//     footer: {
//       visible: true,
//       primaryButton: {
//         label: 'Save',
//         onClick: (e: React.MouseEvent) => {
//           // eslint-disable-next-line
//           console.log('Primary Click', e);
//         },
//         visible: true,
//       },
//       secondaryButton: {
//         label: 'Cancel',
//         onClick: (e: React.MouseEvent) => {
//           // eslint-disable-next-line
//           console.log('Primary Click', e);
//         },
//         visible: true,
//       },
//     },
//   } as PanelProps,
// } as ComponentMeta<typeof Panel>;

// const PanelDefault: ComponentStory<typeof Panel> = (vals) => (
//   <Provider store={store}>
//     <div style={{ position: 'fixed', top: '0px', bottom: '0px', left: '0px', right: '0px' }}>
//       <Panel {...vals} />
//     </div>
//   </Provider>
// );

// export const PanelComp = PanelDefault.bind({});
// PanelComp.story = {
//   name: 'Panel',
//   parameters: {
//     design: {
//       type: 'figma',
//     },
//   },
// };
