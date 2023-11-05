import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import BreakpointProvider, { useBreakpoint, ViewPortSizes } from './BreakpointProvider';
import { Breakpoints } from './types/enums';
describe('BreakpointProvider Test Case', () => {
  afterEach(cleanup);

  const Comp = () => {
    const viewPortType = useBreakpoint();
    return (
      <div style={{ height: 100, width: 300 }} data-testid="breakpoint-test-id">
        {viewPortType}
      </div>
    );
  };
  const BreakpointComp = () => (
    <BreakpointProvider>
      <Comp />
    </BreakpointProvider>
  );
  test('BreakpointProvider is mounted with component', () => {
    const { getByTestId } = render(<BreakpointComp />);
    const breakpoint = getByTestId('breakpoint-test-id');
    expect(breakpoint).toBeInTheDocument;
  });
  test('ViewPortSizes is EXTRA SMALL', () => {
    global.innerWidth = ViewPortSizes.SMALL - 1;
    global.dispatchEvent(new Event('resize'));
    const { getByTestId } = render(<BreakpointComp />);
    const breakpoint = getByTestId('breakpoint-test-id');
    expect(breakpoint.innerHTML).toBe(Breakpoints.XS);
  });
  test('ViewPortSizes is SMALL', () => {
    global.innerWidth = ViewPortSizes.SMALL;
    global.dispatchEvent(new Event('resize'));
    const { getByTestId } = render(<BreakpointComp />);
    const breakpoint = getByTestId('breakpoint-test-id');
    expect(breakpoint.innerHTML).toBe(Breakpoints.SM);
  });
  test('ViewPortSizes is MEDIUM', () => {
    global.innerWidth = ViewPortSizes.MEDIUM;
    global.dispatchEvent(new Event('resize'));
    const { getByTestId } = render(<BreakpointComp />);
    const breakpoint = getByTestId('breakpoint-test-id');
    expect(breakpoint.innerHTML).toBe(Breakpoints.MD);
  });
  test('ViewPortSizes is LARGE', () => {
    global.innerWidth = 1200;
    global.dispatchEvent(new Event('resize'));
    const { getByTestId } = render(<BreakpointComp />);
    const breakpoint = getByTestId('breakpoint-test-id');
    expect(breakpoint.innerHTML).toBe(Breakpoints.LG);
  });
  test('ViewPortSizes is EXTRA LARGE', () => {
    global.innerWidth = ViewPortSizes.XLARGE;
    global.dispatchEvent(new Event('resize'));
    const { getByTestId } = render(<BreakpointComp />);
    const breakpoint = getByTestId('breakpoint-test-id');
    expect(breakpoint.innerHTML).toBe(Breakpoints.XL);
  });
  test('ViewPortSizes is XTRA SMALL when innerWidth 0', () => {
    global.innerWidth = 0;
    global.dispatchEvent(new Event('resize'));
    const { getByTestId } = render(<BreakpointComp />);
    const breakpoint = getByTestId('breakpoint-test-id');
    expect(breakpoint.innerHTML).toBe(Breakpoints.XS);
  });
});
