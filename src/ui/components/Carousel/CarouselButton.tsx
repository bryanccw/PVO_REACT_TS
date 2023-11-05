import { FC } from 'react';
import { FAIcon } from '../';
import { CarouselButtonPropTypes } from './types/propTypes';
import styles from './Carousel.module.scss';

const CarouselButton: FC<CarouselButtonPropTypes> = ({
  id,
  icon,
  iconStyle,
  iconClass = '',
  clickHandler = () => 0,
  ...restProps
}) => (
  <>
    <div
      role={'presentation'}
      data-testid={`${iconClass}`}
      id={id}
      onClick={() => clickHandler()}
      className={`${styles['carousel-button']} ${iconClass}`}
      {...restProps}
    >
      <FAIcon iconName={icon} iconStyle={iconStyle} />
    </div>
  </>
);

export default CarouselButton;
