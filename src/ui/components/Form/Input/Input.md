# Input

`<a href="https://www.figma.com/file/NmGzJoDRtkn481G3lgg0Z9/Amway-DS-%E2%80%93%C2%A0Global-Core-Components?node-id=2479%3A21800">`Input`</a>` UI Component, provide HTML input field with customizable style and event callbacks.

### Inclusion

```ts
import { Input, InputValidations, InputTypes, InputAutoComplete } from '@nextgen-web-framework/all';

return <Input />;
```

Note:- `<Input />` take all HTML input tag attributes like- value, onChange, autoComplete,regex, etc.

### Required Props

| Name | Description                             |
| ---- | --------------------------------------- |
| name | unique string to distinguish an element |

### Optional Props

| Name                | Description                                                          | Default value | Variable          | Option                                                                                 |
| ------------------- | -------------------------------------------------------------------- | ------------- | ----------------- | -------------------------------------------------------------------------------------- |
| message             | Display message below input box                                      | --            |                   |                                                                                        |
| label               | Display label of input box                                           | --            |                   |                                                                                        |
| labelInfo           | Display information in info tooltip                                  | --            |                   |                                                                                        |
| labelInfoPreference | Position of the info tooltip                                         | RIGHT         | TooltipPreference | BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT, LEFT, RIGHT, TOP_CENTER, TOP_LEFT, TOP_RIGHT |
| status              | Can be used to simulate validation events                            | DEFAULT       | InputValidations  | VALID,INVALID                                                                          |
| onClear             | Callback Function, on `X` icon click                                 | ()=> void     |                   |                                                                                        |
| disabled            | Make Component Enable/Disable                                        | false         |                   |                                                                                        |
| className           | Custom class[module.scss] from container application                 | --            |                   |                                                                                        |
| type                | input type                                                           | TEXT          | InputTypes        | TEXT ,NUMBER, EMAIL                                                                    |
| autoComplete        | on/off autocomplete                                                  | OFF           | InputAutoComplete | ON , OFF                                                                               |
| mlpVersion          | to show classic and floating label input, if true show classic input | true          | Boolean           | true,false                                                                             |
| inputIcon           | Display passed icon in the input field                               | --            |                   |                                                                                        |
| inputIconOnClick    | Callback Function, on input right icon click                         | --            |                   |                                                                                        |
| iconImgSrc          | Display passed icon image in the input field                         | --            |                   |                                                                                        |
| iconClassName       | className to customize icon css in the input field                   | --            |                   |                                                                                        |
| prefix              | Display fixed value in the input field                               | --            |                   |                                                                                        |

Note:- label is required with labelInfo Prop

### Storybook

[link to storybook](https://link_to_storybook)
