import { render, cleanup } from '@testing-library/react';
import { IconStyle } from '../../';
import Button, { ButtonIconPosition, ButtonSize, ButtonStyles, ButtonWidth } from './Button';

const defaultProps = {};
describe('Button Component Test Cases', () => {
  afterEach(cleanup);
  test('Button Component mounted', () => {
    const { getByTestId } = render(<Button {...defaultProps} />);
    const button = getByTestId('button-test-id');
    expect(button).toBeInTheDocument();
  });
  test('Button Component if ButtonStyles is SOLID', () => {
    const { container } = render(<Button {...defaultProps} buttonStyle={ButtonStyles.SOLID} />);
    expect(container.firstChild).toHaveClass(ButtonStyles.SOLID);
  });
  test('Button Component if ButtonStyles is OUTLINE', () => {
    const { container } = render(<Button {...defaultProps} buttonStyle={ButtonStyles.OUTLINE} />);
    expect(container.firstChild).toHaveClass(ButtonStyles.OUTLINE);
  });
  test('Button Component if title passes', () => {
    const { getByTestId } = render(<Button {...defaultProps} title="Button Title" />);
    const button = getByTestId('button-test-id');
    expect(button).toHaveTextContent('Button Title');
  });
  test('Button component if disabled', () => {
    const { getByTestId } = render(<Button {...defaultProps} disabled />);
    const button = getByTestId('button-test-id');
    expect(button).toBeDisabled;
  });
  test('Button component if size is MEDIUM', () => {
    const { container } = render(<Button {...defaultProps} size={ButtonSize.MEDIUM} />);
    expect(container.firstChild).toHaveClass(ButtonSize.MEDIUM);
  });
  test('Button component if size is SMALL', () => {
    const { container } = render(<Button {...defaultProps} size={ButtonSize.SMALL} />);
    expect(container.firstChild).toHaveClass(ButtonSize.SMALL);
  });
  test('Button component if iconPosition is LEFT', () => {
    const { container } = render(
      <Button
        {...defaultProps}
        iconPosition={ButtonIconPosition.LEFT}
        icon={{ iconName: 'house', iconStyle: IconStyle.SOLID }}
      />,
    );
    expect(container.firstChild?.firstChild?.firstChild).toHaveClass('icon-left');
  });
  test('Button component if iconPosition is LEFT', () => {
    const { container } = render(
      <Button
        {...defaultProps}
        iconPosition={ButtonIconPosition.LEFT}
        icon={{ iconName: 'house', iconStyle: IconStyle.SOLID }}
      />,
    );
    expect(container.firstChild?.firstChild?.firstChild).toHaveClass('icon-left');
  });
  test('Button component if iconPosition is RIGHT', () => {
    const { container } = render(
      <Button
        {...defaultProps}
        iconPosition={ButtonIconPosition.RIGHT}
        icon={{ iconName: 'house', iconStyle: IconStyle.SOLID }}
      />,
    );
    expect(container.firstChild?.firstChild?.firstChild).toHaveClass('icon-right');
  });
  test('Button component full Width', () => {
    const { container } = render(<Button {...defaultProps} buttonWidth={ButtonWidth.FULL_WIDTH} />);
    expect(container.firstChild).toHaveClass(ButtonWidth.FULL_WIDTH);
  });
  test('Button component fit content', () => {
    const { container } = render(<Button {...defaultProps} buttonWidth={ButtonWidth.FIT_CONTENT} />);
    expect(container.firstChild).toHaveClass(ButtonWidth.FIT_CONTENT);
  });
  test('Button component without buttonWidth taking defaultProp', () => {
    const { container } = render(<Button {...defaultProps} />);
    expect(container.firstChild).toHaveClass(ButtonWidth.FIT_CONTENT);
  });
});
