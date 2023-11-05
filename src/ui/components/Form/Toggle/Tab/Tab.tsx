/* eslint-disable array-callback-return */
import { FC } from 'react';
import { FAIcon, IconPropInterface, IconStyle } from '../../../';
import { Data, TabProps } from '../types/tabProps';
import styles from './Tab.module.scss';

const Tab: FC<TabProps> = ({ tabList, onClick, activeTab, iconOnly, theme, ...restProps }: TabProps) => {
  const tabnames =
    tabList?.map((_element, index) => (
      <li
        role="presentation"
        className={`${styles['tab-toggle']} ${
          index + 1 === activeTab ? styles['active-tab'] : styles['inactive-tab']
        } ${iconOnly ? styles['tab-icon'] : styles['tab-text']} ${theme ? styles[theme] : ''}`}
        key={`Tab${+index}`}
        onClick={() => onClick?.({ index: index + 1, value: _element } as Data)}
        onKeyDown={() => onClick?.({ index: index + 1, value: _element } as Data)}
        data-testid="tab-list-testid"
      >
        {iconOnly ? (
          <FAIcon {...(_element as IconPropInterface)} theme={theme} iconStyle={IconStyle.SOLID} />
        ) : (
          (_element as string)
        )}
      </li>
    )) || [];
  return (
    <ul className={`${styles['tab-container']} ${theme ? styles[theme] : ''}`} {...restProps} data-testid="tab-test-id">
      {tabnames}
    </ul>
  );
};

export default Tab;
