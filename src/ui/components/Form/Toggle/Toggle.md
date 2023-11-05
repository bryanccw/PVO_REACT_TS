# Toggle

Toggle renders the toggle component and takes care of the the basic layout as per the Amway design guide. Most of the changeable aspects can be passed through props to customize the appearance.
In addition, the component does take some callback methods to handle DOM events such as onClick etc.

### Inclusion

```ts
import { Toggle } from '@nextgen-web-framework/all';
import { ToggleStyle } from '@nextgen-web-framework/all';

return <Toggle />;
```

### Required props

| Name        | Description                                                                    | Default value | Variable    | Option                                  |
| ----------- | ------------------------------------------------------------------------------ | ------------- | ----------- | --------------------------------------- |
| toggleStyle |                                                                                | switch        | ToggleStyle |
| icon        | it can only be used with `toggleStyle = ToggleStyle.INDIVIDUAL`                | --            |             |
| tabList     | it is required with `toggleStyle = ToggleStyle.TABS`, displays Tab Names/Icons | []            |             |
| activeTab   | it is required with `toggleStyle = ToggleStyle.TABS`, sets active Tab          | 1             |             |
| iconOnly    | it is required with `toggleStyle = ToggleStyle.TABS`, when Icon to be display  | false         |             |
| theme       | Predefined theme for component                                                 | --            | Theme       | PURPLE, BLUE ,ORANGE ,GREEN,RED ,YELLOW |
| className   | Custom class[module.scss] from container application                           | --            |

### Important DOM event handlers

| Name    | Description                                     |
| ------- | ----------------------------------------------- |
| onClick | user click event return details of clicked item |

### Storybook

[link to storybook](https://link_to_storybook)
