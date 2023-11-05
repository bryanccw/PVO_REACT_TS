import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Theme } from '../../';
import RadioButton from './RadioButton';
describe('RadioButton Test cases', () => {
  afterEach(cleanup);
  test('RadioButton is Mounted', () => {
    const { getByTestId } = render(<RadioButton onChange={jest.fn()} />);
    const radioButton = getByTestId('radio-test-id');
    expect(radioButton).toBeInTheDocument();
  });
  test('RadioButton if label passed', () => {
    const { container } = render(<RadioButton label="Add to label" onChange={jest.fn()} />);
    expect(container.lastChild).toHaveTextContent('Add to label');
  });
  test('RadioButton if Theme passed is red', () => {
    const { container } = render(<RadioButton theme={Theme.RED} onChange={jest.fn()} />);
    expect(container.firstChild).toHaveClass(Theme.RED);
  });
  test('RadioButton if Theme passed is purple and label', () => {
    const { container } = render(<RadioButton theme={Theme.PURPLE} label="Add to label" onChange={jest.fn()} />);
    expect(container.firstChild).toHaveClass(Theme.PURPLE);
    expect(container.lastChild).toHaveTextContent('Add to label');
  });
  test('RadioButton component if disabled', () => {
    const { getByTestId } = render(<RadioButton disabled onChange={jest.fn()} />);
    const radioButton = getByTestId('radio-test-id');
    expect(radioButton).toBeDisabled;
  });
});
