import { MutableRefObject, useEffect, useState, useRef, ReactNode, forwardRef, useImperativeHandle } from 'react';
import { FAIcon, IconStyle, Tooltip, MLPVersion } from '../../';
import styles from './Search.module.scss';

import { Data, SearchPropsTypes, SearchTheme } from './types/propsType';
/**
 * @description Provides Search Field
 */

const Search = forwardRef<HTMLSpanElement, SearchPropsTypes>(
  (
    {
      value,
      data = [],
      placeholder = '',
      disabled = false,
      onChange,
      onSearch,
      configData,
      onClear,
      className = '',
      mlpVersion = MLPVersion.ONE,
      label,
      labelInfo,
      theme,
      message,
      ...restProps
    }: SearchPropsTypes,
    ref,
  ) => {
    const searchRef = useRef() as MutableRefObject<HTMLSpanElement>;
    const searchIconRef = useRef() as MutableRefObject<HTMLSpanElement>;
    const [drawerDisplay, setDrawerDisplay] = useState(false);
    const isMLP2Variant = mlpVersion === MLPVersion.TWO;
    useImperativeHandle(ref, () => searchRef.current);

    useEffect(() => {
      document.addEventListener('mousedown', checkIfClickedOutside);
      document.addEventListener('keydown', handleOnKeyDown);
      return () => {
        document.removeEventListener('mousedown', checkIfClickedOutside);
        document.removeEventListener('keydown', handleOnKeyDown);
      };
    }, []);

    useEffect(() => {
      setDrawerDisplay(data.length > 0);
    }, [data]);

    const checkIfClickedOutside = (e: MouseEvent | KeyboardEvent) => {
      !searchRef.current?.contains(e.target as HTMLElement) && setDrawerDisplay(false);
    };

    const handleOnKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        checkIfClickedOutside(e);
      }
    };

    return (
      <section className={`${styles['search-container']} ${theme && styles[theme]} ${className}`}>
        {label && !isMLP2Variant && (
          <section className={styles['search-field-label-container']}>
            <label htmlFor={restProps.id} className={styles['search-field-label']}>
              {label}
            </label>
            {restProps?.required && <sup>*</sup>}
            {labelInfo && <Tooltip message={labelInfo} />}
          </section>
        )}
        <span
          className={`${styles['search-body-container']} ${disabled ? styles['disabled-container'] : ''}`}
          ref={searchRef}
        >
          {/* Search Box with Icon */}
          <section
            className={`${styles['search-box']} ${drawerDisplay && !disabled ? styles['search-field-result'] : ''} ${
              isMLP2Variant ? styles['search-mlp2'] : ''
            }`}
          >
            {isMLP2Variant && (
              <FAIcon
                iconName={'magnifying-glass'}
                iconStyle={IconStyle.SOLID}
                className={`${styles['icon']} ${styles['search-mlp2-left-icon']}`}
                data-testid="search-mlp2-icon-test-left-id"
              />
            )}
            <input
              value={value}
              onChange={onChange}
              className={`${styles['search-field']}`}
              placeholder={placeholder}
              onKeyDown={e => {
                e.key === 'Enter' && onSearch?.();
              }}
              onFocus={() => {
                setDrawerDisplay(data.length > 0 || false);
              }}
              disabled={disabled}
              data-testid="search-test-id"
              {...restProps}
            />
            <span ref={drawerDisplay ? null : searchIconRef}>
              {!isMLP2Variant && !value && (
                <span>
                  <FAIcon
                    iconName={'magnifying-glass'}
                    iconStyle={IconStyle.SOLID}
                    className={`${styles['icon']} ${styles['icon-desktop']}`}
                    data-testid="search-icon-test-right-id"
                  />
                </span>
              )}
              {value && (
                <span className={styles['close-icon']}>
                  <FAIcon
                    iconName={isMLP2Variant ? 'close' : 'xmark-large'}
                    iconStyle={IconStyle.SOLID}
                    className={`${styles['icon']} ${!isMLP2Variant ? styles['icon-medium'] : ''}`}
                    data-testid="clear-icon-test-id"
                    onClick={e => {
                      onClear?.(e);
                      setDrawerDisplay(false);
                    }}
                  />
                </span>
              )}
            </span>
          </section>
          {/* Search Result Drawer */}
          {!isMLP2Variant && (
            <section
              className={`${styles['base-search-result']} ${
                drawerDisplay && !disabled ? styles['open-search-result'] : ''
              }`}
            >
              <ul>
                {data.map((item: Data, index) => (
                  <li
                    role="presentation"
                    key={`search${+index}`}
                    onClick={() => {
                      configData?.onSelect(item);
                      setDrawerDisplay(false);
                    }}
                    onKeyDown={() => {
                      configData?.onSelect(item);
                      setDrawerDisplay(false);
                    }}
                    data-testid="search-result-testid"
                  >
                    <p>{item[configData?.label as string] as ReactNode}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {message && <span className={styles['search-message']}>{message}</span>}
        </span>
      </section>
    );
  },
);
Search.displayName = 'Search';
export type { SearchTheme };
export default Search;
