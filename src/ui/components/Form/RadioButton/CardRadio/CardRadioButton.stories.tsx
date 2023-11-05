import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { MLPVersion, Theme, IconStyle } from '../../../';
import CardRadioButton, { RadioButtonAlignment } from './CardRadioButton';

const { PURPLE, BLUE, ORANGE, GREEN, RED, YELLOW, SUCCESS, WARNING, ERROR, BLACK, WHITE } = Theme;

export default {
  title: 'Components/Form/CardRadioButton',
  component: CardRadioButton,
  decorators: [
    (Story, context) => {
      const args = context.args;

      const [card, setCard] = React.useState(false);
      return <Story {...args} onClick={() => setCard(!card)} id="1" checked={card} />;
    },
  ],
  argTypes: {
    label: {
      description: 'Display text on radio button',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    className: {
      description: 'custom can be passed Class',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
          detail: 'User can select different className',
        },
      },
    },
    checked: {
      description: ' provides radio is selected or not',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    theme: {
      description: 'Select Listed Theme of the Radio button',
      control: { type: 'select' },
      options: [PURPLE, BLUE, ORANGE, GREEN, RED, YELLOW, SUCCESS, WARNING, ERROR, BLACK, WHITE],
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    name: {
      description: 'Name of the radio',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    id: {
      description: 'unique id to distinguish element on DOM.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    onChange: {
      description: 'Radio value change can be done or control',
      table: {
        type: {
          summary: 'function',
          detail: 'Requires callback function.',
        },
        defaultValue: {
          summary: '()=>{}',
        },
      },
    },
    disabled: {
      description: 'A disabled radio field is unusable and un-clickable.',
      table: {
        type: {
          summary: 'boolean',
          detail: 'Enabled RadioButton = false , Disabled RadioButton = true',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    cardDescription: {
      description: 'Display card description of radio button',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    divider: {
      description: 'A disabled dropdown field filter functionality.',
      table: {
        type: {
          summary: 'boolean',
          detail: 'Enabled dropdown = false , Disabled dropdown = true',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    mlpVersion: {
      description: 'MLP Version of dropdown',
      table: {
        type: {
          summary: 'number',
          detail: 'defines type of dropdown',
        },
        defaultValue: {
          summary: 2,
        },
      },
    },
    radioButtonAlignment: {
      description: 'Select Listed radioButton alignment of the Radio button',
      control: { type: 'select' },
      options: [RadioButtonAlignment.CENTER, RadioButtonAlignment.TOP],
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    icon: {
      description: 'User can pass icon from font-awesome library.',
    },
    image: {
      description: 'image src to display in cardRadioButton',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    swatchColor: {
      description: 'color code can be passed to display in cardRadioButton',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    value: {
      description: 'some text value to display in cardRadioButton',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
} as Meta<typeof CardRadioButton>;

type Story = StoryObj<typeof CardRadioButton>;

const commonArgs = {
  disabled: false,
  className: '',
  checked: true,
  mlpVersion: MLPVersion.TWO,
  radioButtonAlignment: RadioButtonAlignment.CENTER,
};

export const CardRadioButtonWithIcon: Story = {
  args: {
    ...commonArgs,
    label: 'Ground Delivery - FREE',
    icon: {
      iconName: 'truck',
      iconStyle: IconStyle.SOLID,
    },
    cardDescription: 'Estimated Delivery Date: 2-5 days',
    mlpVersion: MLPVersion.ONE,
  },
};

export const CardRadioButtonWithSwatch: Story = {
  args: {
    ...commonArgs,
    label: 'Available Color - #9C5457',
    swatchColor: '#9C5457',
    mlpVersion: MLPVersion.ONE,
  },
};

export const CardRadioButtonWithImage: Story = {
  args: {
    ...commonArgs,
    label: 'UPS - Standard rates apply',
    cardDescription: 'Estimated Delivery Date: 2-5 days',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTD3Gwd-OqqynWvORdyIcoLVM7uoX-OL38SLWS8a0P6wMWfhnkd',
    mlpVersion: MLPVersion.ONE,
  },
};

export const CardRadioButtonWithNone: Story = {
  args: {
    ...commonArgs,
    label: 'UPS - Standard rates apply',
    cardDescription: 'Estimated Delivery Date: 2-5 days',
    mlpVersion: MLPVersion.ONE,
    children: (
      <>
        <div>Props HTML Template</div>
      </>
    ),
    divider: true,
  },
};

export const CardRadioButtonWithTWOStyleAndSwatchColor: Story = {
  args: {
    ...commonArgs,
    label: 'Available Color - #9C5457',
    swatchColor: '#9C5457',
    mlpVersion: MLPVersion.TWO,
  },
};

export const CardRadioButtonWithVersionTWOStyleAndImage: Story = {
  args: {
    ...commonArgs,
    label: 'UPS - Standard rates apply',
    cardDescription: 'Estimated Delivery Date: 2-5 days',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTD3Gwd-OqqynWvORdyIcoLVM7uoX-OL38SLWS8a0P6wMWfhnkd',
    mlpVersion: MLPVersion.TWO,
  },
};

export const CardRadioButtonWithVersionTWOStyleAndIcon: Story = {
  args: {
    ...commonArgs,
    label: 'Ground Delivery - FREE',
    icon: {
      iconName: 'truck',
      iconStyle: IconStyle.SOLID,
    },
    cardDescription: 'Estimated Delivery Date: 2-5 days',
    mlpVersion: MLPVersion.TWO,
  },
};

export const CardRadioButtonWithVersionTWOStyleAndValue: Story = {
  args: {
    ...commonArgs,
    label: 'Ground Delivery - FREE',
    value: '$37.00',
    cardDescription: 'Estimated Delivery Date: 2-5 days',
    mlpVersion: MLPVersion.TWO,
  },
};

export const CardRadioButtonWithVersionTWOStyleAndValueWithPropsChildren: Story = {
  args: {
    ...commonArgs,
    label: 'Ground Delivery - FREE',
    value: '$37.00',
    cardDescription: 'Estimated Delivery Date: 2-5 days',
    mlpVersion: MLPVersion.TWO,
    children: (
      <>
        <div>Props HTML Template</div>
      </>
    ),
    divider: true,
  },
};

export const CardRadioButtonWithVersionTWOStyleAndNone: Story = {
  args: {
    ...commonArgs,
    label: 'UPS - Standard rates apply',
    cardDescription: 'Estimated Delivery Date: 2-5 days',
    mlpVersion: MLPVersion.TWO,
  },
};
