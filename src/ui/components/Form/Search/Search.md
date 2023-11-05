# Search

<a href="https://www.figma.com/file/NmGzJoDRtkn481G3lgg0Z9/Amway-DS-%E2%80%93%C2%A0Global-Core-Components?node-id=0%3A14297">Search</a> UI Component, provide search field with customizable event callbacks.

### Inclusion

```ts
import { Search } from "@nextgen-web-framework/all";

return(
<Search
  value={VARIABLE}
  onChange={function}
  onSearch={function}
  />
)
```

### Required Props

| Name     | Description                                               |
| -------- | --------------------------------------------------------- |
| value    | display Search content                                    |
| onChange | Callback Function for `value` changes                     |
| onSearch | Callback Function, on search icon click/Enter key pressed |

### Optional Props

| Name        | Description                                                              | Default value              | Variable |
| ----------- | ------------------------------------------------------------------------ | -------------------------- | -------- |
| data        | Data to be displayed in result drawer                                    | [{},...]                   |
| configData  | Used to define display value `label` and `onSelect` callback             | {label:"",onSelect:()=>{}} |
| onClear     | Callback Function, on `X` icon click                                     | ()=> void                  |
| disabled    | Make Component Enable/Disable                                            | false                      |
| placeholder | placeholder text to be display                                           | --                         |
| className   | Custom class[module.scss] from container application                     | --                         |
| mlpVersion  | Render default variant (MLP1) or SearchBar variant (MLP2)                | MLPVersion.ONE             |
| label       | display label of the component                                           | --                         |
| labelInfo   | works with label property and display additional info in form of tooltip | --                         |
| required    | works with label property and mark component as required                 | false                      |
| message     | text display at bottom of the component                                  | --                         |
| theme       | property to change UI state between error and default                    | --                         | Theme    |

Note:- configData is required with data Prop

### Storybook

[link to storybook](https://link_to_storybook)
