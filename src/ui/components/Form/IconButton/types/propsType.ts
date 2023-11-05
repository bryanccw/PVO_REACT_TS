import { KeyboardEvent as ReactKeyboardEvent, MouseEvent as ReactMouseEvent } from 'react';
import { Theme, FAIconProps } from '../../../';

export type IconButtonTheme = Theme.WHITE | Theme.BLACK | Theme.PURPLE;
export interface IconButtonProps extends Omit<FAIconProps, 'theme'> {
  theme?: IconButtonTheme;
  disabled?: boolean;
  iconWithBorder?: boolean;
  containerClassName?: string;
  ariaLabelledBy?: string;
  onClick?: (e: ReactKeyboardEvent | ReactMouseEvent) => void;
}
