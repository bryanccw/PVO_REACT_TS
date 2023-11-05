import { IconName } from '@fortawesome/fontawesome-svg-core';
import { ButtonHTMLAttributes, KeyboardEvent as ReactKeyboardEvent, MouseEvent as ReactMouseEvent } from 'react';
import { IconPropInterface, Theme, IconStyle, Shade } from '../../../';
import { PillStyle, PillType } from './enums';
interface RightIcon {
  iconName: IconName;
  iconStyle?: IconStyle;
  shade?: Shade;
}
export type PillTheme =
  | Theme.SUCCESS
  | Theme.WARNING
  | Theme.ERROR
  | Theme.BLACK
  | Theme.WHITE
  | Theme.PURPLE
  | Theme.BLUE
  | Theme.GREEN
  | Theme.RED
  | Theme.YELLOW
  | Theme.ORANGE;
export interface PillProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconPropInterface;
  title?: string;
  colorCode?: string;
  imgSrc?: string;
  rightIcon?: RightIcon;
  theme?: PillTheme;
  className?: string;
  disabled?: boolean;
  selected?: boolean;
  pillStyle?: PillStyle;
  pillType?: PillType;
  ariaLabelledBy?: string;
  onPillClick?: (e: ReactKeyboardEvent | ReactMouseEvent) => void;
}

export type PillPropTypes = Omit<PillProps, 'onClick'>;
