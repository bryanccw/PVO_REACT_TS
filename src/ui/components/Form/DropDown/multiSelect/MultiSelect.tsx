import {
  FC,
  MutableRefObject,
  useEffect,
  useState,
  useRef,
  ReactNode,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
} from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { DropDownValidations } from '../DropDown';
import { Tooltip, TooltipPreference, FAIcon, Checkbox, Theme, IconStyle } from '../../../';
import { DropDownData, DropDownMultiPropsType } from '../types/propsType';
import ARIA_LABELS from '../../../AccessibiltyLabels';
import styles from './MultiSelect.module.scss';

const MultiSelect: FC<DropDownMultiPropsType> = ({
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
  name = '',
  testId = 'dropdown',
  width,
  top,
  isWithinModal = false,
  ariaLabelledBy = ARIA_LABELS.DROPDOWN,
  onClick,
}) => {
  const { DEFAULT, VALID } = DropDownValidations;
  const dropdownRef = useRef() as MutableRefObject<HTMLSpanElement>;
  const [drawerDisplay, setDrawerDisplay] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<DropDownData[]>([]);

  const handleInputClick = (e: ReactKeyboardEvent | ReactMouseEvent) => {
    if (onClick) {
      onClick(e);
    }
    setDrawerDisplay(prevState => !prevState);
  };

  useEffect(() => {
    setSelectedOptions(data.filter(item => Array.isArray(value) && value.includes(item.name)));
  }, []);

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent | KeyboardEvent) => {
      if (!dropdownRef.current?.contains(e.target as HTMLElement)) {
        setDrawerDisplay(false);
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
      document.removeEventListener('keydown', e => {
        if (e.key === 'Enter') {
          checkIfClickedOutside(e);
        }
      });
    };
  }, []);

  const iconEval = {
    up: {
      icon: 'chevron-up',
      iconClassName: 'icon-medium',
    },
    down: {
      icon: 'chevron-down',
      iconClassName: 'icon-desktop',
    },
  }[drawerDisplay && !disabled ? 'up' : 'down'];
  const { icon, iconClassName } = iconEval;

  const handleOptionSelect = (item: DropDownData) => {
    const selectedIndex = selectedOptions.findIndex(option => option.id === item.id);

    let updatedSelectedOptions: DropDownData[];
    if (selectedIndex !== -1) {
      // If the item is already selected, remove it from the array
      updatedSelectedOptions = selectedOptions.filter(option => option.id !== item.id);
    } else {
      // If the item is not selected, add it to the array
      updatedSelectedOptions = [...selectedOptions, item];
    }

    setSelectedOptions(updatedSelectedOptions);

    configData?.onSelect && configData?.onSelect(updatedSelectedOptions);
  };

  return (
    <span
      className={`${styles[isWithinModal ? 'dropdown-container-modal' : 'dropdown-container']} ${
        disabled ? styles['disabled-container'] : ''
      } ${className}`}
      ref={dropdownRef}
      data-testid={`${testId}-ref-text-id`}
    >
      <label className={styles['dropdown-label']} data-testid={`${testId}-label`}>
        <span className={styles['dropdown-label-text']} data-testid={`${testId}-label-text`}>
          {dropdownLabel}
        </span>
        {labelInfo && (
          <Tooltip message={labelInfo} preference={labelInfoPreference} className={styles['dropdown-tool-tip']} />
        )}
      </label>
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
        }`}
        style={width ? { width: width } : {}}
        onClick={handleInputClick}
        onKeyDown={() => null}
        tabIndex={0}
        role="button"
        aria-label={ariaLabelledBy}
        data-testid={`${testId}-section-test-id`}
      >
        <input
          name={name}
          value={value}
          placeholder={placeholder}
          readOnly={true}
          className={`${data.length > 0 ? styles['dropdown-field'] : styles['dropdown-field-disable']}`}
          disabled={disabled}
          data-testid={`${testId}-test-id`}
        />
        <FAIcon
          data-testid={`${testId}-icon-text-id`}
          iconName={icon as IconName}
          iconStyle={IconStyle.SOLID}
          className={`${styles['dropdown-icon']} ${!disabled ? styles['dropdown-icon-disable'] : ''} ${
            styles[iconClassName]
          }`}
        />
      </div>
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
            <li role="presentation" key={`dropdown${+index}`} data-testid={`${testId}-li-element`}>
              <Checkbox
                text={item[configData?.label as string] as ReactNode}
                checked={selectedOptions.some(option => option.id === item.id)}
                disabled={disabled}
                theme={Theme.BLACK}
                data-testid={`${testId}-checkbox-${index}`}
                onClick={() => handleOptionSelect(item)}
                onKeyDown={() => handleOptionSelect(item)}
              />
            </li>
          ))}
        </ul>
      </section>
      {!disabled && (
        <span
          role="note"
          aria-label="message"
          aria-details={`${configData?.label} input message`}
          className={`${styles['dropdown-message']} ${
            status && !disabled
              ? status === VALID
                ? styles['dropdown-message-valid']
                : styles['dropdown-message-invalid']
              : ''
          }`}
        >
          {message}
        </span>
      )}
    </span>
  );
};

export default MultiSelect;
