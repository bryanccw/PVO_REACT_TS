import { render } from '@testing-library/react';
import { Anchor, LinkProvider } from './LinkProvider';
import { GenericLink } from './GenericLink';

describe('Link Provider component', () => {
  test('should have anchor in document if provider have custom element', () => {
    const { getByRole } = render(
      <LinkProvider element={Anchor}>
        <GenericLink href="/test" forceNative={false}>
          Link
        </GenericLink>
      </LinkProvider>,
    );
    expect(getByRole('link')).toBeInTheDocument();
  });
});
