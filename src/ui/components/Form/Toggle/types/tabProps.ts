import { IconPropInterface } from '../../../';
import { BasicPropsTypes } from './propsType';

export interface Data {
  index: number;
  value: string | IconPropInterface;
}

export interface TabProps extends BasicPropsTypes {
  onClick?: (data: Data) => void;
  activeTab?: number;
  tabList?: Array<string | IconPropInterface>;
  iconOnly?: boolean;
  className?: string;
}
