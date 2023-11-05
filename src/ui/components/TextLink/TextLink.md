## Textlink

<a href="https://www.figma.com/file/NmGzJoDRtkn481G3lgg0Z9/Amway-DS-%E2%80%93%C2%A0Global-Core-Components?node-id=12053%3A100329">Textlink</a> UI Component, provides HTML anchor with Design style, accepts all anchor properties and styling related props for UI customization.

### Inclusion

```ts
import {
  Theme,
  LinkTarget,
  Textlink,
  TextLinkIconPosition,
  TextLinkStyle,
  TextLinkUnderlineStyle,
  TextLinkPropsTypes,
} from '@nextgen-web-framework/all';

return <Textlink text={VARIABLE} />;
```

### Required Props

| Name | Description     |
| ---- | --------------- |
| text | display content |

### Optional Props

| Name          | Description                          | Default value | Variable               | Option                                                    |
| ------------- | ------------------------------------ | ------------- | ---------------------- | --------------------------------------------------------- |
| textLinkStyle | Provides Style Option                | CHEVRON       | TextLinkStyle          | CHEVRON, CHEVRONUNDERLINE, ICON, ICONUNDERLINE, UNDERLINE |
| disabled      | Make Component Enable/Disable        | false         |
| icon          | Nextgen-framwork icon                | --            | IconPropInterface      |                                                           |
| iconPosition  | Location Options for icon            | LEFT          | TextLinkIconPosition   | LEFT, RIGHT                                               |
| underline     | Option to change underline Behaviour | HOVER         | TextLinkUnderlineStyle | HOVER, NOHOVER ,FIXED                                     |
| target        | Define Redirection action            | SELF          | LinkTarget             | BLANK, SELF,PARENT ,TOP ,FRAMENAME                        |
| theme         | Predefined theme for component       | --            | Theme                  | PURPLE, BLUE ,ORANGE ,GREEN,RED ,YELLOW                   |
|               |

### Storybook

[link to storybook](https://link_to_storybook)
