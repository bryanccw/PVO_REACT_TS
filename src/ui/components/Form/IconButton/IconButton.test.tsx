import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import { Theme, IconStyle } from '../../';
import IconButton, { IconButtonProps } from './IconButton';

const defaultProps: IconButtonProps = { iconName: 'download', iconStyle: IconStyle.SOLID };
describe('IconButton Component Test Cases', () => {
  afterEach(cleanup);

  it('Having all props in IconButton', () => {
    const mockCloseCallback = jest.fn();
    const { container } = render(
      <IconButton
        {...defaultProps}
        disabled={false}
        iconWithBorder={true}
        theme={Theme.BLACK}
        onClick={mockCloseCallback}
      />,
    );
    expect(container.firstChild).not.toHaveClass('disabled-icon');
    expect(container.firstChild).not.toHaveClass('theme-white');
    expect(container.firstChild).toHaveClass('border-icon');
  });

  it('onclick on icon button', () => {
    const mockCloseCallback = jest.fn();
    const { getByTestId } = render(<IconButton {...defaultProps} onClick={mockCloseCallback} />);
    fireEvent.click(getByTestId('icon-button-test-id'));
    expect(mockCloseCallback).toHaveBeenCalledTimes(1);
  });

  it('Having disabled icon', () => {
    const { container } = render(<IconButton {...defaultProps} disabled={true} />);
    screen.debug();
    expect(container.firstChild).toHaveClass('disabled-icon');
  });

  it('Having iconwithborder=true', () => {
    const { container } = render(<IconButton {...defaultProps} iconWithBorder={true} />);
    expect(container.firstChild).toHaveClass('border-icon');
  });

  it('Having icon with theme', () => {
    const { container } = render(<IconButton {...defaultProps} theme={Theme.WHITE} />);
    expect(container.firstChild).toHaveClass('theme-white');
  });
});
