import { QuantityStepperType, QuantityStepperSize } from './enums';
export interface QuantityStepperPropType {
  id?: string;
  name?: string;
  count?: number;
  minCount?: number;
  maxCount?: number;
  type?: QuantityStepperType;
  size?: QuantityStepperSize;
  disabled?: boolean;
  disablePlusButton?: boolean;
  disableMinusButton?: boolean;
  ariaLabelledMinus?: string;
  ariaLabelledPlus?: string;
  inputChangeHandler?: (v: number) => number;
  minusClickHandler?: (v: number) => number;
  plusClickHandler?: (v: number) => number;
}
