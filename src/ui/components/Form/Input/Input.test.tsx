import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MLPVersion } from '../../';
import Input, { InputTypes } from './Input';
const defaultProps = {
  id: 'input-id',
  name: 'input-name',
  message: 'Message',
  className: '',
  disabled: false,
  readOnly: false,
};
describe('Input component', () => {
  afterEach(cleanup);
  test('Input component mounted with default mlpversion value', () => {
    const { getByTestId } = render(<Input name="input-name" />);
    const input = getByTestId('float-input-test-id');
    expect(input).toBeInTheDocument();
  });
  test('Input component if mlpversion set to one', () => {
    const { getByTestId } = render(<Input {...defaultProps} mlpVersion={MLPVersion.ONE} labelInfo="Info Tooltip" />);
    const inputLabel = getByTestId('input-test-id') as HTMLInputElement;
    expect(inputLabel).toBeInTheDocument();
  });
  test('Input component if maxLegth is 5 and type is number', async () => {
    const onInput = jest.fn();
    const inputNumber = '1234567890';
    const { container } = render(<Input {...defaultProps} type={InputTypes.NUMBER} maxLength={5} onInput={onInput} />);
    const input = container.querySelector('input') as HTMLInputElement;
    await userEvent.type(input, inputNumber);
    expect(onInput).toHaveBeenCalledTimes(5);
  });
  test('Input component if maxLegth is 5 and type is number without onInput', async () => {
    const inputNumber = '1234567890';
    const { container } = render(<Input {...defaultProps} type={InputTypes.NUMBER} maxLength={5} />);
    const input = container.querySelector('input') as HTMLInputElement;
    await userEvent.type(input, inputNumber);
    expect(input).toHaveDisplayValue('12345');
  });
  test('Input component if prefix is provided', async () => {
    const inputNumber = '1234567890';
    const { container } = render(<Input {...defaultProps} maxLength={5} prefix="something in prefix" />);
    const input = container.querySelector('input') as HTMLInputElement;
    await userEvent.type(input, inputNumber);
    expect(input).toHaveDisplayValue('12345');
  });
});
