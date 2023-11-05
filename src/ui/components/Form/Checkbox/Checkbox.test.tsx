import { useState } from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Theme } from '../../';
import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
  afterEach(cleanup);
  test('Checkbox component is mounted', () => {
    const { getByTestId } = render(<Checkbox text="Checkbox label" onChange={() => null} />);
    const checkbox = getByTestId('checkbox-container-test-id');
    expect(checkbox).toBeInTheDocument();
  });

  test('Checkbox component if disabled', () => {
    const { getByTestId } = render(<Checkbox text="Checkbox label" disabled />);
    const checkbox = getByTestId('checkbox-test-id');
    expect(checkbox).toBeDisabled;
  });
  test('Checkbox component if checked is true', () => {
    const Wrap = () => {
      const [isChecked, setIsChecked] = useState(false);
      return <Checkbox text="Checkbox label" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />;
    };
    const { container } = render(<Wrap />);
    const checkbox = container.querySelectorAll("input[type='checkbox']")[0] as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBeTruthy();
  });
  test('Checkbox component if theme is Black', () => {
    const { getByTestId } = render(<Checkbox text="Checkbox label" theme={Theme.BLACK} onChange={() => null} />);
    const checkbox = getByTestId('checkbox-container-test-id');
    expect(checkbox).toHaveClass(Theme.BLACK);
  });
});
