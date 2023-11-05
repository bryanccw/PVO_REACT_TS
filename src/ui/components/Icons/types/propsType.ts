import { IconName } from '@fortawesome/fontawesome-svg-core';
import { HTMLAttributes } from 'react';
import { Theme } from '../../types/enums';
import { IconStyle, Shade } from './enums';

export type IconTheme =
  | Theme.BLACK
  | Theme.WHITE
  | Theme.BLUE
  | Theme.PURPLE
  | Theme.GRAY
  | Theme.GREEN
  | Theme.ORANGE
  | Theme.RED
  | Theme.YELLOW
  | Theme.SUCCESS
  | Theme.WARNING
  | Theme.ERROR;

export interface FAIconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'icon'> {
  iconName: IconName;
  iconStyle?: IconStyle;
  theme?: IconTheme;
  shade?: Shade;
}
