# Button

Button renders the button component and takes care of the the basic layout as per the Amway design guide. Most of the changeable aspects can be passed through props to customize the appearance.
In addition, the component does take some callback methods to handle DOM events such as onClick etc.

### Inclusion

```ts
import { Button, ButtonIconPosition, ButtonStyles, ButtonSize, ButtonTypes } from '@nextgen-web-framework/all';

return <Button />;
```

Note:- `<Button />` take all HTML button tag attributes and events like- onClick,onHover, etc.

### Optional Props

| Name         | Description                                          | Default value | Variable           | Option                                                                                |
| ------------ | ---------------------------------------------------- | ------------- | ------------------ | ------------------------------------------------------------------------------------- |
| type         | Change Size of Button                                | --            | ButtonTypes        | SUBMIT,RESET,BUTTON                                                                   |
| size         | Change Size of Button                                | --            | ButtonSize         | SMALL,MEDIUM                                                                          |
| buttonStyle  | Provides Style Option                                | --            | ButtonStyles       | SOLID,OUTLINE                                                                         |
| icon         | Nextgen-framework icon                               | --            | IconPropInterface  |                                                                                       |
| iconPosition | Location Options for icon                            | --            | ButtonIconPosition | LEFT, RIGHT                                                                           |
| theme        | Predefined theme for component                       | --            | Theme              | PURPLE ,BLUE ,ORANGE ,GREEN ,RED ,YELLOW ,SUCCESS ,ERROR ,WARNING ,GRAY ,BLACK ,WHITE |
| className    | Custom class[module.scss] from container application | --            |
| buttonWidth  | Change width of Button                               | FIT_CONTENT   | ButtonWidth        | FIT_CONTENT, FULL_WIDTH                                                               |

### Storybook

[link to storybook](https://link_to_storybook)
