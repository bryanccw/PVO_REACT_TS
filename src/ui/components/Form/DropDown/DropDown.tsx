import { FC, ReactElement, forwardRef, ReactNode } from 'react';
import { MLPVersion } from '../../';
import {
  DropDownPropsType,
  WrapperPropTypes,
  DropDownData as DropDownDataInterface,
  DropDownMultiPropsType,
  DropDownTheme,
} from './types/propsType';
import { DropDownValidations } from './types/enums';
import DropDownMLP1 from './mlp1/DropDownMLP1';
import DropDownMLP2 from './mlp2/DropDownMLP2';
import MultiSelect from './multiSelect/MultiSelect';

/**
 * @description DropDown component provides select options in <DropDown></DropDown> with basic styling
 * Props ->
 * className: prop to get custom styling class
 * value: display value of the dropdown
 * dropdownLabel: prop to add field label above text area
 * status: defines status of entry if any i.e. default,valid or invalid
 * value: defines the selected option from options populated
 * disabled: prop to set disabled or enabled selection
 *
 * mlpVersion: (Default = 2) defines different availabel version of DropDown Component.
 */

const DropDown: FC<WrapperPropTypes> = forwardRef<HTMLSpanElement, WrapperPropTypes>(
  ({ mlpVersion, multiSelection, ...restProps }: WrapperPropTypes, ref): ReactElement => {
    if (multiSelection) {
      return (
        <span data-testid="dropdown-wrapper-test-id">
          <MultiSelect {...(restProps as DropDownMultiPropsType)} />
        </span>
      );
    }

    let MLPDropDown: ReactNode;
    switch (mlpVersion) {
      case MLPVersion.ONE:
        MLPDropDown = <DropDownMLP1 {...(restProps as DropDownPropsType)} />;
        break;
      default:
        MLPDropDown = <DropDownMLP2 {...(restProps as DropDownPropsType)} />;
    }
    return (
      <span data-testid="dropdown-wrapper-test-id" ref={ref} id="nextgen-dropdown-component">
        {MLPDropDown}
      </span>
    );
  },
);
DropDown.displayName = 'DropDown';
export { DropDownValidations };
export type { DropDownDataInterface, DropDownTheme };
export default DropDown;
