import {
  FC,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  MutableRefObject,
  useEffect,
  useState,
  useRef,
  ReactNode,
} from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FAIcon, IconStyle, Tooltip, TooltipPreference } from '../../../';
import { DropDownPropsType, DropDownData } from '../types/propsType';
import { DropDownValidations } from '../types/enums';
import ARIA_LABELS from '../../../AccessibiltyLabels';
import styles from './DropDownMLP1.module.scss';

/**
 * @description DropDown component provides select options in <DropDown></DropDown> with basic styling
 * Props ->
 * className: prop to get custom styling class
 * value: display value of the dropdown
 * dropdownLabel: prop to add field label above text area
 * status: defines status of entry if any i.e. default,valid or invalid
 * value: defines the selected option from options populated
 * disabled: prop to set disabled or enabled selection
 */

const DropDownMLP1: FC<DropDownPropsType> = ({
  placeholder,
  dropdownLabel = '',
  message = '',
  className = '',
  labelInfo = '',
  labelInfoPreference = TooltipPreference.RIGHT,
  disabled = false,
  value = '',
  data = [],
  configData,
  status,
  name,
  testId = 'dropdown',
  width,
  top,
  isWithinModal = false,
  onClick,
  ariaLabelledBy = ARIA_LABELS.DROPDOWN,
}) => {
  const { DEFAULT, VALID } = DropDownValidations;
  const dropdownRef = useRef() as MutableRefObject<HTMLSpanElement>;
  const [drawerDisplay, setDrawerDisplay] = useState(false);
  const isDisabled = (item: DropDownData) => configData?.disableItemKey && item[configData?.disableItemKey];
  const handleInputClick = (e: ReactKeyboardEvent | ReactMouseEvent) => {
    if (onClick && typeof onClick === 'function') {
      onClick(e);
    }
  };

  const selectHandler = (item: DropDownData) => {
    if (isDisabled(item)) {
      return;
    }
    configData?.onSelect(item);
    setDrawerDisplay(false);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent | KeyboardEvent) => {
      if (!dropdownRef.current?.contains(e.target as HTMLElement)) {
        setDrawerDisplay(false);
      } else {
        if (!['p', 'li', 'label', 'span'].includes((e.target as HTMLElement).localName)) {
          setDrawerDisplay(prevState => !prevState);
        }
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);
    document.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        checkIfClickedOutside(e);
      }
    });
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
      document.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          checkIfClickedOutside(e);
        }
      });
    };
  }, [data, disabled]);

  const iconEval = {
    up: {
      iconName: 'chevron-up',
      iconStyle: IconStyle.SOLID,
      iconClassName: 'icon-medium',
    },
    down: {
      iconName: 'chevron-down',
      iconStyle: IconStyle.SOLID,
      iconClassName: 'icon-desktop',
    },
  }[drawerDisplay && !disabled ? 'up' : 'down'];

  const { iconName, iconStyle, iconClassName } = iconEval;

  return (
    <span
      className={`${styles[isWithinModal ? 'dropdown-container-modal' : 'dropdown-container']} ${
        disabled ? styles['disabled-container'] : ''
      } ${className}`}
      ref={dropdownRef}
      data-testid={`${testId}-ref-test-id`}
    >
      <label className={styles['dropdown-label']}>
        <span className={styles['dropdown-label-text']}>{dropdownLabel}</span>
        {labelInfo && (
          <Tooltip message={labelInfo} preference={labelInfoPreference} className={styles['dropdown-tool-tip']} />
        )}
      </label>
      {/* Dropdown Box with Icon */}
      {/* changed `section` to `div` as `section` doesn't comply with `aria-label`  */}
      {/* as `section` is a non interactive element */}
      <div
        id="demo"
        className={`${styles['dropdown-box']} ${
          drawerDisplay && !disabled && status === DEFAULT ? styles['dropdown-field-result'] : ''
        } ${
          status && status !== DEFAULT && !disabled
            ? status === VALID
              ? styles['dropdown-validated-valid']
              : styles['dropdown-validated-invalid']
            : ''
        } `}
        style={width ? { width: width } : {}}
        onClick={handleInputClick}
        onKeyDown={handleInputClick}
        tabIndex={0}
        role="button"
        aria-label={ariaLabelledBy}
        data-testid={`${testId}-section-test-id`}
      >
        <input
          name={`${name}`}
          value={value}
          placeholder={placeholder}
          readOnly={true}
          className={`${data.length > 0 ? styles['dropdown-field'] : styles['dropdown-field-disable']} `}
          disabled={disabled}
          data-testid={`${testId}-test-id`}
        />

        <FAIcon
          data-testid={`${testId}-icon-text-id`}
          iconName={iconName as IconName}
          iconStyle={iconStyle}
          className={`${styles['dropdown-icon']} ${!disabled ? styles['dropdown-icon-disable'] : ''} ${
            styles[iconClassName]
          }`}
        />
      </div>
      {/* dropdown Result Drawer */}
      <section
        className={
          `${styles['base-dropdown-result']} ` +
          `${drawerDisplay && !disabled ? styles['open-dropdown-result'] : ''} 
          ${
            status && status !== DEFAULT && !disabled
              ? status === VALID
                ? styles['base-dropdown-valid']
                : styles['base-dropdown-invalid']
              : ''
          }`
        }
        style={{
          ...(width ? { width } : {}),
          ...(top ? { top } : {}),
        }}
        data-testid={`${testId}-results-test-id`}
      >
        <ul>
          {data.map((item: DropDownData, index) => (
            <li
              role="presentation"
              key={`dropdown${+index}`}
              className={`${isDisabled(item) ? styles['disabled'] : ''} ${
                value === item[configData?.label || ''] ? styles['selected'] : ''
              }`}
              onClick={() => selectHandler(item)}
              onKeyDown={() => selectHandler(item)}
              data-testid={`${testId}-li-element`}
            >
              <p>{item[configData?.label as string] as ReactNode}</p>
            </li>
          ))}
        </ul>
      </section>
      {!disabled && (
        <span
          role="note"
          aria-label="message"
          aria-details={`${configData?.label} input message`}
          className={`${styles['dropdown-message']}  ${
            status && !disabled
              ? status === VALID
                ? styles['dropdown-message-valid']
                : styles['dropdown-message-invalid']
              : ''
          } `}
        >
          {message}
        </span>
      )}
    </span>
  );
};
export default DropDownMLP1;
