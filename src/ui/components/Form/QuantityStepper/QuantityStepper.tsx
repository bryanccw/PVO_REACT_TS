import { FC, useState, forwardRef } from 'react';
import { FAIcon, IconStyle } from '../../';
import ARIA_LABELS from '../../AccessibiltyLabels';
import { QuantityStepperPropType } from './types/propTypes';
import style from './QuantityStepper.module.scss';
import { QuantityStepperType, QuantityStepperSize } from './types/enums';

const QuantityStepper: FC<QuantityStepperPropType> = forwardRef<HTMLInputElement, QuantityStepperPropType>(
  (
    {
      id = 'quantity',
      name = 'quantity',
      count = 0,
      minCount = 0,
      maxCount = 999,
      type = QuantityStepperType.OUTLINED,
      size = QuantityStepperSize.SMALL,
      disabled = false,
      disableMinusButton = false,
      disablePlusButton = false,
      inputChangeHandler = () => 0,
      minusClickHandler = () => 0,
      plusClickHandler = () => 0,
      ariaLabelledMinus = ARIA_LABELS.QUANTITY_STEPPER_MINUS,
      ariaLabelledPlus = ARIA_LABELS.QUANTITY_STEPPER_PLUS,
    },
    ref,
  ) => {
    const [quantity, setQuantity] = useState(count);
    return (
      <div
        className={`${style['quantity-stepper']} ${style[type]} ${style[size]} ${style[disabled ? 'disabled' : '']}`}
        data-testid="quantity-stepper"
      >
        <div
          role="button"
          aria-label={ariaLabelledMinus}
          className={`${style['minus']} ${
            quantity === minCount || disabled || disableMinusButton ? style['inactive'] : ''
          }`}
          tabIndex={-2}
          data-testid="minus"
          onClick={() => {
            !disabled && !disableMinusButton && quantity > minCount && setQuantity(quantity - 1);
            !disabled && !disableMinusButton && quantity > minCount && minusClickHandler?.(quantity - 1);
          }}
          onKeyDown={() => {
            !disabled && !disableMinusButton && quantity > minCount && setQuantity(quantity - 1);
            !disabled && !disableMinusButton && quantity > minCount && minusClickHandler?.(quantity - 1);
          }}
        >
          <FAIcon iconName={'minus'} className={style['icon']} iconStyle={IconStyle.SOLID} />
        </div>
        <div className={style['quantity']}>
          <input
            type="number"
            data-testid="quantity-value"
            name={name}
            min={minCount}
            max={maxCount}
            id={id}
            ref={ref}
            disabled={disabled}
            value={quantity}
            onChange={e => {
              if (!disabled) {
                e.target.value === undefined
                  ? setQuantity(minCount)
                  : parseInt(e.target.value) > maxCount
                  ? setQuantity(maxCount)
                  : setQuantity(parseInt(e.target.value));
                inputChangeHandler?.(parseInt(e.target.value) || minCount);
              }
            }}
          />
        </div>
        <div
          role="button"
          aria-label={ariaLabelledPlus}
          className={`${style['plus']} ${
            quantity === maxCount || disabled || disablePlusButton ? style['inactive'] : ''
          }`}
          tabIndex={-1}
          data-testid="plus"
          onClick={() => {
            !disabled && !disablePlusButton && quantity < maxCount && setQuantity((quantity || minCount) + 1);
            !disabled && !disablePlusButton && quantity < maxCount && plusClickHandler?.(quantity + 1);
          }}
          onKeyDown={() => {
            !disabled && !disablePlusButton && quantity < maxCount && setQuantity((quantity || minCount) + 1);
            !disabled && !disablePlusButton && quantity < maxCount && plusClickHandler?.(quantity + 1);
          }}
        >
          <FAIcon iconName={'plus'} className={style['icon']} iconStyle={IconStyle.SOLID} />
        </div>
      </div>
    );
  },
);
QuantityStepper.displayName = 'QuantityStepper';
export default QuantityStepper;
export { QuantityStepperType, QuantityStepperSize };
