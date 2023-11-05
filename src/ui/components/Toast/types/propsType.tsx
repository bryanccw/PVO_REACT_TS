interface Toast {
  id: string;
  content: JSX.Element;
  timeout?: number;
  topPosition?: string;
}
/**
 * @deprecated timeout prop will be removed in future versions.
 */
interface Props {
  timeout?: number;
}

export type { Toast, Props };
