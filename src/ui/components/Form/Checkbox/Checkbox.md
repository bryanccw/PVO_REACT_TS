# Checkbox

Provides Checkbox UI Component, render HTML input tag with type 'checkbox' with Styling and events as per Design standards.

### Inclusion

```ts
import { Checkbox } from '@nextgen-web-framework/all';

return <Checkbox text={VARIABLE} />;
```

### Required Props

| Name | Description           |
| ---- | --------------------- |
| text | display label content |

Note:- `<Checkbox />` take all HTML input[type='checkbox'] tag attributes and events like- checked, etc.

### Optional Props

| Name          | Description                    | Default value | Variable | Option                                                                                |
| ------------- | ------------------------------ | ------------- | -------- | ------------------------------------------------------------------------------------- |
| checkboxStyle | Provides Style Option          | SOLID         | TagStyle | SOLID, OUTLINE                                                                        |
| Theme         | Predefined theme for component | BLACK         | Theme    | PURPLE ,BLUE ,ORANGE ,GREEN ,RED ,YELLOW ,SUCCESS ,ERROR ,WARNING ,GRAY ,BLACK ,WHITE |
| disabled      | Make Component Enable/Disable  | false         |

### Storybook

[link to storybook](https://link_to_storybook)
