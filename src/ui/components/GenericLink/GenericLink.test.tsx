import { render } from '@testing-library/react';
import { Anchor, LinkProvider } from './LinkProvider';
import { GenericLink } from './GenericLink';

describe('Link component', () => {
  test('should create Anchor element by default', () => {
    const { getByRole } = render(<GenericLink href="/abc">Link</GenericLink>);
    expect(getByRole('link')).toHaveAttribute('href', '/abc');
  });

  test('should create Anchor element if forcenative true', () => {
    const { getByRole } = render(
      <GenericLink href="/abc" forceNative={true}>
        Link
      </GenericLink>,
    );
    expect(getByRole('link')).toHaveAttribute('href', '/abc');
  });
  test('should open link in custom element if forcenative false', () => {
    const { queryByRole } = render(
      <LinkProvider element={Anchor}>
        <GenericLink href="/test" forceNative={false}>
          ANchorLink
        </GenericLink>
      </LinkProvider>,
    );
    expect(queryByRole('link')).toHaveAttribute('href', '/test');
  });
});
