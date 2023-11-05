# DropDown

<a href="https://www.figma.com/file/NmGzJoDRtkn481G3lgg0Z9/Amway-DS-%E2%80%93%C2%A0Global-Core-Components?node-id=2538%3A22497&t=11QMm4qGUfAK6Tas-0">Dropdown</a> UI Component, provide Dropdown field with customizable event callbacks.

### Inclusion

```ts
import { DropDown, DropDownValidations } from '@nextgen-web-framework/all';

return (
  <DropDown
    disabled={false}
    status={DropDownValidations.VALID}
    dropdownLabel={'Field Label'}
    message={'Message'}
    value={dropdownValue}
    mlpVersion={1}
  />
);
```

### Required Props

| Name | Description                          |
| ---- | ------------------------------------ |
| name | unique string to distinguish element |

### Optional Props

| Name                | Description                                                  | Default value              | Variable            | Option                                                                                 |
| ------------------- | ------------------------------------------------------------ | -------------------------- | ------------------- | -------------------------------------------------------------------------------------- |
| placeholder         | display placeholder of dropdown                              | ""                         |                     |                                                                                        |
| mlpVersion          | defines type of dropdown user wants to use                   | 2                          | MLPVersion          | ONE, TWO                                                                               |
| multiSelection      | users allow to select multiple values                        | false                      | Boolean             | true, false                                                                            |
| data                | Data to be displayed in result drawer                        | [{},...]                   |                     |                                                                                        |
| value               | Value to displayed in dropdown box                           |                            |                     |                                                                                        |
| message             | message to displayed below dropdown box                      |                            |                     |                                                                                        |
| status              | change component status                                      | DEFAULT                    | DropDownValidations | DEFAULT, VALID, INVALID                                                                |
| dropdownLabel       | dropdownLabel to give label to dropdown                      |                            |                     |                                                                                        |
| labelInfo           | Display information in info tooltip                          | --                         |                     |                                                                                        |
| labelInfoPreference | Position of the info tooltip                                 | RIGHT                      | TooltipPreference   | BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT, LEFT, RIGHT, TOP_CENTER, TOP_LEFT, TOP_RIGHT |
| configData          | Used to define display value `label` and `onSelect` callback | {label:"",onSelect:()=>{}} |                     |                                                                                        |
| onClear             | Callback Function, on `X` icon click                         | ()=> void                  |                     |                                                                                        |
| disabled            | Make Component Enable/Disable                                | false                      |                     |                                                                                        |
| placeholder         | placeholder text to be display                               | --                         |                     |                                                                                        |
| className           | Custom class[module.scss] from container application         | --                         |                     |                                                                                        |
| width               | Predefined width for component                               | css set in DropDownMLP1/2  |                     |                                                                                        |
| top                 | Predefined top for the selection                             | css set in DropDownMLP1/2  |                     |                                                                                        |
| onClick             | Callback Function, on click on section of dropdown box       | ()=> void                  |                     |                                                                                        |
| theme               | Predefined theme for component                               | --                         | Theme               | BLACK                                                                                  |
| isWithinModal       | if the dropdown is with a modal                              | Boolean                    | Boolean             | true, false                                                                            |

Note:- configData is required with data Prop, user can use mlp-1 dropdown by passing mlpVersion = {1}.

### Storybook

[link to storybook](https://link_to_storybook)
