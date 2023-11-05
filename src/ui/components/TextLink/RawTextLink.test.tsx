import * as React from 'react';
import { render } from '@testing-library/react';
import { Theme, IconPropInterface, IconStyle } from '../';
import RawTextLink from './RawTextLink';
import { TextLinkUnderlineStyle, TextLinkIconPosition } from './types/enums';
const { LEFT, RIGHT } = TextLinkIconPosition;

const icon: IconPropInterface = {
  iconName: 'house',
  iconStyle: IconStyle.SOLID,
};
describe('Raw Text link component works as a link', () => {
  test('link component is present', () => {
    const { getByTestId } = render(<RawTextLink href="test" text="test" />);
    const anchorElement = getByTestId('textlink-test-id');
    expect(anchorElement).toBeInTheDocument();
  });

  test('link component has name & href property defiened ', () => {
    const { container } = render(<RawTextLink href="test" text="test" />);
    expect(container.firstChild?.firstChild).toHaveAttribute('href', 'test');
  });
});

describe('Raw Text link component props show class properties', () => {
  test('link is visible', () => {
    const { getByTestId } = render(<RawTextLink href="test" text="test" />);
    const anchorElement = getByTestId('textlink-test-id');
    expect(anchorElement).toHaveClass('text-link');
  });

  test('link has underline class', () => {
    const { getByTestId } = render(<RawTextLink href="test" text="test" underline={TextLinkUnderlineStyle.FIXED} />);
    const anchorElement = getByTestId('textlink-test-id');
    expect(anchorElement).toHaveClass('fixed-underline');
  });

  test('link has color theme', () => {
    const { getByTestId } = render(<RawTextLink href="test" text="test" theme={Theme.PURPLE} />);

    const anchorElement = getByTestId('textlink-test-id');

    expect(anchorElement).toHaveClass('theme-purple');
  });

  test('link is disabled', () => {
    const { getByTestId } = render(<RawTextLink href="test" text="test" disabled={true} />);
    const anchorElement = getByTestId('textlink-test-id');
    expect(anchorElement).toHaveClass('disabled');
  });
});

describe('Raw Text link component icon checks', () => {
  test('link has a icon', () => {
    render(<RawTextLink href="test" text="test" iconPosition={LEFT} icon={icon} />);
    expect(document.querySelector('.fa-house')).toBeInTheDocument();
  });

  test('link has an icon and is aligned right', () => {
    render(<RawTextLink href="test" text="test" icon={icon} iconPosition={RIGHT} />);
    expect(document.querySelector('.icon-right')).toBeInTheDocument();
  });

  test('link has an icon and is aligned left', () => {
    render(<RawTextLink href="test" text="test" icon={icon} iconPosition={LEFT} />);
    expect(document.querySelector('.icon-left')).toBeInTheDocument();
  });
});
