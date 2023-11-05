import { FC, useEffect, MutableRefObject, useRef, forwardRef, useImperativeHandle } from 'react';
import { Tooltip, TooltipPreference } from '../../../';
import { TextAreaPropsType } from '../types/propsType';
import { TextAreaValidations } from '../TextArea';
import styles from './ClassicTextArea.module.scss';

/**
 * @description TextArea component provides <TextArea></TextArea> with basic styling;W
 * Props ->
 * className: prop to get custom styling class
 * label: prop to add field label above text area
 * labelInfo: adds tooltip beside label, renders tooltip info if any
 * status: defines status of entry if any i.e. default,valid or invalid
 * rows: specifies the visible number of lines in a text area
 * cols: specifies the visible width of a text area
 *
 */

const ClassicTextArea: FC<TextAreaPropsType> = forwardRef<HTMLTextAreaElement, TextAreaPropsType>(
  ({
    id = '',
    className = '',
    label = '',
    labelInfo = '',
    status,
    disabled = false,
    readOnly = false,
    resize = true,
    message = '',
    forwardedRef,
    ...restProps
  }) => {
    const { DEFAULT, VALID } = TextAreaValidations;
    const textareaRef = useRef() as MutableRefObject<HTMLTextAreaElement>;
    useImperativeHandle(forwardedRef, () => textareaRef.current);

    useEffect(() => {
      const element = textareaRef.current;
      if (element.scrollHeight > element.clientHeight) {
        element.style.height = `${element.scrollHeight}px`;
      }
    }, [restProps?.value]);
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
        {label && (
          <label htmlFor={id} className={styles['textarea-label']}>
            <span className={styles['textarea-label-text']}>{label}</span>
            {labelInfo && (
              <Tooltip
                message={labelInfo}
                preference={TooltipPreference.LEFT}
                className={styles['textarea-label-tooltip']}
              />
            )}
          </label>
        )}
        <div
          className={
            `${styles['textarea-field-container']} ${disabled ? styles['disabled'] : ''}` +
            ` ${readOnly ? styles['read-only'] : ''}` +
            ` ${resize ? '' : styles['resize']}`
          }
        >
          <textarea
            id={id}
            ref={textareaRef}
            className={`${styles['textarea-field']} ${className}`}
            disabled={disabled}
            readOnly={readOnly}
            {...restProps}
          />
        </div>
        {message && (
          <span
            role="presentation"
            aria-label="message"
            aria-details={`${label} text-area`}
            className={styles['textarea-message']}
          >
            {message}
          </span>
        )}
      </div>
    );
  },
);
ClassicTextArea.displayName = 'ClassicTextArea';

export default ClassicTextArea;
