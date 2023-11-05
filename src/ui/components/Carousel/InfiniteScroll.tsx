import { FC, useState, useEffect, ReactNode, Children } from 'react';
import { IconStyle } from '../';
import CarouselButton from './CarouselButton';
import { InfiniteCarouselPropTypes } from './types/propTypes';
import styles from './Carousel.module.scss';
import { GUTTER_SIZE } from './types/enums';

const InfiniteScroll: FC<InfiniteCarouselPropTypes> = ({
  children,
  noOfSlides,
  hideButtons = false,
  currentSlide,
  setCurrentSlide,
  carouselItem,
  gutterSize = GUTTER_SIZE.MEDIUM,
}) => {
  // Reference
  // State
  const [childNodes, setChildNodes] = useState<ReactNode[]>([]);

  // Effect for Initialization
  useEffect(() => {
    setChildNodes([
      ...Children.toArray(children).slice(-noOfSlides), // previous
      ...Children.toArray(children), // current
      ...Children.toArray(children).slice(0, noOfSlides), // next
    ]);

    setCurrentSlide({ slide: noOfSlides });
  }, []);

  const nextSlides = () => {
    const _currentSlide = currentSlide.slide + noOfSlides;
    setCurrentSlide({
      slide:
        _currentSlide > Children.toArray(children).length
          ? _currentSlide - Children.toArray(children).length
          : _currentSlide,
    });
  };

  const previousSlides = () => {
    const _currentSlide = currentSlide.slide || noOfSlides;
    setCurrentSlide({
      slide:
        _currentSlide - noOfSlides < noOfSlides
          ? _currentSlide + (Children.toArray(children).length - noOfSlides)
          : _currentSlide - noOfSlides,
    });
  };

  return (
    <>
      {!hideButtons && (
        <CarouselButton
          icon={'chevron-left'}
          iconStyle={IconStyle.SOLID}
          data-testid="carousel-button-left"
          iconClass={styles['carousel-button-left']}
          clickHandler={() => previousSlides()}
        />
      )}
      {childNodes.map((e, i) => (
        <div
          className={`${styles['carousel-item']} ${styles[`gutter-${gutterSize}`]}`}
          data-testid={`carousel-item-${i}`}
          ref={(el: HTMLDivElement) => (carouselItem.current[i] = el)}
          key={`node${+i}`}
          id={`carousel-item-${i} ${currentSlide.slide === i ? 'active' : ''}`}
          style={{
            minWidth: Number(noOfSlides) === 1 ? '100%' : `calc((100% - ${18 * (noOfSlides + 1)}px) / ${noOfSlides})`,
          }}
        >
          {e}
        </div>
      ))}
      {!hideButtons && (
        <CarouselButton
          icon={'chevron-right'}
          iconStyle={IconStyle.SOLID}
          data-testid="carousel-button-right"
          iconClass={styles['carousel-button-right']}
          clickHandler={() => nextSlides()}
        />
      )}
    </>
  );
};

export default InfiniteScroll;
