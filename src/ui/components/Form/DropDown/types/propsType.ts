import { InputHTMLAttributes, KeyboardEvent as ReactKeyboardEvent, MouseEvent as ReactMouseEvent } from 'react';
import { MLPVersion, Theme, TooltipPreference } from '../../../';
import { DropDownValidations } from './enums';
/**
 * @param Value denotes text in dropdown field
  will be excuted when key 'Enter' or Mouse Click on Search Icon. 
 * @param data represents data to be shown as search results in drawer.
 * @param configData required to configure display and action on search results.
 * @param data and @param configData should be passed.
 */
export interface DropDownData {
  [key: string]: string | number | boolean | object;
}
export type ConditionResult =
  | { data?: never; configData?: never }
  | {
      data?: DropDownData[];
      configData?: {
        label: string;
        disableItemKey?: string;
        onSelect: (value: DropDownData) => unknown;
      };
    };

export type ConditionResultMulti =
  | { data?: never; configData?: never }
  | {
      data?: DropDownData[];
      configData?: {
        label: string;
        onSelect: (value: DropDownData[]) => unknown;
      };
    };
export type DropDownTheme = Theme.BLACK;
export interface PropTypes extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  message?: string;
  status?: DropDownValidations;
  dropdownLabel?: string;
  labelInfo?: string;
  labelInfoPreference?: TooltipPreference;
  className?: string;
  onClick?: (e?: ReactKeyboardEvent | ReactMouseEvent) => void;
  theme?: DropDownTheme;
  disabledFilter?: boolean;
  testId?: string;
  width?: string;
  top?: string;
  isWithinModal?: boolean;
  ariaLabelledBy?: string;
}
export type DropDownPropsType = PropTypes & ConditionResult;
export type DropDownMultiPropsType = PropTypes & ConditionResultMulti;
export type WrapperPropTypes = (DropDownPropsType | DropDownMultiPropsType) & {
  mlpVersion?: MLPVersion;
} & {
  multiSelection?: boolean;
};
