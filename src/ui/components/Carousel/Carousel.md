# Carousel

Carousel renders the carousel component and takes care of the the basic layout as per the Amway design guide. Most of the changeable aspects can be passed through props to customize the appearance.

### Inclusion

```ts
import { Carousel, CarouselPropTypes } from '@nextgen-web-framework/all';

return <Carousel />;
```

Note:- `<Carousel />` takes children elements to display as slides.

### Required Props

| Name     | Description                             |
| -------- | --------------------------------------- |
| children | ReactNodes that are displayed as slides |

### Optional Props

| Name               | Description                                  | Default value | Variable | Option       |
| ------------------ | -------------------------------------------- | ------------- | -------- | ------------ |
| hideButtons        | show / hide left right navigation buttons    | false         | Boolean  | true / false |
| hideDots           | show / hide dots in the bottom of navigation | false         | Boolean  | true / false |
| isAutoScrollEnable | enable auto scroll                           | false         | Boolean  | true / false |
| isInfiniteScroll   | Location Options for icon                    | false         | Boolean  | true / false |
| pauseOnMouseOver   | whether to pause auto scroll on hover        | false         | Boolean  | true / false |
| noOfScrollSecs     | no. of secs to wait before scrolling         | 5             | Number   | -            |
| noOfSlidesDesktop  | no. of slides to display in desktop          | 1             | Number   | -            |
| noOfSlidesMobile   | no. of slides to display in mobile           | -             | Number   | -            |
| noOfSlidesTablet   | no. of slides to display in tablet           | -             | Number   | -            |
| isTileCarousel     | banner carousel or Tile Carousel             |

### Storybook

[link to storybook](https://link_to_storybook)
