import { render, fireEvent, cleanup } from '@testing-library/react';
import { InputValidations } from '../';
import PhoneNumber, { InputTypes } from './PhoneNumber';

const commonArgs = {
  dropdownLabel: 'Country',
  inputLabel: 'Phone Number',
  disabledFilter: true,
};
describe('PhoneNumberComponent', () => {
  const mockData = [
    { value: '+1', label: 'US' },
    { value: '+44', label: 'UK' },
    { value: '+91', label: 'India' },
  ];
  const mockConfigData = {
    label: '',
    onSelect: () => null,
  };

  afterEach(cleanup);
  test('It should contain input with floating label', () => {
    const { container, getByTestId } = render(
      <PhoneNumber dropdownDisabled name="phoneNumber-element" {...commonArgs} />,
    );
    const input = container.querySelector('.float-input-field');
    fireEvent.change(getByTestId('input-number'), {
      target: { value: 'new value' },
    });
    expect(input).toBeInTheDocument();
  });

  test('It should contain dropdown with floating label', () => {
    const { container } = render(
      <PhoneNumber inputDisabled name="phoneNumber" onInputChange={() => null} onChange={() => null} {...commonArgs} />,
    );
    const dropDown = container.querySelector('.mlp-2-dropdown');
    expect(dropDown).toBeInTheDocument();
  });

  test('Render with valid prop', () => {
    const message = 'this is message';
    const { getByTestId } = render(
      <PhoneNumber name="phoneNumber" message={message} status={InputValidations.VALID} {...commonArgs} />,
    );
    const messageContainer = getByTestId('phone-number-message');
    expect(messageContainer).toBeInTheDocument();
  });

  test('Render with invalid prop', () => {
    const message = 'this is message';
    const { getByTestId } = render(
      <PhoneNumber name="phoneNumber" message={message} status={InputValidations.INVALID} {...commonArgs} />,
    );
    const messageContainer = getByTestId('phone-number-message');
    expect(messageContainer).toBeInTheDocument();
  });

  test('renders component with default props', () => {
    const { container, getByTestId } = render(
      <PhoneNumber name="phoneNumber-element" message="This is message" {...commonArgs} />,
    );
    const dropDown = container.querySelector('.mlp-2-dropdown');
    const inputNumber = getByTestId('input-number');

    expect(dropDown).toBeInTheDocument();
    expect(inputNumber).toBeInTheDocument();
    expect(inputNumber).not.toBeDisabled();
  });

  test('renders component with all props', () => {
    const { getByTestId } = render(
      <PhoneNumber
        name="phoneNumber-element"
        dropdownValue="+44"
        dropdownDisabled={true}
        data={mockData}
        configData={mockConfigData}
        inputType={InputTypes.NUMBER}
        inputValue="1234567890"
        inputDisabled={true}
        {...commonArgs}
      />,
    );
    const phoneContainer = getByTestId('phone-container');
    const dropDown = getByTestId('number-dropDown');
    const inputNumber = getByTestId('input-number');
    expect(phoneContainer).toHaveClass('disabled');
    expect(dropDown).toHaveAttribute('disabled');
    expect(dropDown).toHaveValue('+44');
    expect(inputNumber).toBeDisabled();
    expect(inputNumber).toHaveValue('1234567890');
  });

  test('calls onInputChange function when input value changes', () => {
    const handleInputChange = jest.fn();
    const { getByTestId } = render(
      <PhoneNumber
        name="phoneNumber"
        onInputChange={handleInputChange}
        onChange={handleInputChange}
        dropdownValue="+91"
        {...commonArgs}
      />,
    );
    const inputNumber = getByTestId('input-number');
    fireEvent.change(inputNumber, { target: { value: '1' } });
    fireEvent.mouseEnter(inputNumber);
    fireEvent.blur(inputNumber);
    fireEvent.mouseLeave(inputNumber);
    expect(handleInputChange).toHaveBeenCalledTimes(1);
  });
});
