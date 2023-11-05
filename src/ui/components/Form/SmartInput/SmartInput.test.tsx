import { useState } from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import SmartInput, { InputType } from './SmartInput';

const commonArgs = {
  dropdownLabel: 'Country',
  // onChange: () => null,
  disabledFilter: true,
};
describe('SmartInputComponent', () => {
  afterEach(cleanup);
  test('It should contain input component for Email', () => {
    const onInputChange = jest.fn();
    const { getByTestId } = render(
      <SmartInput
        name="smartInput-element"
        smartInputType={InputType.EMAIL}
        inputValue="a"
        {...commonArgs}
        onInputChange={onInputChange}
      />,
    );
    const emailInput = getByTestId('input-email');
    waitFor(() => {
      fireEvent.change(emailInput, { target: { value: 'a@b.com' } });
    });
    expect(onInputChange).toBeCalled();
  });

  test('It should contain input component for mobile', () => {
    const onInputChange = jest.fn();

    const { getByTestId } = render(
      <SmartInput
        name="smartInput-element"
        smartInputType={InputType.MOBILE}
        inputValue="12"
        {...commonArgs}
        onInputChange={onInputChange}
      />,
    );
    const mobileInput = getByTestId('input-number');
    waitFor(() => {
      fireEvent.change(mobileInput, { target: { value: 'a@b.com' } });
    });
    expect(onInputChange).toBeCalled();
  });

  test('It should contain input component for Email and mobile', () => {
    const { getByTestId } = render(<SmartInput inputValue="1a" {...commonArgs} />);
    const emailInput = getByTestId('input-email');
    expect(emailInput).toBeInTheDocument();
  });

  test('Smart input with digit value', () => {
    const { getByTestId } = render(<SmartInput {...commonArgs} inputValue="21" onChange={() => null} />);
    const emailInput = getByTestId('input-number');
    expect(emailInput).toBeInTheDocument();
  });

  test('Smart input without input value', () => {
    const { getByTestId } = render(<SmartInput {...commonArgs} />);
    const emailInput = getByTestId('default-smart-input');
    expect(emailInput).toBeInTheDocument();
  });

  test('Smart input change from default to mobile input', () => {
    const MockComp = () => {
      const [value, setValue] = useState('');

      return (
        <SmartInput
          {...commonArgs}
          inputValue={value}
          onInputChange={inputValue => {
            setValue(inputValue as string);
          }}
        />
      );
    };
    const { getByTestId } = render(<MockComp />);
    const emailInput = getByTestId('default-smart-input');
    expect(emailInput).toBeInTheDocument();
    waitFor(() => {
      fireEvent.change(emailInput, { target: { value: '12' } });
    });
  });
});
