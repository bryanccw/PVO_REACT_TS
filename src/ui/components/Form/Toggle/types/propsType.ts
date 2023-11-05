import { Theme } from '../../../';
import { ToggleStyle } from './enums';
import { IndividualTogglePropTypes } from './IndividualTogglePropTypes';
import { SwitchPropsTypes } from './SwitchProps';
import { TabProps } from './tabProps';

export type ToggleTheme =
  | Theme.PURPLE
  | Theme.BLUE
  | Theme.GREEN
  | Theme.RED
  | Theme.YELLOW
  | Theme.ORANGE
  | Theme.BLACK;
export interface BasicPropsTypes {
  className?: string;
  theme?: ToggleTheme;
  toggleStyle?: ToggleStyle;
}

export type TogglePropsTypes = TabProps | IndividualTogglePropTypes | SwitchPropsTypes;
