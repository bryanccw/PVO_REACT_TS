import * as React from 'react';
import { render } from '@testing-library/react';
import TextLink, { TextLinkStyle } from './TextLink';

describe('Text link is rendered', () => {
  test('link component is present', () => {
    const { getByTestId } = render(<TextLink href="test" text="test" />);
    const anchorElement = getByTestId('textlink-test-id');
    expect(anchorElement).toBeInTheDocument();
  });
  test('link component with textLinkStyle = CHEVRONUNDERLINE', () => {
    const { getByTestId } = render(<TextLink href="test" text="test" textLinkStyle={TextLinkStyle.CHEVRONUNDERLINE} />);
    const anchorElement = getByTestId('textlink-test-id');
    expect(anchorElement).toHaveClass('fixed-underline');
  });
  test('link component with textLinkStyle = ICON', () => {
    const { container } = render(<TextLink href="test" text="test" textLinkStyle={TextLinkStyle.ICON} />);
    expect(container.firstChild?.firstChild).toHaveClass('default-icon');
  });
  test('link component with textLinkStyle = ICONUNDERLINE', () => {
    const { container } = render(<TextLink href="test" text="test" textLinkStyle={TextLinkStyle.ICONUNDERLINE} />);
    expect(container.firstChild?.firstChild).toHaveClass('default-icon');
  });
});
