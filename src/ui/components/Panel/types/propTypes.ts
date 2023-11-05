import { ReactNode, MouseEvent, KeyboardEvent, TouchEvent } from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';

export type PanelIconSize = 'fa-xs' | 'fa-sm' | 'fa-lg' | 'fa-xl' | 'fa-2xl';

export interface PanelButtonProps {
  label?: string;
  onClick?: (e: KeyboardEvent | MouseEvent | TouchEvent) => void;
  disabled?: boolean;
  visible?: boolean;
}

export interface PanelHeaderProps {
  title: string;
  showIcon?: boolean;
  iconName?: IconName;
  iconSize?: PanelIconSize;
  showBackButton?: boolean;
  backButtonOnClick?: (e: KeyboardEvent | MouseEvent | TouchEvent) => void;
  customAction?: PanelButtonProps;
}

export interface PanelFooterProps {
  primaryButton?: PanelButtonProps | null;
  secondaryButton?: PanelButtonProps | null;
  visible?: boolean;
}

export interface PanelProps {
  header: PanelHeaderProps;
  footer?: PanelFooterProps;
  children: ReactNode | ReactNode[];
}
