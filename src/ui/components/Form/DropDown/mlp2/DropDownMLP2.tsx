import { FC, useEffect, useRef, MutableRefObject, useState, ReactNode } from 'react';
import { FAIcon, IconStyle } from '../../../';
import { DropDownPropsType, DropDownData } from '../types/propsType';
import { DropDownValidations } from '../types/enums';
import ARIA_LABELS from '../../../AccessibiltyLabels';
import styles from './DropDownMLP2.module.scss';

/**
 * @param configData should be passed with `data` to configure display and operations.
 * @param name should unique to differentiate element on screen
 */
const DropDownMLP2: FC<DropDownPropsType> = ({
  placeholder,
  dropdownLabel = '',
  message,
  className = '',
  name,
  disabled = false,
  data = [],
  status,
  theme,
  configData,
  disabledFilter = false,
  onClick = () => null,
  testId = 'dropdown',
  width,
  top,
  isWithinModal = false,
  ariaLabelledBy = ARIA_LABELS.DROPDOWN,
  ...restProps
}: DropDownPropsType) => {
  const { VALID, INVALID } = DropDownValidations;
  const dropdownRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dropdownIconRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [drawerDisplay, setDrawerDisplay] = useState(false);
  const isDisabled = (item: DropDownData) => configData?.disableItemKey && item[configData?.disableItemKey];
  const handleInputClick = (e: React.KeyboardEvent | React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
    setDrawerDisplay(prevState => !prevState);
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
      !dropdownRef?.current?.contains(e.target as HTMLElement) && setDrawerDisplay(false);
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        checkIfClickedOutside(e);
      }
    });
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
      document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
          checkIfClickedOutside(e);
        }
      });
    };
  }, []);

  function filterDrawer() {
    const filteredData = data?.filter(item => `${item[`${configData?.label}`]}`.includes(`${restProps.value}`));
    return filteredData?.length ? filteredData : data;
  }
  const currentIcon = status === VALID ? 'circle-check' : status === INVALID ? 'square-exclamation' : '';
  return (
    <>
      <section
        className={`${styles[isWithinModal ? 'mlp-2-dropdown-modal' : 'mlp-2-dropdown']} ${
          disabled ? styles['disabled'] : ''
        } ${drawerDisplay ? styles['open-dropdown-drawer'] : ''} ${
          status ? styles[`dropdown-validated-${status}`] : ''
        } ${theme ? styles[theme] : ''}`}
        ref={dropdownRef}
        style={width ? { width: width } : {}}
        data-testid={`${testId}-ref-test-id`}
      >
        {/* Input with label */}
        <div className={styles['dropdown-container']}>
          {dropdownLabel && (
            <label
              role="presentation"
              htmlFor={`dropdown-content-${name}`}
              className={`${styles['dropdown-label']} ${restProps.value !== '' ? styles['input-has-value'] : ''}`}
              data-testid={`${testId}-label-test-id`}
              onClick={() => {
                !drawerDisplay && onClick();
              }}
            >
              {dropdownLabel}
            </label>
          )}
          <input
            tabIndex={0}
            name={`${name}`}
            id={`dropdown-content-${name}`}
            list="dropdownContent"
            className={`${styles['dropdown-input']} ${className}`}
            placeholder={dropdownLabel ? '' : placeholder}
            onFocus={() => {
              !drawerDisplay && onClick();
              setDrawerDisplay(true);
            }}
            onKeyDown={() => null}
            disabled={disabled}
            data-testid={`${testId}-test-id`}
            readOnly={disabledFilter || restProps.readOnly}
            autoComplete={restProps.autoComplete || 'off'}
            {...restProps}
          />
        </div>
        {/* Chevron Icon */}
        <div
          tabIndex={-1}
          role="button"
          className={styles['dropdown-icon']}
          ref={dropdownIconRef}
          data-testid={`${testId}-icon-test-id`}
          onClick={handleInputClick}
          onKeyDown={handleInputClick}
          aria-label={ariaLabelledBy}
        >
          <FAIcon iconName={'chevron-down'} iconStyle={IconStyle.SOLID} />
        </div>
        {/* Result Drawer */}
        {data.length > 0 ? (
          <section className={styles['dropdown-drawer']} style={top ? { top: top } : {}}>
            <ul>
              {(disabledFilter ? data : filterDrawer())?.map((item: DropDownData, index) => (
                <li
                  data-testid={`${testId}-result-test-id`}
                  role="presentation"
                  key={`dropdown${+index}`}
                  onClick={() => selectHandler(item)}
                  onKeyDown={() => selectHandler(item)}
                  className={`${isDisabled(item) ? styles['disabled'] : ''}`}
                >
                  {item[`${configData?.label}`] as ReactNode}
                </li>
              ))}
            </ul>
          </section>
        ) : (
          ''
        )}
      </section>
      <section className={styles['mlp-2-dropdown-message-text']}>
        {currentIcon ? <FAIcon iconName={currentIcon} className={styles['icon']} /> : ''}
        {message && (
          <span className={styles['dropdown-message']} data-testid={`${testId}-message-test-id`}>
            {message}
          </span>
        )}
      </section>
    </>
  );
};
export default DropDownMLP2;
