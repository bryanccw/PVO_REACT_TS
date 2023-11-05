import { FC, useEffect, useRef, MutableRefObject } from 'react';
import { SliderProps } from './types/propTypes';
import styles from './Slider.module.scss';
const Slider: FC<SliderProps> = (props: SliderProps): JSX.Element => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (inputRef.current) {
      computeStyle(Number(props.value));
    }
  }, [props]);

  const computeStyle = (value: number) => {
    // below line computes the current state of slider thumb and provides the upper limit of covered area by slider.
    const limit = value * (100 / Number(props.max));
    inputRef.current.style.background = `linear-gradient(to right,
      ${styles.darkPurple} 0%,
      ${styles.darkPurple} ${limit}%,
    ${styles.lightPurple} ${limit}%,
    ${styles.lightPurple} 100%)`;
  };
  return (
    <div className={styles['slider-container']} data-testid="slider-test-id">
      <input
        type="range"
        ref={inputRef}
        className={styles['slider-input']}
        data-testid="slider-input-testid"
        {...props}
      />
    </div>
  );
};

export default Slider;
