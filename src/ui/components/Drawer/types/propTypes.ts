import { ReactNode, MouseEvent, KeyboardEvent, TouchEvent } from 'react';
import { DrawerDirections } from './enums';

export interface DrawerPropsTypes {
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode | ReactNode[];
  className?: string;
  closeIcon?: boolean;
  closeOnBackdropClick?: boolean;
  onClose?: (e: KeyboardEvent | MouseEvent | TouchEvent) => void;
  bottomGap?: number;
  drawerWidth?: string;
  direction?: DrawerDirections;
}
