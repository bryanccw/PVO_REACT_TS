import { useState, useRef, MutableRefObject, forwardRef, useImperativeHandle } from 'react';
import { Theme, FAIcon, IconStyle } from '../';
import { TooltipPreference } from './types/enums';
import { TooltipPropsTypes } from './types/propsType';
import styles from './Tooltip.module.scss';

/**
 *
 * @description Tooltip Provides a brief, informative message that
 *  appears when a user interacts with an information icon.
 */

const Tooltip = forwardRef<HTMLSpanElement, TooltipPropsTypes>(
  ({ preference = TooltipPreference.TOP_CENTER, message, className = '' }: TooltipPropsTypes, ref) => {
    const tooltipRef = useRef() as MutableRefObject<HTMLDivElement>;
    const [currentDirection, setCurrentDirection] = useState('');
    const { LEFT, RIGHT, TOP_CENTER, TOP_LEFT, TOP_RIGHT, BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT } =
      TooltipPreference;
    useImperativeHandle(ref, () => tooltipRef.current);

    function calcLoc() {
      const { clientWidth: viewportWidth, clientHeight: viewportHeight } = document.documentElement;
      const dirArr = preference.split('-');
      const rect = tooltipRef.current?.getBoundingClientRect();
      const eleLeft = rect.left,
        eleTop = rect.top,
        eleRight = rect.right,
        eleBottom = rect.bottom,
        eleHeight = rect.height,
        eleWidth = rect.width;
      const onRight = eleRight < viewportWidth && eleRight >= eleWidth;
      const onLeft = eleLeft > 0 && eleLeft >= eleWidth;
      const onTop = eleTop > 0 && eleTop >= eleHeight;
      const onBottom = eleBottom <= viewportHeight && eleBottom >= eleHeight;

      switch (dirArr[0]) {
        case RIGHT:
          if (!onRight) {
            if (onLeft) {
              setCurrentDirection(LEFT);
            } else if (onTop) {
              setCurrentDirection(TOP_CENTER);
            } else {
              setCurrentDirection(BOTTOM_CENTER);
            }
          } else {
            setCurrentDirection(RIGHT);
          }
          break;
        case LEFT:
          if (!onLeft) {
            if (onRight) {
              setCurrentDirection(RIGHT);
            } else if (onTop) {
              setCurrentDirection(TOP_CENTER);
            } else {
              setCurrentDirection(BOTTOM_CENTER);
            }
          } else {
            setCurrentDirection(LEFT);
          }
          break;
        case 'top':
          if (onTop) {
            if ((((dirArr[1] === 'center' || dirArr[1] === LEFT) && !onLeft) || dirArr[1] === RIGHT) && onRight) {
              setCurrentDirection(TOP_RIGHT);
            } else if (
              (((dirArr[1] === 'center' || dirArr[1] === RIGHT) && !onRight) || dirArr[1] === LEFT) &&
              onLeft
            ) {
              setCurrentDirection(TOP_LEFT);
            } else {
              setCurrentDirection(TOP_CENTER);
            }
          } else {
            if (onRight) {
              setCurrentDirection(RIGHT);
            } else if (onLeft) {
              setCurrentDirection(LEFT);
            } else {
              setCurrentDirection(BOTTOM_CENTER);
            }
          }
          break;
        case 'bottom':
          if (onBottom) {
            if ((((dirArr[1] === 'center' || dirArr[1] === LEFT) && !onLeft) || dirArr[1] === RIGHT) && onRight) {
              setCurrentDirection(BOTTOM_RIGHT);
            } else if (
              (((dirArr[1] === 'center' || dirArr[1] === RIGHT) && !onRight) || dirArr[1] === LEFT) &&
              onLeft
            ) {
              setCurrentDirection(BOTTOM_LEFT);
            } else {
              setCurrentDirection(BOTTOM_CENTER);
            }
          } else {
            if (onRight) {
              setCurrentDirection(RIGHT);
            } else if (onLeft) {
              setCurrentDirection(LEFT);
            } else {
              setCurrentDirection(TOP_CENTER);
            }
          }
          break;
        default:
          setCurrentDirection(preference);
          break;
      }
    }
    return (
      <>
        <div
          className={`${styles['tooltip']} ${styles[currentDirection]} ${className}`}
          onMouseEnter={calcLoc}
          data-testid="tooltip-test-id"
          onMouseLeave={() => setCurrentDirection('')}
        >
          <FAIcon
            iconName={'circle-info'}
            theme={Theme.PURPLE}
            className={styles['tooltip-info']}
            iconStyle={IconStyle.SOLID}
          />
          <span className={styles['tooltip-text']} ref={tooltipRef} data-testid="tooltip-text-body-testid">
            <span data-testid="tooltip-message-test">{message}</span>
          </span>
        </div>
      </>
    );
  },
);
Tooltip.displayName = 'Tooltip';

export { TooltipPreference };
export default Tooltip;
