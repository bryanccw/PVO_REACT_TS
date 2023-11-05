import { ChangeEventHandler, MouseEventHandler } from 'react';
import { MLPVersion, Theme } from '../../../';

/**
 * @param Value denotes text in search field
 * @function onSearch is callback function needs to be passed from container application, 
will be excuted when key 'Enter' or Mouse Click on Search Icon. 
 * @param data represents data to be shown as search results in drawer.
 * @param configData required to configure display and action on search results.
 * @param data and @param configData should be passed parallely.
 * @function onClear takes callback , triggers when 'X' clicked.
 */
export interface Data {
  [key: string]: string | number | boolean | object;
}

type ConditionResult =
  | { data?: never; configData?: never }
  | {
      data?: Data[];
      configData?: {
        label: string;
        onSelect: (value: object) => unknown;
      };
    };
type ConditionLabel =
  | { label?: never; labelInfo?: never; required?: never }
  | {
      label: string;
      labelInfo?: string;
      required?: boolean;
    };

export type SearchTheme = Theme.ERROR | Theme.BLACK;
type PropTypes = {
  id?: string;
  name?: string;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSearch: () => unknown;
  onClear?: MouseEventHandler<HTMLSpanElement>;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  message?: string;
  mlpVersion?: MLPVersion;
  theme?: SearchTheme;
};

export type SearchPropsTypes = PropTypes & ConditionResult & ConditionLabel;
