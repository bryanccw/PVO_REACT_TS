# RadioButton

RadioButton UI Component, provide HTML Input field with `type=radio`; component is able to perform all radio button operations through prop, UI style can also be changed using props like - theme, className(custom).

### Inclusion

```ts
import { Theme, RadioButton } from '@nextgen-web-framework/all';

return <RadioButton />;
```

### Optional Props

| Name      | Description                                          | Default value | Variable | Option                                  |
| --------- | ---------------------------------------------------- | ------------- | -------- | --------------------------------------- |
| label     | Display content as label of component                | --            |
| className | Custom class[module.scss] from container application | --            |
| theme     | Predefined theme for component                       | --            | Theme    | PURPLE ,ORANGE ,GREEN ,RED ,GRAY ,BLACK |

### Callback Props

| Name     | Description                                  | Default value |
| -------- | -------------------------------------------- | ------------- |
| onChange | Callback Function for `check/uncheck` change | ()=>void      |
| onClick  | Callback Function, on user click             | ()=>void      |

Note:- Addition to above mentioned Events and attribute, other can also be passed via props.

### Storybook

[link to storybook](https://link_to_storybook)
