import { IconName } from '@fortawesome/fontawesome-svg-core';
import { ReactNode, Dispatch, MutableRefObject, SetStateAction } from 'react';
import { IconStyle } from '../../';
import { GUTTER_SIZE } from './enums';
export interface CarouselPropTypes {
  id?: string;
  children: ReactNode[] | ReactNode;
  hideButtons?: Boolean;
  hideDots?: Boolean;
  isAutoScrollEnable?: Boolean;
  noOfScrollSecs?: number;
  pauseOnMouseOver?: Boolean;
  isInfiniteScroll?: Boolean;
  isTileCarousel: Boolean;
  gutterSize?: GUTTER_SIZE;
}

export interface CarouselButtonPropTypes {
  id?: string;
  icon: IconName;
  iconStyle?: IconStyle;
  iconClass: string;
  clickHandler: () => void;
}

export interface CarouselDotPropTypes {
  index: number;
  isActive: boolean;
  clickHandler: () => void;
}

export interface FiniteCarouselPropTypes {
  children: ReactNode[] | ReactNode;
  hideButtons?: Boolean;
  page: number | null;
  currentSlide: {
    slide: number;
  };
  carouselContainer: MutableRefObject<HTMLDivElement | undefined>;
  carouselItem: MutableRefObject<HTMLDivElement[]>;
  setCurrentSlide: Dispatch<
    SetStateAction<{
      slide: number;
    }>
  >;
  setPageOffset: Dispatch<
    SetStateAction<{
      page: number;
    }>
  >;
  dotsToDisplay: number;
  gutterSize?: GUTTER_SIZE;
  isTileCarousel: Boolean;
  pageOffset?: {
    page: number;
  };
}

export interface InfiniteCarouselPropTypes {
  children: ReactNode[] | ReactNode;
  noOfSlides: number;
  hideButtons?: Boolean;
  currentSlide: {
    slide: number;
  };
  setCurrentSlide: Dispatch<
    SetStateAction<{
      slide: number;
    }>
  >;
  carouselItem: MutableRefObject<HTMLDivElement[]>;
  gutterSize?: GUTTER_SIZE;
}
