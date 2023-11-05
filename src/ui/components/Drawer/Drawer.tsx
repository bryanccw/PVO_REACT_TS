import {
  FC,
  forwardRef,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  useRef,
  useImperativeHandle,
  MutableRefObject,
  TouchEvent,
  useState,
} from 'react';
import { FAIcon, Theme, IconStyle } from '../';
import { DrawerPropsTypes } from './types/propTypes';
import { DrawerDirections } from './types/enums';
import styles from './Drawer.module.scss';

/**
 *
 * @param param0
 * @returns
 */
const Drawer: FC<DrawerPropsTypes> = forwardRef<HTMLDivElement, DrawerPropsTypes>(
  (
    {
      header,
      footer,
      onClose,
      closeIcon,
      children,
      closeOnBackdropClick,
      className = '',
      bottomGap = 68, // footer height
      drawerWidth,
      direction,
    },
    ref,
  ) => {
    const [movingWithTouch, setMovingWithTouch] = useState<boolean>(false);
    const [startY, setStartY] = useState<number>(0);
    const drawerRef = useRef() as MutableRefObject<HTMLDivElement>;
    useImperativeHandle(ref, () => drawerRef.current);
    const drawerHandleRef = useRef() as MutableRefObject<HTMLDivElement>;
    const onCloseCallback = (e: ReactKeyboardEvent | ReactMouseEvent | TouchEvent) => {
      if (onClose && typeof onClose === 'function') {
        drawerRef.current.className += styles['close-drawer'];
        setTimeout(() => {
          onClose(e);
        }, 500);
      }
    };

    const onBackdropClick = (e: ReactKeyboardEvent | ReactMouseEvent) => {
      if (closeOnBackdropClick) {
        onCloseCallback(e);
      }
    };

    const directionClass = direction ? styles[`direction-${direction}`] : '';
    const handleTouchMove = (e: TouchEvent) => {
      if (movingWithTouch) {
        if (e.changedTouches[0].clientY >= startY) {
          drawerRef.current.style.top = `${e.changedTouches[0].clientY}px`;
          drawerRef.current.style.bottom = 'unset';
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setMovingWithTouch(true);
      setStartY(e.currentTarget.getBoundingClientRect().top);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      setMovingWithTouch(false);
      if (e.changedTouches[0].clientY > 0.75 * window.innerHeight) {
        onCloseCallback(e);
      } else {
        drawerRef.current.style.top = 'unset';
        drawerRef.current.style.bottom = `${bottomGap}px`;
      }
    };

    return (
      <>
        <div
          className={`${styles['drawer-container']} ${directionClass} ${className}`}
          id="nextgen-drawer-component"
          style={{ bottom: `${bottomGap}px` }}
          ref={drawerRef}
        >
          <div
            className={styles['mobile-tophandle']}
            role="presentation"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            ref={drawerHandleRef}
          >
            <span></span>
          </div>
          <div
            className={styles['rt-drawer']}
            data-testid="base-testid"
            style={drawerWidth ? { width: drawerWidth } : {}}
          >
            {header && (
              <section className={styles['drawer-header']} data-testid="header-testid">
                {header}
                {closeIcon && (
                  <div className={styles['icon-section']}>
                    <FAIcon
                      className={styles['close-icon']}
                      data-testid="close-icon-testid"
                      iconName={'close'}
                      iconStyle={IconStyle.SOLID}
                      theme={Theme.BLACK}
                      onClick={onCloseCallback}
                    />
                  </div>
                )}
              </section>
            )}
            <section className={styles['drawer-body-content']} data-testid="body-testid">
              {children}
            </section>
            {footer && <section className={styles['drawer-footer']}>{footer}</section>}
          </div>
        </div>

        <div
          className={styles['backdrop']}
          aria-hidden="true"
          onClick={onBackdropClick}
          data-testid="backdrop-testid"
        ></div>
      </>
    );
  },
);
Drawer.displayName = 'Drawer';
export default Drawer;
export { DrawerDirections };
export type { DrawerPropsTypes };
