import { render, cleanup } from '@testing-library/react';
import { FAIcon, Shade, IconStyle, FAIconProps } from './Icons';

const defaultProps: FAIconProps = { iconName: 'home' };
describe('Icon Component Test Cases', () => {
  afterEach(cleanup);
  test('Icon Component if shade is light', () => {
    const { container } = render(<FAIcon {...defaultProps} shade={Shade.LIGHT} />);
    expect(container.firstChild).toHaveClass(Shade.LIGHT);
  });

  test('Icon Component if icon name is passed', () => {
    const { container } = render(<FAIcon iconName={'home'} iconStyle={IconStyle.SOLID} />);
    expect(container.firstChild).toHaveClass(`fa-${IconStyle.SOLID}`);
  });
});
