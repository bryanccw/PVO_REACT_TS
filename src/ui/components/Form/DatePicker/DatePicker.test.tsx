import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import BreakpointProvider from '../Breakpoint/BreakpointProvider';

import DatePicker from './DatePicker';

describe('DatePicker Component', () => {
  it('should render properly', () => {
    const { getByTestId } = render(<DatePicker />);
    expect(getByTestId('date-picker-container')).toBeInTheDocument();
  });

  it('should render placeholder properly', () => {
    const { container } = render(<DatePicker />);
    expect(container.querySelector('.placeholder-container')?.textContent).toBe('');
    const { container: container2 } = render(<DatePicker placeholder="Placeholder" />);
    expect(container2.querySelector('.placeholder-container')?.textContent).toBe('Placeholder');
  });

  it('should render cancel button properly', () => {
    const { container, getByTestId } = render(<DatePicker />);
    const input = getByTestId('input-container');
    fireEvent.click(input);
    expect(container.querySelector('.action-button')?.textContent).toBe('Cancel');
  });

  it('should render cancel button properly with custom label', () => {
    const { container, getByTestId } = render(<DatePicker cancelLabel="Custom Label" />);
    const input = getByTestId('input-container');
    fireEvent.click(input);
    expect(container.querySelector('.action-button')?.textContent).toBe('Custom Label');
  });

  it('should render schedule button properly', () => {
    const { container, getByTestId } = render(<DatePicker />);
    const input = getByTestId('input-container');
    fireEvent.click(input);
    expect(container.getElementsByClassName('action-button')[1].textContent).toBe('Schedule');
  });

  it('should render schedule button properly with custom label', () => {
    const { container, getByTestId } = render(<DatePicker scheduleLabel="Custom Label" />);
    const input = getByTestId('input-container');
    fireEvent.click(input);
    expect(container.getElementsByClassName('action-button')[1].textContent).toBe('Custom Label');
  });

  it('should not display time', () => {
    const date = new Date(2023, 2, 8, 1);
    const { container } = render(<DatePicker value={date} />);
    expect(container.querySelector('.placeholder-container')?.textContent?.includes('AM')).toBe(false);
  });

  it('should display time', () => {
    const date = new Date(2023, 2, 8, 1);
    const { container } = render(<DatePicker value={date} showTime />);
    expect(container.querySelector('.placeholder-container')?.textContent?.includes('AM')).toBe(true);
  });

  it('should not display calendar heading', () => {
    const { container, getByTestId } = render(<DatePicker />);
    const input = getByTestId('input-container');
    fireEvent.click(input);
    expect(container.getElementsByClassName('calendar-heading').length).toBe(0);
  });

  it('should display calendar heading', () => {
    const { container, getByTestId } = render(<DatePicker calendarHeading="Heading" />);
    const input = getByTestId('input-container');
    fireEvent.click(input);
    expect(container.getElementsByClassName('calendar-heading').length).toBe(1);
  });

  it('should not display description', () => {
    const { container, getByTestId } = render(<DatePicker />);
    const input = getByTestId('input-container');
    fireEvent.click(input);
    expect(container.getElementsByClassName('description-container').length).toBe(0);
  });

  it('should display description', () => {
    const { container, getByTestId } = render(<DatePicker description="Description" />);
    const input = getByTestId('input-container');
    fireEvent.click(input);
    expect(container.getElementsByClassName('description-container').length).toBe(1);
  });

  it('should not display input label', () => {
    const { container } = render(<DatePicker />);
    expect(container.getElementsByClassName('input-label').length).toBe(0);
  });

  it('should display input label', () => {
    const { container } = render(<DatePicker inputLabel="Label" />);
    expect(container.getElementsByClassName('input-label').length).toBe(1);
  });

  it('should show custom display text', () => {
    const { container } = render(<DatePicker displayText="Example" />);
    expect(container.querySelector('.placeholder-container')?.textContent).toBe('Example');
  });

  it('should shedule', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<DatePicker onChange={onChange} />);
    const input = getByTestId('input-container');
    fireEvent.click(input);
    const scheduleBtn = getByTestId('schedule-btn');
    fireEvent.click(scheduleBtn);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should shedule', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<DatePicker onChange={onChange} />);
    const input = getByTestId('input-container');
    fireEvent.click(input);
    const scheduleBtn = getByTestId('schedule-btn');
    fireEvent.click(scheduleBtn);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should fire onSelect', () => {
    const onSelect = jest.fn();
    const { container, getByTestId } = render(<DatePicker onSelect={onSelect} />);
    const input = getByTestId('input-container');
    fireEvent.click(input);
    const cell = container.querySelector('.selectable-cell');
    cell && fireEvent.click(cell);
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it('should open in Drawer for xs', () => {
    global.innerWidth = 374;
    global.dispatchEvent(new Event('resize'));
    const { container, getByTestId } = render(
      <BreakpointProvider>
        <DatePicker />
      </BreakpointProvider>,
    );
    const input = getByTestId('input-container');
    fireEvent.click(input);
    expect(container.getElementsByClassName('calendar-wrapper').length).toBe(1);
  });

  it('should open in Drawer for sm', () => {
    global.innerWidth = 376;
    global.dispatchEvent(new Event('resize'));
    const { container, getByTestId } = render(
      <BreakpointProvider>
        <DatePicker />
      </BreakpointProvider>,
    );
    const input = getByTestId('input-container');
    fireEvent.click(input);
    expect(container.getElementsByClassName('calendar-wrapper').length).toBe(1);
  });

  it('should open properly', () => {
    const onCalendarToggle = jest.fn();
    const { getByTestId } = render(<DatePicker onCalendarToggle={onCalendarToggle} />);
    const input = getByTestId('input-container');
    fireEvent.click(input);
    expect(onCalendarToggle).toHaveBeenCalledTimes(1);
  });
});
