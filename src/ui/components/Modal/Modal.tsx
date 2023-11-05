import {
  MutableRefObject,
  FC,
  forwardRef,
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
  useImperativeHandle,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
} from 'react';
import {
  FAIcon,
  IconStyle,
  Theme,
  Button,
  ButtonTypes,
  ButtonStyles,
  TextLink,
  TextLinkStyle,
  Checkbox,
  useBreakpoint,
} from '../';
import dropdownMLP2Styles from '../Form/DropDown/mlp2/DropDownMLP2.module.scss';
import dropdownMLP1Styles from '../Form/DropDown/mlp1/DropDownMLP1.module.scss';
import { ModalPropsTypes } from './types/propTypes';
import { ButtonAlignment, TextAlign } from './types/enums';
import styles from './Modal.module.scss';

const Modal: FC<ModalPropsTypes> = forwardRef<HTMLDivElement, ModalPropsTypes>(
  (
    {
      headline,
      children,
      primaryButtonLabel,
      secondaryButtonLabel,
      textLinkProps,
      checkBox,
      textAlign,
      containerWidth,
      closeIcon = true,
      closeOnBackdropClick = true,
      onSecondaryButtonClick,
      onPrimaryButtonClick,
      onClose,
      primaryButton,
      secondaryButton,
      buttonAlignment = ButtonAlignment.HORIZONTAL,
    },
    ref,
  ) => {
    const modalRef = useRef() as MutableRefObject<HTMLDivElement>;
    useImperativeHandle(ref, () => modalRef.current);

    const breakPoint = useBreakpoint();
    const secondaryButtonClick = (e: ReactKeyboardEvent | ReactMouseEvent) => {
      if (onSecondaryButtonClick && typeof onSecondaryButtonClick === 'function') {
        onSecondaryButtonClick(e);
      }
    };

    const primaryButtonClick = (e: ReactKeyboardEvent | ReactMouseEvent) => {
      if (onPrimaryButtonClick && typeof onPrimaryButtonClick === 'function') {
        onPrimaryButtonClick(e);
      }
    };
    const onCloseModal = (e: ReactKeyboardEvent | ReactMouseEvent) => {
      if (onClose && typeof onClose === 'function') {
        onClose(e);
      }
    };
    const onBackdropClick = (e: ReactKeyboardEvent | ReactMouseEvent) => {
      if (closeOnBackdropClick && onClose && typeof onClose === 'function') {
        onClose(e);
      }
    };

    const [hasScrollBar, setHasScrollBar] = useState(false);
    function updateState() {
      const el = document.getElementById('content') as HTMLElement;
      if (el) {
        el && setHasScrollBar(el.scrollHeight > el.getBoundingClientRect().height);
      }
    }

    useEffect(() => {
      updateState();
      window.addEventListener('resize', updateState);
      return () => window.removeEventListener('resize', updateState);
    }, [children]);

    const getPrimaryButton = () => {
      if (primaryButton) {
        return primaryButton;
      }
      return primaryButtonLabel ? (
        <span
          className={`${
            textLinkProps?.text && !secondaryButtonLabel
              ? styles['primary-button-with-textlink']
              : styles['primary-button']
          } `}
        >
          <Button
            title={primaryButtonLabel}
            type={ButtonTypes.BUTTON}
            onClick={primaryButtonClick}
            buttonStyle={ButtonStyles.SOLID}
            data-testid="primary-button-test-id"
          />
        </span>
      ) : (
        ''
      );
    };

    const getSecondaryButton = () => {
      if (secondaryButton) {
        return secondaryButton;
      }
      return secondaryButtonLabel ? (
        <span className={styles['secondary-button']}>
          <Button
            title={secondaryButtonLabel}
            type={ButtonTypes.BUTTON}
            onClick={secondaryButtonClick}
            buttonStyle={ButtonStyles.OUTLINE}
            theme={Theme.BLACK}
            data-testid="secondary-button-test-id"
          />
        </span>
      ) : (
        ''
      );
    };
    const processElementStyle = (dropdownClassName: string, dropdownDrawerClassName: string) => {
      const dropdownArr = Array.from(
        document.getElementsByClassName(dropdownClassName) as HTMLCollectionOf<HTMLElement>,
      );
      const dropdownDrawerArr = Array.from(
        document.getElementsByClassName(dropdownDrawerClassName) as HTMLCollectionOf<HTMLElement>,
      );
      if (dropdownDrawerArr?.length) {
        dropdownArr.forEach((element, index) => {
          if (dropdownDrawerArr?.[index]) {
            const boundingElement = element.getBoundingClientRect();
            dropdownDrawerArr[index].style['top'] = `${
              boundingElement.top - modalRef.current.getBoundingClientRect().top + boundingElement.height + 8
            }px`;
            dropdownDrawerArr[index].style['left'] = `unset`;
            dropdownDrawerArr[index].style['right'] = `unset`;
            dropdownDrawerArr[index].style['position'] = 'fixed';
            dropdownDrawerArr[index].style['width'] = `${boundingElement.width}px`;
          }
        });
      }
    };
    //Dropdown Behavior changes
    useLayoutEffect(() => {
      processElementStyle(dropdownMLP2Styles['mlp-2-dropdown-modal'], dropdownMLP2Styles['dropdown-drawer']);
      processElementStyle(dropdownMLP1Styles['dropdown-container-modal'], dropdownMLP1Styles['base-dropdown-result']);
    }, [breakPoint]);

    return (
      <>
        <section
          className={styles['modal-container']}
          style={containerWidth ? { width: containerWidth } : {}}
          ref={modalRef}
        >
          {closeIcon && (
            <div className={styles['modal-icon-section']}>
              <FAIcon
                className={styles['close-icon']}
                iconStyle={IconStyle.SOLID}
                data-testid="close-icon-test-id"
                iconName={'close'}
                theme={Theme.BLACK}
                onClick={onCloseModal}
              />
            </div>
          )}
          <section
            className={`${styles['modal-headline']} ${
              TextAlign.LEFT === textAlign ? styles['modal-headline-left'] : styles['modal-headline-center']
            } `}
            data-testid="modal-healine-test-id"
          >
            {headline}
          </section>
          <section
            id="content"
            className={`${
              TextAlign.LEFT === textAlign ? styles['modal-content-left'] : styles['modal-content-center']
            } `}
            data-testid="content-test-id"
          >
            {children}
          </section>
          <section
            className={`
            ${secondaryButtonLabel ? styles['modal-bottom-container'] : styles['modal-bottom-with-secondary']} 
            ${hasScrollBar ? styles['bottom-container'] : ''} 
            `}
          >
            <div className={`${styles['modal-button-container']} ${styles[`align-${buttonAlignment}-button`]}`}>
              {getSecondaryButton()}
              {getPrimaryButton()}
            </div>

            {checkBox?.text && <Checkbox {...checkBox} />}

            {textLinkProps?.text && (
              <TextLink
                textLinkStyle={TextLinkStyle.UNDERLINE}
                {...textLinkProps}
                customClass={`${styles['text-link']} ${textLinkProps?.customClass || ''}`}
                data-testid="test-link-test-id"
              />
            )}
          </section>
        </section>
        <div className={styles['modal-backdrop']} onClick={onBackdropClick} aria-hidden="true"></div>
      </>
    );
  },
);
Modal.displayName = 'Modal';
export default Modal;
export { TextAlign, ButtonAlignment };
