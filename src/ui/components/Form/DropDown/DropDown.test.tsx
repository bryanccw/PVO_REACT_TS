import { render, cleanup } from '@testing-library/react';
import { MLPVersion } from '../../';
import DropDown from './DropDown';

describe('dropdown Component Test Cases', () => {
  afterEach(cleanup);
  test('dropdown Component mounted', () => {
    const { getByTestId } = render(<DropDown name="dropdown-name" />);
    const dropdown = getByTestId('dropdown-wrapper-test-id');
    expect(dropdown).toBeInTheDocument();
  });

  test('dropdown MLP1 within modal Component', () => {
    const { getByTestId } = render(<DropDown mlpVersion={MLPVersion.ONE} isWithinModal={true} name="dropdown-name" />);
    const dropdown = getByTestId('dropdown-ref-test-id');
    expect(dropdown.className.trim()).toBe('dropdown-container-modal');
  });

  test('dropdown MLP1 default class `dropdown-container`', () => {
    const { getByTestId } = render(<DropDown mlpVersion={MLPVersion.ONE} name="dropdown-name" />);
    const dropdown = getByTestId('dropdown-ref-test-id');
    expect(dropdown.className.trim()).toBe('dropdown-container');
  });

  test('dropdown Multi Selection', () => {
    const { getByTestId } = render(<DropDown multiSelection name="dropdown-name" />);
    const dropdown = getByTestId('dropdown-ref-text-id');
    expect(dropdown.className.trim()).toBe('dropdown-container');
  });

  test('dropdown MLP2 within modal Component', () => {
    const { getByTestId } = render(<DropDown isWithinModal={true} name="dropdown-name" />);
    const dropdown = getByTestId('dropdown-ref-test-id');
    expect(dropdown.className.trim()).toBe('mlp-2-dropdown-modal');
  });

  test('dropdown MLP2 default class `mlp-2-dropdown`', () => {
    const { getByTestId } = render(<DropDown name="dropdown-name" />);
    const dropdown = getByTestId('dropdown-ref-test-id');
    expect(dropdown.className.trim()).toBe('mlp-2-dropdown');
  });

  test('dropdown Component mounted with MLPVersion ONE', () => {
    const { container } = render(<DropDown name="dropdown-name" mlpVersion={MLPVersion.ONE} />);
    expect(container.firstChild?.firstChild).toHaveClass('dropdown-container');
  });
  test('dropdown Component mounted with MLPVersion ONE', () => {
    const { container } = render(<DropDown name="dropdown-name" mlpVersion={MLPVersion.ONE} />);
    expect(container.firstChild?.firstChild).toHaveClass('dropdown-container');
  });
});
