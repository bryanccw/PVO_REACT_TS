import { FC, forwardRef } from 'react';
import { StepperPropTypes } from './types/propsType';
import styles from './Stepper.module.scss';

const Stepper: FC<StepperPropTypes> = forwardRef<HTMLDivElement, StepperPropTypes>(
  ({ label, currentStep = 0, totalSteps = 0, helperText = '' }, ref) => (
    <div className={styles['stepper']} data-testid="stepper" ref={ref}>
      <div className={styles['stepper-label']}>
        {label && (
          <div className={styles['stepper-text']} data-testid="label">
            {label}
          </div>
        )}
        {helperText && (
          <div className={styles['stepper-helper-text']} data-testid={'helper-text'}>
            {helperText}
          </div>
        )}
      </div>
      <div className={styles['stepper-bar']}>
        <div
          className={styles['stepper-progress']}
          data-testid="progress"
          style={{ width: `calc( (${currentStep} / ${totalSteps}) * 100%)` }}
        ></div>
      </div>
    </div>
  ),
);

Stepper.displayName = 'Stepper';
export default Stepper;
