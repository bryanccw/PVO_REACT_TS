# FAIcon

FAIcon is component used to render fontawesome's icon. Only iconName prop is mandatory to render the icon. Theme, IconStyle(Solid, Regular, Brands) can be achieved using different props listed below.

```ts
import { FAIcon, IconStyle, Theme, Shade } from '@nextgen-web-framework/all';

return <FAIcon iconName={'home'} iconStyle={IconStyle.SOLID} theme={Theme.ORANGE} shade={Shade.LIGHT} />;
```

### Required Props

| Name     | Description                                                 |
| -------- | ----------------------------------------------------------- |
| iconName | Icon name listed in in Pro packages (without 'fa-' prefix.) |

### Optional Props

| Name      | Description        | Default value | Variable | Option                                                                                |
| --------- | ------------------ | ------------- | -------- | ------------------------------------------------------------------------------------- |
| theme     | theme for the icon | BLACK         | --       | PURPLE ,BLUE ,ORANGE ,GREEN ,RED ,YELLOW ,SUCCESS ,ERROR ,WARNING ,GRAY ,BLACK ,WHITE |
| shade     | theme shade        | DARK          | --       | DARK, LIGHT                                                                           |
| iconStyle | IconStyle          | REGULAR       | --       | SOLID, REGULAR, BRANDS                                                                |

Note:- For other props like size, animation, visit [Fontawesome styling page](https://fontawesome.com/docs/web/style/styling).

It is rendered in span tag, so, all the props of span element can be passed.

For CMS support, go throught this document [Icon rendering using CMS](https://amwaycloud.atlassian.net/wiki/spaces/NEX/pages/296096497/Icon+rendering+strategy+using+CMS#By-using-CSS+Web-fonts-method)

### Storybook

[link to storybook](https://link_to_storybook)
