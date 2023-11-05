import * as React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import QuantityStepper from './QuantityStepper';
import { QuantityStepperType, QuantityStepperSize } from './types/enums';

describe('QuantityStepper Test cases', () => {
  afterEach(cleanup);
  test('QuantityStepper Component is Mounted', () => {
    const { getByTestId } = render(<QuantityStepper maxCount={5} />);
    const stepper = getByTestId('quantity-stepper');
    expect(stepper).toBeInTheDocument();
  });

  test('QuantityStepper Component is shown as outlined', () => {
    const { container } = render(<QuantityStepper maxCount={5} type={QuantityStepperType.OUTLINED} />);
    expect(container.firstChild).toHaveClass(QuantityStepperType.OUTLINED);
  });

  test('QuantityStepper Component is shown as Filled', () => {
    const { container } = render(<QuantityStepper maxCount={5} type={QuantityStepperType.FILLED} />);
    expect(container.firstChild).toHaveClass(QuantityStepperType.FILLED);
  });

  test('QuantityStepper component if size is MEDIUM', () => {
    const { container } = render(<QuantityStepper maxCount={5} size={QuantityStepperSize.MEDIUM} />);
    expect(container.firstChild).toHaveClass(QuantityStepperSize.MEDIUM);
  });

  test('QuantityStepper component if size is SMALL', () => {
    const { container } = render(<QuantityStepper maxCount={5} size={QuantityStepperSize.SMALL} />);
    expect(container.firstChild).toHaveClass(QuantityStepperSize.SMALL);
  });

  test('QuantityStepper Component should default to 0', () => {
    const { getByTestId } = render(<QuantityStepper maxCount={5} type={QuantityStepperType.FILLED} />);
    const quantity = getByTestId('quantity-value');
    expect(quantity).toHaveValue(0);
  });

  test('QuantityStepper Component should add 1 to count', () => {
    const { getByTestId } = render(<QuantityStepper maxCount={5} type={QuantityStepperType.FILLED} />);
    const plus = getByTestId('plus');
    const quantity = getByTestId('quantity-value');
    fireEvent.click(plus);
    expect(quantity).toHaveValue(1);
  });

  test('QuantityStepper Component should subtract 1 to count', () => {
    const { getByTestId } = render(<QuantityStepper maxCount={5} type={QuantityStepperType.FILLED} />);
    const plus = getByTestId('plus');
    const minus = getByTestId('minus');
    const quantity = getByTestId('quantity-value');
    fireEvent.click(plus);
    fireEvent.click(minus);
    fireEvent.keyDown(plus);
    fireEvent.keyDown(minus);
    expect(quantity).toHaveValue(0);
  });

  test('QuantityStepper Component should not go less then 0', () => {
    const { getByTestId } = render(<QuantityStepper maxCount={5} type={QuantityStepperType.FILLED} />);
    const minus = getByTestId('minus');
    const quantity = getByTestId('quantity-value');
    fireEvent.click(minus);
    expect(quantity).toHaveValue(0);
  });
  test('QuantityStepper Component should have value', () => {
    const { getByTestId } = render(<QuantityStepper maxCount={5} minCount={1} type={QuantityStepperType.FILLED} />);
    const quantity = getByTestId('quantity-value');
    fireEvent.change(quantity, { target: { value: 4 } });
    expect(quantity).toHaveValue(4);
  });

  test('QuantityStepper Component should not go more then maxCount', () => {
    const { getByTestId } = render(<QuantityStepper maxCount={5} type={QuantityStepperType.FILLED} />);
    const plus = getByTestId('plus');
    const quantity = getByTestId('quantity-value');
    fireEvent.click(plus);
    fireEvent.click(plus);
    fireEvent.click(plus);
    fireEvent.click(plus);
    fireEvent.click(plus);
    fireEvent.click(plus);
    fireEvent.click(plus);
    fireEvent.click(plus);
    expect(quantity).toHaveValue(5);
  });
});
