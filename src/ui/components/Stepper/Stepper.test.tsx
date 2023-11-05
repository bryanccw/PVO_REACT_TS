import { render, cleanup } from '@testing-library/react';
import Stepper from './Stepper';
describe('Stepper component works as a <Stepper />', () => {
  afterEach(cleanup);
  test('Stepper component mounted', () => {
    const { getByTestId } = render(<Stepper label={`Step 1 of 5`} currentStep={1} totalSteps={5} />);
    const stepper = getByTestId('stepper');
    expect(stepper).toBeInTheDocument();
  });

  test('Stepper progress bar with label', () => {
    const { getByTestId } = render(<Stepper label={`Step 1 of 5`} currentStep={1} totalSteps={5} />);
    const label = getByTestId('label');
    expect(label).toBeInTheDocument();
  });

  test('Stepper progress bar', () => {
    const { getByTestId } = render(<Stepper label={`Step 1 of 5`} currentStep={1} totalSteps={5} />);
    const progress = getByTestId('progress');
    expect(progress).toBeInTheDocument();
  });

  test('Stepper progress bar should contain helper label', () => {
    const { getByTestId } = render(
      <Stepper label={`Step 1 of 5`} currentStep={1} totalSteps={5} helperText={'HelperText'} />,
    );
    const progress = getByTestId('helper-text');
    expect(progress).toBeInTheDocument();
  });
});
