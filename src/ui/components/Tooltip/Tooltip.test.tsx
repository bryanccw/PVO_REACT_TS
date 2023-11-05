import { render, fireEvent, cleanup } from '@testing-library/react';
import Tooltip, { TooltipPreference } from './Tooltip';
const defaultProps = {
  message: 'Some Important Breifing',
};
describe('Tooltip component works as a <Tooltip />', () => {
  afterEach(cleanup);
  Object.defineProperty(document, 'documentElement', {
    value: { clientWidth: 1500, clientHeight: 1800 },
  });
  test('Tooltip component mounted', () => {
    const { getByTestId } = render(<Tooltip {...defaultProps} />);
    const tooltip = getByTestId('tooltip-test-id');
    expect(tooltip).toBeInTheDocument();
  });
  test('Tooltip component has content on Mouse Hover', () => {
    const { getByTestId } = render(<Tooltip {...defaultProps} />);
    const tooltip = getByTestId('tooltip-test-id');
    const tooltipText = getByTestId('tooltip-message-test') as HTMLInputElement;
    fireEvent.mouseEnter(tooltip);
    expect(tooltipText).toBeVisible();
    expect(tooltipText).toHaveTextContent('Some Important Breifing');
  });
  test('Tooltip component if mouse leave ', () => {
    const { getByTestId } = render(<Tooltip {...defaultProps} preference={TooltipPreference.TOP_LEFT} />);
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseLeave(tooltip);
  });

  test('Tooltip component on BOTTOM_CENTER if Mouse Hover ', () => {
    const { getByTestId, container } = render(
      <div>
        <Tooltip {...defaultProps} preference={TooltipPreference.BOTTOM_CENTER} />
      </div>,
    );
    const tooltip = getByTestId('tooltip-test-id');
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 100,
      bottom: 100,
      left: 100,
      right: 100,
      width: 100,
      height: 100,
    });
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild?.firstChild).toHaveClass(TooltipPreference.BOTTOM_CENTER);
  });
  test('Tooltip component on BOTTOM_LEFT if Mouse Hover ', () => {
    const { getByTestId, container } = render(<Tooltip {...defaultProps} preference={TooltipPreference.BOTTOM_LEFT} />);
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 100,
      bottom: 100,
      left: 100,
      right: 100,
      width: 100,
      height: 100,
    });
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild).toHaveClass(TooltipPreference.BOTTOM_LEFT);
  });
  test('Tooltip component on RIGHT if Mouse Hover ', () => {
    const { getByTestId, container } = render(<Tooltip {...defaultProps} preference={TooltipPreference.RIGHT} />);
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 100,
      bottom: 100,
      left: 100,
      right: 100,
      width: 100,
      height: 100,
    });
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild).toHaveClass(TooltipPreference.RIGHT);
  });
  test('Tooltip component on LEFT even RIGHT is passed if Mouse Hover ', () => {
    const { getByTestId, container } = render(<Tooltip {...defaultProps} preference={TooltipPreference.RIGHT} />);
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 100,
      bottom: 100,
      left: 100,
      right: 0,
      width: 100,
      height: 100,
    });
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild).toHaveClass(TooltipPreference.LEFT);
  });
  test('Tooltip component on TOP_CENTER even RIGHT is passed if Mouse Hover ', () => {
    const { getByTestId, container } = render(<Tooltip {...defaultProps} preference={TooltipPreference.RIGHT} />);
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 100,
      bottom: 100,
      left: 0,
      right: 0,
      width: 100,
      height: 100,
    });
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild).toHaveClass(TooltipPreference.TOP_CENTER);
  });
  test('Tooltip component on BOTTOM_CENTER even RIGHT is passed if Mouse Hover ', () => {
    const { getByTestId, container } = render(<Tooltip {...defaultProps} preference={TooltipPreference.RIGHT} />);
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 0,
      bottom: 100,
      left: 0,
      right: 0,
      width: 100,
      height: 100,
    });
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild).toHaveClass(TooltipPreference.BOTTOM_CENTER);
  });
  test('Tooltip component on LEFT if Mouse Hover ', () => {
    const { getByTestId, container } = render(<Tooltip {...defaultProps} preference={TooltipPreference.LEFT} />);
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 100,
      bottom: 100,
      left: 100,
      right: 100,
      width: 100,
      height: 100,
    });
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild).toHaveClass(TooltipPreference.LEFT);
  });
  test('Tooltip component on RIGHT even LEFT is passed if Mouse Hover ', () => {
    const { getByTestId, container } = render(<Tooltip {...defaultProps} preference={TooltipPreference.LEFT} />);
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 100,
      bottom: 100,
      left: 0,
      right: 100,
      width: 100,
      height: 100,
    });
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild).toHaveClass(TooltipPreference.RIGHT);
  });
  test('Tooltip component on TOP_CENTER even LEFT is passed if Mouse Hover ', () => {
    const { getByTestId, container } = render(<Tooltip {...defaultProps} preference={TooltipPreference.LEFT} />);
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 100,
      bottom: 100,
      left: 0,
      right: 0,
      width: 100,
      height: 100,
    });
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild).toHaveClass(TooltipPreference.TOP_CENTER);
  });
  test('Tooltip component on BOTTOM_CENTER even LEFT is passed if Mouse Hover ', () => {
    const { getByTestId, container } = render(<Tooltip {...defaultProps} preference={TooltipPreference.LEFT} />);
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 0,
      bottom: 100,
      left: 0,
      right: 0,
      width: 100,
      height: 100,
    });
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild).toHaveClass(TooltipPreference.BOTTOM_CENTER);
  });
  test('Tooltip component on TOP_RIGHT if Mouse Hover ', () => {
    const { getByTestId, container } = render(<Tooltip {...defaultProps} preference={TooltipPreference.TOP_RIGHT} />);
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 100,
      bottom: 100,
      left: 100,
      right: 100,
      width: 100,
      height: 100,
    });
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild).toHaveClass(TooltipPreference.TOP_RIGHT);
  });
  test('Tooltip component on TOP_CENTER if Mouse Hover ', () => {
    const { getByTestId, container } = render(<Tooltip {...defaultProps} preference={TooltipPreference.TOP_CENTER} />);
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 100,
      bottom: 100,
      left: 100,
      right: 100,
      width: 100,
      height: 100,
    });
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild).toHaveClass(TooltipPreference.TOP_CENTER);
  });
  test('Tooltip component on LEFT if TOP_CENTER is passed on Mouse Hover ', () => {
    const { getByTestId, container } = render(<Tooltip {...defaultProps} preference={TooltipPreference.TOP_CENTER} />);
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 0,
      bottom: 0,
      left: 100,
      right: 0,
      width: 100,
      height: 100,
    });
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild).toHaveClass(TooltipPreference.LEFT);
  });
  test('Tooltip component on BOTTOM_CENTER if TOP_CENTER is passed on Mouse Hover ', () => {
    const { getByTestId, container } = render(<Tooltip {...defaultProps} preference={TooltipPreference.TOP_CENTER} />);
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 0,
      bottom: 100,
      left: 0,
      right: 0,
      width: 100,
      height: 100,
    });
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild).toHaveClass(TooltipPreference.BOTTOM_CENTER);
  });
  test('Tooltip component on BOTTOM_RIGHT if Mouse Hover ', () => {
    const { getByTestId, container } = render(
      <Tooltip {...defaultProps} preference={TooltipPreference.BOTTOM_RIGHT} />,
    );
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 100,
      bottom: 100,
      left: 100,
      right: 100,
      width: 100,
      height: 100,
    });
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild).toHaveClass(TooltipPreference.BOTTOM_RIGHT);
  });
  test('Tooltip component on RIGHT if BOTTOM_CENTER is passed on Mouse Hover ', () => {
    const { getByTestId, container } = render(
      <Tooltip {...defaultProps} preference={TooltipPreference.BOTTOM_CENTER} />,
    );
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 0,
      bottom: 0,
      left: 100,
      right: 100,
      width: 100,
      height: 100,
    });
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild).toHaveClass(TooltipPreference.RIGHT);
  });
  test('Tooltip component on LEFT if BOTTOM_CENTER is passed on Mouse Hover ', () => {
    const { getByTestId, container } = render(
      <Tooltip {...defaultProps} preference={TooltipPreference.BOTTOM_CENTER} />,
    );
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 0,
      bottom: 0,
      left: 100,
      right: 0,
      width: 100,
      height: 100,
    });
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild).toHaveClass(TooltipPreference.LEFT);
  });
  test('Tooltip component on TOP_CENTER if BOTTOM_CENTER is passed on Mouse Hover ', () => {
    const { getByTestId, container } = render(
      <Tooltip {...defaultProps} preference={TooltipPreference.BOTTOM_CENTER} />,
    );
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 100,
      bottom: 0,
      left: 0,
      right: 0,
      width: 100,
      height: 100,
    });
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild).toHaveClass(TooltipPreference.TOP_CENTER);
  });
  test('Tooltip component if wrong preference passed ', () => {
    const { getByTestId, container } = render(<Tooltip {...defaultProps} preference={TooltipPreference.TOP_LEFT} />);
    const ref = getByTestId('tooltip-text-body-testid');
    ref.getBoundingClientRect = jest.fn().mockReturnValue({
      top: 100,
      bottom: 100,
      left: 100,
      right: 100,
      width: 100,
      height: 100,
    });
    const tooltip = getByTestId('tooltip-test-id');
    fireEvent.mouseEnter(tooltip);
    expect(container.firstChild).toHaveClass(TooltipPreference.TOP_LEFT);
  });
  test('Tooltip component if className passed ', () => {
    const { container } = render(<Tooltip {...defaultProps} className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });
});
