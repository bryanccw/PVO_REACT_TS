import { forwardRef, createElement, createContext, ElementType } from 'react';
import { AnchorPropInterface, LinkProviderInterface } from './types/propsTypes';

const Anchor = forwardRef<HTMLAnchorElement, AnchorPropInterface>(
  ({ children, ...restProps }: AnchorPropInterface, ref) => createElement('a', { ...restProps, ref: ref }, children),
);
Anchor.displayName = 'Anchor';

const LinkContext = createContext<ElementType>(Anchor);

const LinkProvider = ({ element, children }: LinkProviderInterface) => (
  <LinkContext.Provider value={element}>{children}</LinkContext.Provider>
);

export { LinkProvider, Anchor, LinkContext };
