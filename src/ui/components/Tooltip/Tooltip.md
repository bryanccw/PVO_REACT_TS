# Tooltip

<a href="https://www.figma.com/file/NmGzJoDRtkn481G3lgg0Z9/Amway-DS-%E2%80%93%C2%A0Global-Core-Components?node-id=825%3A18792">Tooltip</a> UI Component, provide brief information, accepts props for location preferneces and content to be displayed.

### Inclusion

```ts
import { Tooltip, TooltipPreference } from '@nextgen-web-framework/all';

return <Tooltip message={VARIABLE} />;
```

### Required Props

| Name    | Description     |
| ------- | --------------- |
| message | display content |

### Optional Props

| Name       | Description                                          | Default value | Variable          | Option                                                                                 |
| ---------- | ---------------------------------------------------- | ------------- | ----------------- | -------------------------------------------------------------------------------------- |
| preference | Preferred Location when tooltip open                 | TOP_CENTER    | TooltipPreference | LEFT, RIGHT, TOP_CENTER, TOP_LEFT, TOP_RIGHT, BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT |
| className  | Custom class[module.scss] from container application | --            |                   |                                                                                        |

### TooltipPreferenceExport

### Storybook

[link to storybook](https://link_to_storybook)
