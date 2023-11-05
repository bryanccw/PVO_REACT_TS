import * as React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { IconStyle, Theme } from '../../';
import Toggle, { ToggleStyle } from './Toggle';

describe('Toggle Component as SWITCH', () => {
  afterEach(cleanup);

  test('Toggle is Basic Switch', () => {
    const { container } = render(<Toggle toggleStyle={ToggleStyle.SWITCH} />);
    expect(container.firstChild?.firstChild).toHaveClass('switch');
  });
  test('Switch is disabled', () => {
    const { getByTestId } = render(<Toggle disabled />);
    const switchToogle = getByTestId('switch-test-id');
    expect(switchToogle).toBeDisabled;
  });
});
describe('Toggle Component as INDIVIDUAL', () => {
  afterEach(cleanup);
  test('Toggle is Individual', () => {
    const { container } = render(<Toggle toggleStyle={ToggleStyle.INDIVIDUAL} />);
    expect(container.firstChild?.firstChild).toHaveClass('individual-container');
  });
  test('Individual Toggle is disabled', () => {
    const { getByTestId } = render(<Toggle toggleStyle={ToggleStyle.INDIVIDUAL} disabled />);
    const individualToogle = getByTestId('individual-test-id');
    expect(individualToogle).toHaveClass('disabled');
  });
});
describe('Toggle Component as TABS', () => {
  test('Toggle is TABS', () => {
    const { container } = render(<Toggle toggleStyle={ToggleStyle.TABS} />);
    expect(container.firstChild?.firstChild).toHaveClass('tab-container');
  });
  test('Tab with tablist', () => {
    const onClick = jest.fn();
    const { container } = render(
      <Toggle toggleStyle={ToggleStyle.TABS} tabList={['Tab 1', 'Tab 2']} activeTab={1} onClick={onClick} />,
    );
    expect(container.firstChild?.firstChild?.firstChild).toHaveClass('active-tab');
  });
  test('Tab with onClick', () => {
    const onClick = jest.fn();
    const { getAllByTestId } = render(
      <Toggle toggleStyle={ToggleStyle.TABS} tabList={['Tab 1', 'Tab 2']} activeTab={1} onClick={onClick} />,
    );
    const element = getAllByTestId('tab-list-testid');
    fireEvent.click(element[0]);
    expect(onClick).toBeCalledTimes(1);
  });
  test('Tab with keydown', () => {
    const onClick = jest.fn();

    const { getAllByTestId } = render(
      <Toggle toggleStyle={ToggleStyle.TABS} tabList={['Tab 1', 'Tab 2']} activeTab={1} onClick={onClick} />,
    );
    const element = getAllByTestId('tab-list-testid');
    fireEvent.keyDown(element[0]);
    expect(onClick).toBeCalledTimes(1);
  });

  test('Tab with iconOnly', () => {
    const { container } = render(
      <Toggle
        toggleStyle={ToggleStyle.TABS}
        tabList={[
          { iconName: 'house', iconStyle: IconStyle.SOLID },
          { iconName: 'house', iconStyle: IconStyle.SOLID },
        ]}
        activeTab={1}
        iconOnly
        theme={Theme.PURPLE}
      />,
    );
    expect(container.firstChild?.firstChild?.firstChild).toHaveClass('active-tab');
  });
});
