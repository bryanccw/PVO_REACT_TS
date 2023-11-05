import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { Button, ButtonSize, Input, InputTypes, DropDown, BreakpointProvider, DropDownDataInterface } from '../';
import Modal from './Modal';
import { ButtonAlignment, TextAlign } from './types/enums';

export default {
  title: 'Components/Modal',
  component: Modal,
  decorators: [
    (Story, context) => {
      const args = context.args;
      return (
        <BreakpointProvider>
          <Story {...args} headline="Modal Headline" primaryButtonLabel="Primary" />
        </BreakpointProvider>
      );
    },
  ],
  argTypes: {
    headline: {
      description: 'Display headline on Modal',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    primaryButtonLabel: {
      description: 'Display primaryButtonLabel on Modal',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    secondaryButtonLabel: {
      description: 'Display secondaryButtonLabel on Modal',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    textLinkProps: {
      description: 'Display textLinkProps in textlink ',
      table: {
        type: {
          summary: 'object',
        },
      },
    },
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

    closeOnBackdropClick: {
      description: 'User wants  hide or show modal when lciking on backdrop',
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

    textAlign: {
      description: 'User align text accordingly',
      options: ['center', 'left'],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'left',
        },
      },
    },
    containerWidth: {
      description: 'to define the specific width of the modal container',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },

    onSecondaryButtonClick: {
      description: 'user onClick event on secondary button',
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
    onPrimaryButtonClick: {
      description: 'user onClick event on primary button',
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
    onClose: {
      description: 'user onClick on Close icon to close modal',
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
  },
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export const DefaultModal: Story = {
  decorators: [
    (Story, context) => {
      const args = context.args;

      const [modalState, setModalState] = React.useState('');
      const onPrimaryButtonClick = () => setModalState('Primary Button Clicked.');
      return (
        <BreakpointProvider>
          <Button
            title="Open Modal"
            size={ButtonSize.SMALL}
            onClick={() => setModalState('Open Modal button Clicked')}
            data-testid="open-modal-button"
          />
          <h4>
            <b>Note : </b>Button<i> Open Modal</i> is not part of
            <code> Modal </code>
            component.
          </h4>
          {modalState ? (
            <Modal
              {...args}
              headline="Modal Headline"
              primaryButtonLabel="Primary"
              onClose={() => setModalState('Close icon Clicked')}
              onPrimaryButtonClick={onPrimaryButtonClick}
            >
              <h3>{modalState}</h3>
            </Modal>
          ) : (
            <></>
          )}
        </BreakpointProvider>
      );
    },
  ],
  args: {
    headline: 'Modal Headline',
    textAlign: TextAlign.CENTER,
    closeOnBackdropClick: true,
    textLinkProps: {
      href: '#',
      text: 'Secondary',
    },
  },
};

export const ModalwithInputAndDropdown: Story = {
  args: {
    headline: 'Modal Headline',
    children: (
      <>
        <label htmlFor={'Field Label'}>Field Label </label>
        <Input type={InputTypes.TEXT} name="input box 1" placeholder="Text Field" />
        <DropDown
          name="dropdown-name"
          data={[
            { id: 1, name: 'Dropdown value 1' },
            { id: 2, name: 'Dropdown value 2' },
            { id: 3, name: 'Dropdown value 3' },
            { id: 4, name: 'Dropdown value 4' },
            { id: 5, name: 'Edge' },
          ]}
          configData={{
            label: 'name',
            onSelect: (e: DropDownDataInterface) => {
              typeof e['name'] === 'string';
            },
          }}
        />
      </>
    ),
    closeOnBackdropClick: true,
    textLinkProps: {
      href: '#',
      text: 'Secondary',
    },
  },
};

export const ModalWithSecondaryButton: Story = {
  args: {
    headline: 'Modal Headline',
    children: (
      <>
        'Modal body copy with FOUR OR MORE LINES of text. Modal body copy with FOUR OR MORE LINES of text. Modal body
        copy with FOUR OR MORE LINES…'
      </>
    ),
    secondaryButtonLabel: 'Secondary',
  },
};

export const ModalWithOnlyPrimaryButton: Story = {
  args: {
    headline: 'Modal Headline',
    closeOnBackdropClick: false,
    children: (
      <>
        'Modal body copy with FOUR OR MORE LINES of text. Modal body copy with FOUR OR MORE LINES of text. Modal body
        copy with FOUR OR MORE LINES…'
      </>
    ),
  },
};

export const ModalWithoutCloseIcon: Story = {
  args: {
    headline: 'Modal Headline',
    children: (
      <>
        <p>We suggest the following address instead:</p>
        <table>
          <tbody>
            <tr>
              <th>Street</th>
              <td>Enter Street</td>
            </tr>
            <tr>
              <th>City</th>
              <td>Enter City</td>
            </tr>
            <tr>
              <th>State</th>
              <td>Enter State</td>
            </tr>
            <tr>
              <th>Zip Code</th>
              <td>Enter Zip</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
    closeIcon: false,
  },
};

export const ModalWithCustomizedFooterButton: Story = {
  args: {
    headline: 'Modal Headline',
    children: (
      <>
        <p>We suggest the following address instead:</p>
        <table>
          <tbody>
            <tr>
              <th>Street</th>
              <td>Enter Street</td>
            </tr>
            <tr>
              <th>City</th>
              <td>Enter City</td>
            </tr>
            <tr>
              <th>State</th>
              <td>Enter State</td>
            </tr>
            <tr>
              <th>Zip Code</th>
              <td>Enter Zip</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
    primaryButton: <button>Primary Button</button>,
    secondaryButton: <button>Secondary Button</button>,
  },
};

export const ModalWithVerticalButtonAlignment: Story = {
  args: {
    headline: 'Modal Headline',
    children: (
      <>
        <p>We suggest the following address instead:</p>
        <table>
          <tbody>
            <tr>
              <th>Street</th>
              <td>Enter Street</td>
            </tr>
            <tr>
              <th>City</th>
              <td>Enter City</td>
            </tr>
            <tr>
              <th>State</th>
              <td>Enter State</td>
            </tr>
            <tr>
              <th>Zip Code</th>
              <td>Enter Zip</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
    primaryButtonLabel: 'Primary Button',
    secondaryButtonLabel: 'Secondary Button',
    buttonAlignment: ButtonAlignment.VERTICAL,
  },
};

export const ModalWithDifferentWidth: Story = {
  args: {
    headline: 'Modal Headline',
    closeOnBackdropClick: false,
    containerWidth: '900px',
    children: (
      <>
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum."
      </>
    ),
  },
};
