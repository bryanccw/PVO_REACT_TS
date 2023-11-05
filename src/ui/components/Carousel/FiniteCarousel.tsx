import { FC, useState, useEffect, ReactNode, Children } from 'react';
import { IconStyle } from '../';
import CarouselButton from './CarouselButton';
import { FiniteCarouselPropTypes } from './types/propTypes';
import styles from './Carousel.module.scss';
import { GUTTER_SIZE } from './types/enums';
const FiniteCarousel: FC<FiniteCarouselPropTypes> = ({
  children,
  currentSlide,
  hideButtons = false,
  page,
  carouselContainer,
  carouselItem,
  dotsToDisplay,
  gutterSize = GUTTER_SIZE.MEDIUM,
  isTileCarousel,
  setCurrentSlide,
  setPageOffset,
}) => {
  // State
  const [hideLeftButton, setHideLeftButton] = useState(true);
  const [hideRightButton, setHideRightButton] = useState(dotsToDisplay === 1);
  const [childNodes, setChildNodes] = useState<ReactNode[]>([]);

  useEffect(() => {
    setHideRightButton(dotsToDisplay === 1);
  }, [dotsToDisplay]);
  // Effect for Initialization
  useEffect(() => {
    setChildNodes([
      ...Children.toArray(children), // current
    ]);
    setCurrentSlide({ slide: 0 });

    const element = carouselContainer.current;
    element?.addEventListener('scroll', () => {
      setHideRightButton(element.scrollWidth - (element.scrollLeft + element.clientWidth) < 2);
      setHideLeftButton(element.scrollLeft === 0);
    });

    return () => element?.removeEventListener('scroll', () => undefined);
  }, [children]);

  return (
    <>
      {!hideButtons && !hideLeftButton && Children.count(children) ? (
        <CarouselButton
          id={'carousel-button-left'}
          icon={'chevron-left'}
          iconStyle={IconStyle.SOLID}
          iconClass={styles['carousel-button-left']}
          data-testid="carousel-button-left"
          clickHandler={() => {
            page === 0
              ? carouselContainer.current?.scrollTo({
                  left: 0,
                  behavior: 'smooth',
                })
              : setPageOffset({ page: (page ?? 1) - 1 });
          }}
        />
      ) : (
        <></>
      )}
      {childNodes.map((e, i) => (
        <div
          className={`${styles['carousel-item']} ${currentSlide.slide === i ? styles['active'] : ''} ${
            isTileCarousel ? styles[`gutter-${gutterSize}`] : ''
          }`}
          data-testid={`carousel-item-${i}`}
          ref={(el: HTMLDivElement) => (carouselItem.current[i] = el)}
          key={`node${+i}`}
          id={`carousel-item-${i}`}
          style={{
            minWidth: !isTileCarousel ? '100%' : 'auto',
          }}
        >
          {e}
        </div>
      ))}
      {!hideButtons && !hideRightButton && Children.count(children) ? (
        <CarouselButton
          id={'carousel-button-right'}
          icon={'chevron-right'}
          iconStyle={IconStyle.SOLID}
          data-testid="carousel-button-right"
          iconClass={styles['carousel-button-right']}
          clickHandler={() => {
            dotsToDisplay - 1 === page
              ? carouselContainer.current?.scrollTo({
                  left: carouselContainer.current.scrollWidth,
                  behavior: 'smooth',
                })
              : setPageOffset({ page: (page ?? 0) + 1 });
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default FiniteCarousel;
