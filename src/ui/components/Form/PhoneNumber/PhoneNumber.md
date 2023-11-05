# PhoneNumber

<a href="https://www.figma.com/file/NmGzJoDRtkn481G3lgg0Z9/Amway-DS-%E2%80%93%C2%A0Global-Core-Components?node-id=2538%3A22497&t=11QMm4qGUfAK6Tas-0">PhoneNumber</a> UI Component, provide PhoneNumber field with interally using DropDown and Input Component; Takes all HTML input element attributes and share propogated to <Input />, additionally it takes props to control behaviour of <DropDown /> component.

### Inclusion

```ts
import { PhoneNumber, InputTypes } from "@nextgen-web-framework/all";

return(
        <PhoneNumber
          name="UNIQUE_NAME"

          dropdownLabel="Field Label"
          dropdownValue="Value"
          dropdownDisabled={true}
          disabledFilter={true}

          inputLabel="Field Label"
          inputValue="Value"
          inputType?: InputTypes;
          inputDisabled={true}
          inputType={InputTypes.NUMBER}
          onInputChange={callback}
        />
)
```

### Required Props

| Name | Description                          |
| ---- | ------------------------------------ |
| name | unique string to distinguish element |

### Optional Props

| Name             | Description                                                  | Default value              |           | Variable |
| ---------------- | ------------------------------------------------------------ | -------------------------- | --------- | -------- |
| dropdownLabel    | display dropdown label                                       | ""                         |           |          |
| message          | message to show below phone number                           | ""                         |           |          |
| dropdownValue    | display dropdown value                                       | ""                         |           |          |
| dropdownDisabled | make dropdown disabled                                       | false                      |           |          |
| disabledFilter   | make dropdown filter functionality disabled                  | false                      |           |          |
| data             | Data to be displayed in result drawer                        | [{},...]                   |
| configData       | Used to define display value `label` and `onSelect` callback | {label:"",onSelect:()=>{}} |           |          |
| inputLabel       | display input label                                          | ""                         |           |          |
| inputValue       | display input value                                          | ""                         |           |          |
| inputDisabled    | make input disabled                                          | false                      |           |          |
| inputType        | make input filter functionality disabled                     | InputType.TEXT             | InputType |          |
| onInputChange    | onChange callback to input                                   | ()=>void                   |           |          |

| className | Custom class[module.scss] from container application | -- | | |
Note:- configData is required with data Prop, user can use mlp-1 PhoneNumber by passing mlpVersion = {1}.

### Storybook

[link to storybook](https://link_to_storybook)
