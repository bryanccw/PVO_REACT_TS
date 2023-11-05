import { FC, useRef, useState, useEffect, LegacyRef, forwardRef, useImperativeHandle, Children } from 'react';
import { CarouselPropTypes } from './types/propTypes';
import InfiniteScroll from './InfiniteScroll';
import FiniteCarousel from './FiniteCarousel';
import CarouselDot from './CarouselDot';
import styles from './Carousel.module.scss';
import { GUTTER_SIZE } from './types/enums';

const Carousel: FC<CarouselPropTypes> = forwardRef<HTMLDivElement | undefined, CarouselPropTypes>(
  (
    {
      id,
      children,
      hideButtons,
      hideDots,
      isAutoScrollEnable,
      isTileCarousel = true,
      isInfiniteScroll = false,
      noOfScrollSecs = 5,
      pauseOnMouseOver,
      gutterSize = GUTTER_SIZE.MEDIUM,
    },
    ref,
  ) => {
    const [itemWidth, setItemWidth] = useState({
      width: 0,
    });
    // Ref for Container Div to calculate total width
    const carouselContainer = useRef<HTMLDivElement>();
    useImperativeHandle(ref, () => carouselContainer.current);
    // Ref for Items(slides) Div to calculate width of items
    const carouselItem = useRef<HTMLDivElement[]>([]);
    // State to maintain count of slides we can show in page
    const [noOfSlides, setNoOfSlides] = useState({
      slidesCount: 1,
    });
    const [currentSlide, setCurrentSlide] = useState<{
      slide: number;
    }>({
      slide: 0,
    });
    // State for Dots page change
    const [pageOffset, setPageOffset] = useState<{
      page: number;
    }>({ page: 0 });
    // State for page change on manual drag or scroll
    const [page, setPage] = useState<null | number>(0);
    // No. of Dots to show
    const [dotsToDisplay, setDotsToDisplay] = useState(1);
    const [intervalId, setIntervalId] = useState<string | number | undefined | NodeJS.Timeout>(undefined);
    // Remove AutoScroll Interval
    const removeInterval = () => clearInterval(intervalId);
    // Resume AutoScroll Interval
    const resumeInterval = () => {
      removeInterval();
      setIntervalId(
        isAutoScrollEnable
          ? setInterval(() => {
              if (!isInfiniteScroll) {
                setPageOffset(val => ({
                  page: val.page === dotsToDisplay - 1 ? 0 : (val.page ?? 0) + 1,
                }));
              } else {
                setCurrentSlide(v => {
                  let _currentSlide = v.slide + noOfSlides.slidesCount;
                  if (_currentSlide > Children.count(children)) {
                    _currentSlide = _currentSlide - Children.toArray(children ?? []).length;
                  }
                  return { slide: _currentSlide };
                });
              }
            }, noOfScrollSecs * 1000)
          : undefined,
      );
    };

    // Handle mouse scroll or drag scroll event
    const scrollHandler = () => {
      carouselContainer?.current?.removeEventListener('scroll', () => 0);
      carouselContainer?.current?.addEventListener('scroll', () => scrollListener());
    };

    // we need to calculate page number based on scroll
    const scrollListener = () => {
      const childArr = Children.count(children);
      const containerScrollLeft = carouselContainer?.current?.scrollLeft ?? 0;
      const containerScrollWidth = carouselContainer.current?.scrollWidth ?? 0;
      if (isTileCarousel) {
        const itemWidth = carouselItem?.current?.[0].clientWidth ?? 0;
        const tile = (containerScrollLeft / containerScrollWidth) * childArr;
        // Re - Calculate noOfSlides, dotsToDisplay since this is event and does not get updated values from react
        let noOfSlides = 0;
        // firstly calculating noOfSlides without 16 gap just to get an estimate
        noOfSlides = Math.floor(((carouselContainer.current?.clientWidth ?? 0) - 32) / itemWidth);
        noOfSlides = Math.floor(
          ((carouselContainer.current?.clientWidth ?? 0) - 32 - (noOfSlides - 1) * 16) / itemWidth,
        );
        noOfSlides = noOfSlides === 0 ? 1 : noOfSlides;
        let dotsToDisplay = 0;
        dotsToDisplay = Math.ceil(childArr / noOfSlides);
        setPage(
          containerScrollWidth - 16 < containerScrollLeft + ((noOfSlides + 1) * itemWidth + noOfSlides * 16)
            ? dotsToDisplay - 1
            : parseInt(String((containerScrollLeft - 16 * (tile - 1)) / (itemWidth * noOfSlides))),
        );
      } else {
        const page = Math.ceil(
          // in case of Hero Banner we dont have in between gap of 16px but
          // our first tile starts from 16px padding left thats why adding 16
          ((containerScrollLeft + 16) / containerScrollWidth) * childArr,
        );
        setPage(page - 1 < 0 ? 0 : page - 1);
      }
    };

    // PageOffset is updated by Buttons and Dots
    useEffect(() => {
      !isInfiniteScroll && setCurrentSlide({ slide: pageOffset.page * noOfSlides.slidesCount });
    }, [pageOffset]);

    // Change of Slide
    useEffect(() => {
      // Timeout to let UI reflect items on initial load
      setTimeout(() => {
        carouselContainer?.current?.scrollTo({
          behavior: 'smooth', // TO enable smooth scroll
          left: isTileCarousel
            ? carouselItem?.current?.[currentSlide.slide ?? 0]?.scrollWidth * (currentSlide.slide ?? 0) +
              (isTileCarousel ? 16 : 0) * ((currentSlide.slide ?? 0) - 1)
            : carouselItem?.current?.[currentSlide.slide ?? 0]?.offsetLeft,
        });
      }, 0);
      setItemWidth({ width: carouselItem?.current?.[0]?.clientWidth });
      scrollHandler();
    }, [currentSlide, children]);

    // Based on width of an item we calculate no of slides we can fit in a single frame.
    useEffect(() => {
      if (carouselContainer.current?.clientWidth && itemWidth.width) {
        let possibleItems = Math.floor(((carouselContainer.current?.clientWidth ?? 0) - 32) / itemWidth.width);
        possibleItems = Math.floor(
          ((carouselContainer.current?.clientWidth ?? 0) - 32 - (possibleItems - 1) * 16) / itemWidth.width,
        );
        setNoOfSlides({ slidesCount: possibleItems === 0 ? 1 : possibleItems });
      }
    }, [itemWidth]);

    // Based upon no of slides we can fit we calculate the no of dots we need to display at the bottom of the carousel.
    useEffect(() => {
      setDotsToDisplay(Math.ceil(Children.count(children) / (isTileCarousel ? noOfSlides.slidesCount : 1)));
    }, [noOfSlides]);

    useEffect(() => {
      const timer = setTimeout(() => {
        setItemWidth({ width: carouselItem?.current?.[0]?.clientWidth });
      }, 0);
      // If AutoScroll is enabled set interval
      isAutoScrollEnable && resumeInterval();
      return () => {
        removeInterval();
        clearTimeout(timer);
      };
    }, [global?.window?.innerWidth]);

    return (
      <>
        <div
          id={id}
          data-testid="carousel"
          ref={carouselContainer as LegacyRef<HTMLDivElement>}
          className={`${styles['carousel']} ${isTileCarousel ? styles['tile-carousel'] : styles['banner-carousel']} ${
            hideDots ? styles['hide-dots'] : ''
          }`}
          onFocus={() => pauseOnMouseOver && removeInterval()}
          onMouseOver={() => pauseOnMouseOver && removeInterval()}
          onBlur={() => pauseOnMouseOver && resumeInterval()}
          onMouseOut={() => pauseOnMouseOver && resumeInterval()}
        >
          {isInfiniteScroll ? (
            <InfiniteScroll
              noOfSlides={noOfSlides.slidesCount}
              hideButtons={hideButtons}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              carouselItem={carouselItem}
            >
              {children}
            </InfiniteScroll>
          ) : (
            <FiniteCarousel
              page={page}
              hideButtons={hideButtons}
              currentSlide={currentSlide}
              carouselItem={carouselItem}
              carouselContainer={carouselContainer}
              setCurrentSlide={setCurrentSlide}
              setPageOffset={setPageOffset}
              dotsToDisplay={dotsToDisplay}
              gutterSize={gutterSize}
              isTileCarousel={isTileCarousel}
              pageOffset={pageOffset}
            >
              {children}
            </FiniteCarousel>
          )}
        </div>
        {!hideDots && !isInfiniteScroll && dotsToDisplay > 1 && (
          <div className={`${styles['carousel-ellipses']} ${!isTileCarousel ? styles['inset'] : ''}`}>
            {[...new Array(dotsToDisplay ?? 0)].map((e, i) => (
              <CarouselDot
                index={i}
                key={`dot${+i}`}
                isActive={page === i}
                clickHandler={() =>
                  setPageOffset({
                    page: i,
                  })
                }
              />
            ))}
          </div>
        )}
      </>
    );
  },
);
Carousel.displayName = 'Carousel';
export default Carousel;
export type { CarouselPropTypes, GUTTER_SIZE };
