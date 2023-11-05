import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BreakpointProvider from '../Breakpoint/BreakpointProvider';
import Drawer from './Drawer';
import { DrawerDirections } from './types/enums';
jest.useFakeTimers();

describe('Drawer Component', () => {
  it('should open drawer component with body', () => {
    const { getByTestId } = render(
      <Drawer>
        <div>Drawer Body</div>
      </Drawer>,
    );
    const element = getByTestId('body-testid');
    expect(element).toBeInTheDocument();
  });
  it('should open drawer component with header and footer', () => {
    const { getByTestId } = render(
      <Drawer header={<div>Header</div>} footer={<div>Footer</div>} closeIcon={true} onClose={() => jest.fn()}>
        <div>Drawer Body</div>
      </Drawer>,
    );
    const element = getByTestId('header-testid');
    const closeIcon = getByTestId('close-icon-testid');
    expect(element).toBeInTheDocument();
    expect(closeIcon).toBeInTheDocument();
  });
  it('should close drawer on close click', () => {
    global.innerWidth = 374;
    global.dispatchEvent(new Event('resize'));
    const mockCloseCallback = jest.fn();
    const { getByTestId } = render(
      <BreakpointProvider>
        <Drawer header={<h2>Details</h2>} closeIcon={true} onClose={mockCloseCallback}>
          <div>Drawer Body</div>
        </Drawer>
      </BreakpointProvider>,
    );
    const element = getByTestId('base-testid');
    const span = getByTestId('close-icon-testid');
    fireEvent.click(span);
    expect(element).toBeInTheDocument();
    jest.runAllTimers();
    expect(mockCloseCallback).toHaveBeenCalledTimes(1);
  });
  it('should contain direction-right class on forced direction', () => {
    const { container } = render(<Drawer direction={DrawerDirections.RIGHT} />);
    expect(container.firstChild).toHaveClass(`direction-${DrawerDirections.RIGHT}`);
  });
  it('should contain direction-bottom class on forced direction', () => {
    const { container } = render(<Drawer direction={DrawerDirections.BOTTOM} />);
    expect(container.firstChild).toHaveClass(`direction-${DrawerDirections.BOTTOM}`);
  });
  it('when top handle is clicked', () => {
    const { container } = render(<Drawer />);
    container.firstChild?.firstChild && fireEvent.click(container.firstChild?.firstChild);
    expect(container.firstChild?.firstChild).toBeInTheDocument();
  });
  it('drawer should close when top handle is dragged down', () => {
    const onClose = jest.fn();
    const { container } = render(<Drawer onClose={onClose} />);
    container.firstChild?.firstChild && fireEvent.touchStart(container.firstChild?.firstChild);
    container.firstChild?.firstChild &&
      fireEvent.touchMove(container.firstChild?.firstChild, {
        changedTouches: [{ clientY: 0.8 * window.innerHeight }],
      });
    container.firstChild?.firstChild &&
      fireEvent.touchEnd(container.firstChild?.firstChild, { changedTouches: [{ clientY: 0.8 * window.innerHeight }] });
    jest.runAllTimers();
    expect(onClose).toBeCalled();
  });
  it('when backdrop is clicked', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Drawer onClose={onClose} closeOnBackdropClick />);
    const ele = getByTestId('backdrop-testid');
    expect(ele).toBeInTheDocument();
    fireEvent.click(ele);
    jest.runAllTimers();
    expect(onClose).toBeCalled();
  });
});
