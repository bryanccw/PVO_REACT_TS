import { KeyboardEvent as ReactKeyboardEvent, MouseEvent as ReactMouseEvent } from 'react';
import { CheckboxPropsTypes, TextLinkPropsTypes } from '../../';
import { TextAlign, ButtonAlignment } from './enums';
export type ModalPropsTypes = {
  headline: string;
  children?: JSX.Element;
  primaryButtonLabel: string;
  secondaryButtonLabel?: string;
  className?: string;
  closeIcon?: boolean;
  textLinkProps?: TextLinkPropsTypes;
  checkBox?: CheckboxPropsTypes;
  textAlign?: TextAlign;
  closeOnBackdropClick?: boolean;
  primaryButton?: JSX.Element;
  secondaryButton?: JSX.Element;
  buttonAlignment?: ButtonAlignment;
  containerWidth?: string;
  onSecondaryButtonClick?: (e: ReactKeyboardEvent | ReactMouseEvent) => void;
  onPrimaryButtonClick?: (e: ReactKeyboardEvent | ReactMouseEvent) => void;
  onClose?: (e: ReactKeyboardEvent | ReactMouseEvent) => void;
};