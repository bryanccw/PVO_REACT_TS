# PhoneNumber

<a href="https://www.figma.com/file/GWxpl2U8tj2wc9AgaiOEzA/Registration---Core-Alpha-4%2C5?type=design&node-id=5516-157607&t=bpAWbw8OmIWZTzyK-0">SmartInput</a> UI Component, provide PhoneNumber field with interally using DropDown and Input Component; Takes all HTML input element attributes and share propogated to <Input />, additionally it takes props to control behaviour of <DropDown /> component.

### Inclusion

```ts
import { SmartInput ,PhoneNumber, InputTypes, InputValidations } from "@nextgen-web-framework/all";

return(
        <SmartInput
          name="UNIQUE_NAME"

          dropdownLabel="Field Label"
          dropdownValue="Value"
          dropdownDisabled={true}
          disabledFilter={true}

          defaultLabel="Default Label"
          mobileLabel="Mobile Label"
          emailLabel="Email Label"
          inputValue="Value"
          type?: InputType;
          inputType?: InputTypes;
          inputDisabled={true}
          type={InputType.EMAIL_MOBILE}
          inputType={InputTypes.TEXT}
          onInputChange={callback}

          status={InputValidations.VALID}
          message="This is success message"
        />
)
```

### Required Props

| Name | Description                          |
| ---- | ------------------------------------ |
| name | unique string to distinguish element |

### Optional Props

| Name             | Description                                                  | Default value              |            | Variable |
| ---------------- | ------------------------------------------------------------ | -------------------------- | ---------- | -------- |
| dropdownLabel    | display dropdown label                                       | ""                         |            |          |
| dropdownValue    | display dropdown value                                       | ""                         |            |          |
| dropdownDisabled | make dropdown disabled                                       | false                      |            |          |
| disabledFilter   | make dropdown filter functionality disabled                  | false                      |            |          |
| data             | Data to be displayed in result drawer                        | [{},...]                   |
| configData       | Used to define display value `label` and `onSelect` callback | {label:"",onSelect:()=>{}} |            |          |
| defaultLabel     | display default label                                        | ""                         |            |          |
| defaultLabel     | display default label                                        | ""                         |
| mobileLabel      | display mobile label                                         | ""                         |
| emailLabel       | display email value                                          | ""                         |            |          |
| status           | VALID, INVALID status                                        | ""                         |            |          |
| message          | Message to display below                                     | ""                         |            |          |
| inputDisabled    | make input disabled                                          | false                      |            |          |
| smartInputType   | make component static or change dynamically based on input   | InputType.EMAIL_MOBILE     | InputType  |          |
| inputType        | make input filter functionality disabled                     | InputTypes.TEXT            | InputTypes |          |
| onInputChange    | onChange callback to input                                   | ()=>void                   |            |          |

| className | Custom class[module.scss] from container application | -- | | |

### Storybook

[link to storybook](https://link_to_storybook)
