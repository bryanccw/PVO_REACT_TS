import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calendar from './Calendar';

describe('Calendar Component', () => {
  it('should render properly', () => {
    const { getByTestId } = render(<Calendar />);
    expect(getByTestId('calendar-container')).toBeInTheDocument();
  });
  it('should render with title', () => {
    const { getByTestId } = render(<Calendar calendarTitle="Payment Date" show4WeeksOnly />);
    expect(getByTestId('calendar-title-testid')).toBeInTheDocument();
  });

  it('should render without month container', () => {
    const { container } = render(<Calendar showFullCalendar={false} />);
    expect(container.getElementsByClassName('month-container').length).toBe(0);
  });

  it('should render time label properly', () => {
    const { container } = render(<Calendar showTime timeLabel="Custom Label" />);
    expect(container.querySelector('.time-label')?.textContent).toBe('Custom Label');
  });

  it('should render time label properly', () => {
    const { container } = render(<Calendar showTime />);
    expect(container.querySelector('.time-label')?.textContent).toBe('Select time');
  });

  it('should render start time label properly', () => {
    const { container } = render(<Calendar showTime selectRange={true} />);
    expect(container.querySelector('.time-label')?.textContent).toBe('Select time (start time)');
  });

  it('should render end time label properly', () => {
    const { container } = render(<Calendar showTime selectRange={true} />);
    expect(container.querySelectorAll('.time-label')[1].textContent).toBe('Select time (end time)');
  });

  it('should not render time container', () => {
    const { container } = render(<Calendar />);
    expect(container.getElementsByClassName('time-container').length).toBe(0);
    const { container: container2 } = render(<Calendar showFullCalendar={false} />);
    expect(container2.getElementsByClassName('time-container').length).toBe(0);
    const { container: container3 } = render(<Calendar showFullCalendar={false} showTime />);
    expect(container3.getElementsByClassName('time-container').length).toBe(0);
  });

  it('should render properly with current date', () => {
    const { container } = render(<Calendar />);
    const today = new Date();
    expect(container.querySelector('.selected-cell')?.textContent).toBe(`${today.getDate()}`);
  });

  it('should render properly with set date', () => {
    const date = new Date(2023, 2, 6);
    const { container } = render(<Calendar value={date} />);
    expect(container.querySelector('.selected-cell')?.textContent).toBe('6');
  });

  it('should render with correct number of rows', () => {
    const date = new Date(2023, 3, 1);
    const { container } = render(<Calendar value={date} />);
    expect(container.getElementsByClassName('date-row').length).toBe(7);
  });

  it('should render with correct number of rows', () => {
    const { container } = render(<Calendar showFullCalendar={false} />);
    expect(container.getElementsByClassName('date-row').length).toBe(5);
  });

  it('should render with disabled dates', () => {
    const today = new Date();
    const disabledDates = [new Date(today.getFullYear(), today.getMonth(), 1)];
    const { container } = render(<Calendar disabledDates={disabledDates} />);
    expect(container.getElementsByClassName('disabled-cell').length).not.toBe(0);
  });

  it('should select cell', () => {
    const onChange = jest.fn();
    const { container } = render(<Calendar onChange={onChange} />);
    const cell = container.querySelector('.selectable-cell');
    cell && fireEvent.click(cell);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should not select disabled date', () => {
    const disabledDates = [new Date()];
    const onChange = jest.fn();
    const { container } = render(<Calendar disabledDates={disabledDates} onChange={onChange} />);
    const cell = container.querySelector('disabled-cell');
    cell && fireEvent.click(cell);
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('should navigate to previous month', () => {
    const date = new Date(2023, 1);
    const onNavigate = jest.fn();
    const { getByTestId } = render(<Calendar onNavigate={onNavigate} value={date} />);
    const leftNavigation = getByTestId('navigation-left');
    fireEvent.click(leftNavigation);
    expect(onNavigate).toHaveBeenCalledTimes(1);
  });

  it('should navigate to previous year', () => {
    const date = new Date(2023, 0);
    const onNavigate = jest.fn();
    const { getByTestId } = render(<Calendar onNavigate={onNavigate} value={date} />);
    const leftNavigation = getByTestId('navigation-left');
    fireEvent.click(leftNavigation);
    expect(onNavigate).toHaveBeenCalledTimes(1);
  });

  it('should navigate to next month', () => {
    const date = new Date(2023, 10);
    const onNavigate = jest.fn();
    const { getByTestId } = render(<Calendar onNavigate={onNavigate} value={date} />);
    const rightNavigation = getByTestId('navigation-right');
    fireEvent.click(rightNavigation);
    expect(onNavigate).toHaveBeenCalledTimes(1);
  });

  it('should navigate to next year', () => {
    const date = new Date(2023, 11);
    const onNavigate = jest.fn();
    const { getByTestId } = render(<Calendar onNavigate={onNavigate} value={date} />);
    const rightNavigation = getByTestId('navigation-right');
    fireEvent.click(rightNavigation);
    expect(onNavigate).toHaveBeenCalledTimes(1);
  });

  it('select am properly', () => {
    const onChange = jest.fn();
    const { getAllByTestId } = render(<Calendar showTime onChange={onChange} />);
    const dropdownlist = getAllByTestId('dropdown-li-element');
    fireEvent.click(dropdownlist[0]);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('select pm properly', () => {
    const onChange = jest.fn();
    const { getAllByTestId } = render(<Calendar showTime onChange={onChange} />);
    const dropdownlist = getAllByTestId('dropdown-li-element');
    fireEvent.click(dropdownlist[dropdownlist.length - 1]);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('Date have keydown event', () => {
    const onChange = jest.fn();
    const { getAllByTestId } = render(<Calendar showTime onChange={onChange} />);
    const weekSpanElement = getAllByTestId('week-span-testid');
    fireEvent.keyDown(weekSpanElement[0]);
    fireEvent.mouseOver(weekSpanElement[0]);
    fireEvent.focus(weekSpanElement[0]);
    expect(weekSpanElement[0]).toBeInTheDocument();
  });
  it('When time is selected by onClick', () => {
    const onChange = jest.fn();
    const { getAllByTestId } = render(<Calendar showTime onChange={onChange} showFullCalendar selectRange />);
    const dropdownlist = getAllByTestId('dropdown-li-element');
    fireEvent.click(dropdownlist[dropdownlist.length - 2]);
    expect(dropdownlist[0]).toBeInTheDocument();
  });
});
