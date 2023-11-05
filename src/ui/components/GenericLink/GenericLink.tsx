import { useContext, forwardRef } from 'react';
import { Anchor, LinkContext, LinkProvider } from './LinkProvider';
import { GenericLinkProps } from './types/propsTypes';

const GenericLink = forwardRef<HTMLAnchorElement, GenericLinkProps>(
  ({ forceNative = false, forwardedRef, ...restProps }: GenericLinkProps, ref) => {
    const NextJsLink = useContext(LinkContext);
    return (
      <>
        {forceNative ? (
          <Anchor {...restProps} ref={ref || forwardedRef} />
        ) : NextJsLink ? (
          <NextJsLink {...restProps} ref={ref || forwardedRef} />
        ) : (
          ''
        )}
      </>
    );
  },
);
GenericLink.displayName = 'GenericLink';

export { GenericLink, LinkProvider };
export type { GenericLinkProps };
export default GenericLink;
