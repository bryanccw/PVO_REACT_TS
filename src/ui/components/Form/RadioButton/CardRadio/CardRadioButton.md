# CardRadioButton

CardRadioButton UI Component, provide HTML Card with icon,title & description and Input field with `type=radio`; component is able to perform all radio button operations through prop, UI style can also be changed using props like - theme, className(custom).

### Inclusion

```
import {Theme} from "@nextgen-web-framework/all/types";

import {CardRadioButton} from "@nextgen-web-framework/all";
import '@nextgen-web-framework/all/cardRadioButton.css';
or
import CardRadioButton from "@nextgen-web-framework/all/CardRadioButton";
import '@nextgen-web-framework/all/cardRadioButton.css';

return(
<CardRadioButton  />
)
```

### Optional Props

| Name                 | Description                                                     | Default value | Variable             | Option                                  |
| -------------------- | --------------------------------------------------------------- | ------------- | -------------------- | --------------------------------------- |
| label                | Display content as label of component                           | --            |
| className            | Custom class[module.scss] from container application            | --            |
| theme                | Predefined theme for component                                  | --            | Theme                | PURPLE ,ORANGE ,GREEN ,RED ,GRAY ,BLACK |
| icon                 | icon to be displayed in card                                    | --            |                      |                                         |
| cardDescription      | card description                                                | --            |                      |                                         |
| divider              | boolean to show horizontal divider between heading and children | false         |                      |                                         |
| radioButtonAlignment | prop to change alignment of radio button within the component   | false         | RadioButtonAlignment | TOP, CENTER                             |

### Callback Props

| Name     | Description                                  | Default value |
| -------- | -------------------------------------------- | ------------- |
| onChange | Callback Function for `check/uncheck` change | ()=>void      |
| onClick  | Callback Function, on user click             | ()=>void      |

Note:- Addition to above mentioned Events and attribute, other can also be passed via props.

### Storybook

[link to storybook](https://link_to_storybook)
