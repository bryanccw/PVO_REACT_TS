import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Shade, IconStyle } from '../Icons/Icons';
interface IconPropInterface {
  shade?: Shade;
  iconStyle?: IconStyle;
  iconName: IconName;
}
interface BaseComponentProps {
  className?: string;
  id?: string;
}
export type { IconPropInterface, BaseComponentProps };
