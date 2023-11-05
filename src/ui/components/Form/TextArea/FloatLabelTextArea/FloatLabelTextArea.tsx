import { FC, MutableRefObject, useRef, useImperativeHandle, forwardRef } from 'react';
import { FAIcon } from '../../../';
import { TextAreaPropsType } from '../types/propsType';
import { TextAreaValidations } from '../types/enums';
import styles from './FloatLabelTextArea.module.scss';

/**
 * @description TextArea component provides <TextArea></TextArea> with basic styling;W
 * Props ->
 * className: prop to get custom styling class
 * label: prop to add field label above text area
 * status: defines status of entry if any i.e. default,valid or invalid
 * rows: specifies the visible number of lines in a text area
 * cols: specifies the visible width of a text area
 *
 */

const FloatLabelTextArea: FC<TextAreaPropsType> = forwardRef<HTMLTextAreaElement, TextAreaPropsType>(
  ({
    id = '',
    className = '',
    label = '',
    status,
    disabled = false,
    readOnly = false,
    resize = false,
    message = '',
    forwardedRef,
    rows = 5,
    ...restProps
  }) => {
    const { DEFAULT, VALID, INVALID } = TextAreaValidations;
    const currentIcon = status === VALID ? 'circle-check' : status === INVALID ? 'square-exclamation' : '';
    const textareaRef = useRef() as MutableRefObject<HTMLTextAreaElement>;
    useImperativeHandle(forwardedRef, () => textareaRef.current);

    return (
      <div
        className={`${styles['textarea']} ${
          status && status !== DEFAULT
            ? status === VALID
              ? styles['textarea-validated-valid']
              : styles['textarea-validated-invalid']
            : ''
        }`}
      >
        <div
          className={
            `${styles['textarea-field-container']} ${disabled ? styles['disabled'] : ''}` +
            ` ${readOnly ? styles['read-only'] : ''}` +
            ` ${resize ? '' : styles['resize']}` +
            ` ${!label ? styles['no-label'] : ''}`
          }
        >
          {label && (
            <label htmlFor={id} className={styles['float-textarea-label']}>
              {label}
            </label>
          )}
          <textarea
            id={id}
            ref={textareaRef}
            className={`${styles['textarea-field']} ${!restProps?.value ? styles['without-value'] : ''} ${className}`}
            disabled={disabled}
            readOnly={readOnly}
            rows={rows}
            {...restProps}
          />
        </div>
        <section className={styles['textarea-drawer']}>
          {currentIcon ? <FAIcon iconName={currentIcon} className={styles['icon']} /> : ''}
          {message && (
            <span
              role="presentation"
              aria-label="message"
              aria-details={`${label} input message`}
              className={styles['textarea-message']}
            >
              {message}
            </span>
          )}
        </section>
      </div>
    );
  },
);
FloatLabelTextArea.displayName = 'FloatLabelTextArea';

export default FloatLabelTextArea;
