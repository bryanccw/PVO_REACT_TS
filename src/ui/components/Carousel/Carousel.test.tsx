import { render, cleanup, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';

const CarouselComponent = (args = {}) => (
  <Carousel isTileCarousel={true} {...args}>
    <div style={{ minWidth: '200px' }}>A</div>
    <div style={{ minWidth: '200px' }}>B</div>
    <div style={{ minWidth: '200px' }}>C</div>
    <div style={{ minWidth: '200px' }}>D</div>
    <div style={{ minWidth: '200px' }}>A1</div>
    <div style={{ minWidth: '200px' }}>B1</div>
    <div style={{ minWidth: '200px' }}>C1</div>
    <div style={{ minWidth: '200px' }}>D1</div>
  </Carousel>
);
describe('Carousel Component Test Cases', () => {
  afterEach(cleanup);
  test('Carousel Component mounted', () => {
    const { getByTestId } = render(CarouselComponent());
    const carousel = getByTestId('carousel');
    expect(carousel).toBeInTheDocument();
  });
  test('Carousel Component mounted and scrolled', () => {
    const { getByTestId } = render(CarouselComponent());
    const carousel = getByTestId('carousel');
    fireEvent.scroll(carousel);
    expect(carousel).toBeInTheDocument();
  });
  test('Carousel Component with isInfiniteScroll mounted', () => {
    const { getByTestId } = render(CarouselComponent({ isInfiniteScroll: true }));
    const carousel = getByTestId('carousel');
    expect(carousel).toBeInTheDocument();
    const leftButton = getByTestId('carousel-button-left');
    const rightButton = getByTestId('carousel-button-right');
    fireEvent.click(leftButton);
    fireEvent.click(rightButton);
    expect(leftButton).toBeInTheDocument();
    expect(rightButton).toBeInTheDocument();
  });
  test('Carousel Component should render all tiles', () => {
    const { getByTestId } = render(CarouselComponent());
    const carousel1 = getByTestId('carousel-item-0');
    const carousel2 = getByTestId('carousel-item-1');
    const carousel3 = getByTestId('carousel-item-2');
    const carousel4 = getByTestId('carousel-item-3');

    expect(carousel1).toBeInTheDocument();
    expect(carousel2).toBeInTheDocument();
    expect(carousel3).toBeInTheDocument();
    expect(carousel4).toBeInTheDocument();
  });
  test('Carousel Component should render right navigation button', () => {
    const { getByTestId } = render(CarouselComponent({ isTileCarousel: false }));
    const rightButton = getByTestId('carousel-button-right');
    fireEvent.click(rightButton);
    expect(rightButton).toBeInTheDocument();
  });
  test('Carousel Component should hide buttons', () => {
    render(
      CarouselComponent({
        hideButtons: true,
      }),
    );
    expect(document.querySelector('carousel-button-left')).toBe(null);
    expect(document.querySelector('carousel-button-right')).toBe(null);
  });
  test('Carousel Component should render navigation dots', () => {
    const { getByTestId } = render(CarouselComponent());
    const dots = getByTestId('carousel-dots-0');
    expect(dots).toBeInTheDocument();
  });
  test('Carousel Component should hide dots', () => {
    render(
      CarouselComponent({
        hideDots: true,
      }),
    );
    expect(document.querySelector('carousel-ellipses-dot')).toBe(null);
  });
  // Button Click
  test('Carousel Component left right buttons should be clickable.', () => {
    const { getByTestId } = render(CarouselComponent({}));
    expect(document.getElementsByClassName('carousel-item active')[0].innerHTML).toBe(
      '<div style="min-width: 200px;">A</div>',
    );
    fireEvent(
      getByTestId('carousel-button-right'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(document.getElementsByClassName('carousel-item active')[0].innerHTML).toBe(
      '<div style="min-width: 200px;">B</div>',
    );
  });
  // Dot Click
  test('Carousel Component Dots should be clickable.', () => {
    const { getByTestId } = render(CarouselComponent({}));
    expect(document.getElementsByClassName('carousel-item active')[0].innerHTML).toBe(
      '<div style="min-width: 200px;">A</div>',
    );
    fireEvent(
      getByTestId('carousel-dots-1'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(document.getElementsByClassName('carousel-item active')[0].innerHTML).toBe(
      '<div style="min-width: 200px;">B</div>',
    );
    fireEvent(
      getByTestId('carousel-dots-0'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(document.getElementsByClassName('carousel-item active')[0].innerHTML).toBe(
      '<div style="min-width: 200px;">A</div>',
    );
  });
  test('Carousel Component interval ', () => {
    const { getByTestId } = render(CarouselComponent({ pauseOnMouseOver: true }));
    const element = getByTestId('carousel');
    fireEvent.focus(element);
    fireEvent.mouseOut(element);
    fireEvent.blur(element);
    fireEvent.mouseOver(element);
    expect(element).toBeInTheDocument();
  });
});
