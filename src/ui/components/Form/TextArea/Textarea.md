# Text Area

Text Area renders the Text Area component and takes care of the the basic layout as per the Amway design guide. Most of the changeable aspects can be passed through props to customize the appearance.
In addition, the component does take some callback methods to handle events such as onChange etc.

### Inclusion

```ts
import { TextArea, MLPVersion } from '@nextgen-web-framework/all';

return(
    <TextArea
        name="text area box 4"
        label="text area label 4"
        value=""
        labelInfo="text area label info"
        cols={2}
        rows={3}
        disabled={false}
        readOnly={true}
        mlpVersion={MLPVersion.ONE | MLPVersion.TWO}
        onChange={(\_e) => {
            /_action here_/
        }}
    />
)

```

### Important props

| Name       | Description                                                  | Default value  |
| ---------- | ------------------------------------------------------------ | -------------- |
| classname  | prop to get custom styling class                             |                |
| label      | adds field label above text area                             |                |
| labelInfo  | adds tooltip icon beside label, renders tooltip info if any  |                |
| status     | defines status of entry if any i.e. default,valid or invalid | default        |
| mlpversion | specifies which version of textarea to use                   | MLPVERSION.ONE |
| message    | message to display under textarea                            | ''             |

### Important event handlers

| Name     | Description                                    | Default behavior |
| -------- | ---------------------------------------------- | ---------------- |
| onChange | captures the onChange event in text area input |                  |
| onFocus  | captures onFocus event on text area            |                  |

### Storybook

[link to storybook](https://link_to_storybook)
