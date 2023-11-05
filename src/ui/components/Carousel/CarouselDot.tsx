import { FC } from 'react';
import { CarouselDotPropTypes } from './types/propTypes';
import styles from './Carousel.module.scss';

const CarouselDot: FC<CarouselDotPropTypes> = ({ index, isActive, clickHandler = () => 0 }) => (
  <>
    <span
      id={`carousel-dots-${index}`}
      data-testid={`carousel-dots-${index}`}
      role={'presentation'}
      className={`${styles['carousel-ellipses-dot']} ${isActive ? styles['active'] : ''}`}
      onClick={() => clickHandler()}
    ></span>
  </>
);

export default CarouselDot;
