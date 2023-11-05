import { ReactNode, ElementType, AnchorHTMLAttributes, ForwardedRef } from 'react';

export interface AnchorPropInterface extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
}
interface LinkProviderInterface {
  element: ElementType;
  children: ReactNode;
}

interface GenericLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  prefetch?: boolean;
  locale?: string;
  forceNative?: boolean;
  /**
   * @param legacyBehavior
   * @description false:- to show anchor tag with next link, true:- to pass value to child element.
   */
  legacyBehavior?: boolean;
  forwardedRef?: ForwardedRef<HTMLAnchorElement>;
}

export type { LinkProviderInterface, GenericLinkProps };
