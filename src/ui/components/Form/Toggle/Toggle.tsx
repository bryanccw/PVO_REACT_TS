import { FC, ReactElement, ReactNode, forwardRef } from 'react';
import { ToggleStyle } from './types/enums';
import IndividualToggle from './Individual/IndividualToggle';
import SwitchToggle from './Switch/Switch';
import TabToggle from './Tab/Tab';
import { TogglePropsTypes, ToggleTheme } from './types/propsType';
import { IndividualTogglePropTypes } from './types/IndividualTogglePropTypes';
import { TabProps } from './types/tabProps';
import { SwitchPropsTypes } from './types/SwitchProps';
import styles from './Toggle.module.scss';

const Toggle: FC<TogglePropsTypes> = forwardRef<HTMLSpanElement, TogglePropsTypes>(
  ({ toggleStyle, ...restProps }: TogglePropsTypes, ref): ReactElement => {
    let ToggleComponent: ReactNode;
    const { INDIVIDUAL, TABS } = ToggleStyle;
    switch (toggleStyle) {
      case INDIVIDUAL:
        ToggleComponent = <IndividualToggle {...(restProps as IndividualTogglePropTypes)} />;
        break;
      case TABS:
        ToggleComponent = <TabToggle {...(restProps as TabProps)} />;
        break;
      default:
        ToggleComponent = <SwitchToggle {...(restProps as SwitchPropsTypes)} />;
    }
    return (
      <span className={styles['toggle-container']} ref={ref}>
        {ToggleComponent as ReactNode}
      </span>
    );
  },
);
Toggle.displayName = 'Toggle';

export { ToggleStyle };
export default Toggle;
export type { ToggleTheme };
