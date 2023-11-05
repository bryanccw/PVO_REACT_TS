import type { StoryObj, Meta } from '@storybook/react';
import QuantityStepperComponent from './QuantityStepper';
import { QuantityStepperType, QuantityStepperSize } from './types/enums';

const { SMALL, MEDIUM } = QuantityStepperSize;
export default {
  title: 'Components/Form/QuantityStepper',
  component: QuantityStepperComponent,
  argTypes: {
    count: {
      description: 'value of count',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 0,
        },
      },
    },
    maxCount: {
      description: 'Maximum value of count.',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 999,
        },
      },
    },
    type: {
      description: 'Display type of stepper.',
      table: {
        type: {
          summary: 'QuantityStepperType',
        },
        defaultValue: {
          summary: QuantityStepperType.OUTLINED,
        },
      },
    },
    size: {
      description: 'To give size to stepper either small or medium',
      options: [SMALL, MEDIUM],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: SMALL,
        },
      },
    },
    disabled: {
      description: 'show in disabled form.',
      table: {
        type: {
          summary: 'Boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    disableMinusButton: {
      description: 'disable only minus button',
      table: {
        type: {
          summary: 'Boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    disablePlusButton: {
      description: 'disable only plus button',
      table: {
        type: {
          summary: 'Boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    inputChangeHandler: {
      description: 'callback for input change',
      table: {
        type: {
          summary: 'Function',
        },
        defaultValue: {
          summary: () => 0,
        },
      },
    },
    minusClickHandler: {
      description: 'callback for minus button click',
      table: {
        type: {
          summary: 'Function',
        },
        defaultValue: {
          summary: () => 0,
        },
      },
    },
    plusClickHandler: {
      description: 'callback for plus button click',
      table: {
        type: {
          summary: 'Function',
        },
        defaultValue: {
          summary: () => 0,
        },
      },
    },
  },
} as Meta<typeof QuantityStepperComponent>;

type Story = StoryObj<typeof QuantityStepperComponent>;

export const QuantityStepper: Story = {
  args: {
    maxCount: 10,
    count: 10,
    size: SMALL,
  },
};

export const QuantityStepperWithCustomValueInput: Story = {
  args: {
    maxCount: 10,
    count: 0,
    size: SMALL,
  },
};

export const QuantityStepperDefaultWithCount: Story = {
  args: {
    maxCount: 10,
    count: 7,
    size: SMALL,
  },
};

export const QuantityStepperFilled: Story = {
  args: {
    maxCount: 10,
    type: QuantityStepperType.FILLED,
    size: SMALL,
  },
};

export const QuantityStepperOutlinedDisabled: Story = {
  args: {
    maxCount: 10,
    type: QuantityStepperType.OUTLINED,
    disabled: true,
    size: SMALL,
  },
};

export const QuantityStepperFilledDisabled: Story = {
  args: {
    maxCount: 10,
    type: QuantityStepperType.FILLED,
    disabled: true,
    size: SMALL,
  },
};

export const QuantityStepperMinusDisabled: Story = {
  args: {
    maxCount: 0,
    type: QuantityStepperType.FILLED,
    disabled: false,
    disableMinusButton: true,
    size: SMALL,
  },
};

export const QuantityStepperPlusDisabled: Story = {
  args: {
    maxCount: 10,
    type: QuantityStepperType.FILLED,
    disabled: false,
    disablePlusButton: true,
    size: SMALL,
  },
};
