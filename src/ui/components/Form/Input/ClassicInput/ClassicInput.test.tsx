import { render, fireEvent, cleanup } from '@testing-library/react';
import { InputValidations } from '../Input';
import ClassicInput from './ClassicInput';

const defaultProps = {
  id: 'input-id',
  name: 'input-name',
  message: 'Message',
  className: '',
  labelInfo: 'Info Tooltip',
  disabled: false,
  readOnly: false,
  label: 'label data',
};

describe('Classic Input component', () => {
  afterEach(cleanup);
  test('Input component should be mounted', () => {
    const { getByTestId } = render(<ClassicInput name="input-name" />);
    const input = getByTestId('input-test-id');
    expect(input).toBeInTheDocument();
  });
  test('Input component has value and onChange event', () => {
    const { getByTestId } = render(<ClassicInput name="input-name" />);
    const input = getByTestId('input-test-id') as HTMLInputElement;
    fireEvent.change(input, {
      target: { value: 'input text value' },
    });
    expect(input).toHaveValue('input text value');
  });
  test('Input component if labeled', () => {
    const { getByTestId } = render(<ClassicInput {...defaultProps} />);
    const inputLabel = getByTestId('input-label-text-test') as HTMLSpanElement;
    expect(inputLabel).toHaveTextContent('label data');
  });
  test('Input component if disabled', () => {
    const { getByTestId } = render(<ClassicInput {...defaultProps} disabled />);
    const input = getByTestId('input-test-id') as HTMLInputElement;
    expect(input).toBeDisabled;
  });
  test('Input component if readonly', () => {
    const { getByTestId } = render(<ClassicInput {...defaultProps} readOnly={true} />);
    const input = getByTestId('input-test-id') as HTMLInputElement;
    expect(input.hasAttribute('readonly') === true).toBeTruthy();
  });
  test('Input component if onClear passed', () => {
    const onClear = jest.fn();
    const { getByTestId } = render(<ClassicInput {...defaultProps} onClear={onClear} />);
    const inputIcon = getByTestId('input-icon-test-id') as HTMLInputElement;
    fireEvent.click(inputIcon);
    expect(onClear).toHaveBeenCalledTimes(1);
  });
  test('Input component if status is VALID', () => {
    const { container } = render(<ClassicInput {...defaultProps} status={InputValidations.VALID} />);
    expect(container.firstChild).toHaveClass('input-validated-valid');
  });
  test('Input component if status is INVALID', () => {
    const { container } = render(<ClassicInput {...defaultProps} status={InputValidations.INVALID} />);
    expect(container.firstChild).toHaveClass('input-validated-invalid');
  });
});
