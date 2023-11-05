# Pill

`<a href="https://www.figma.com/file/gRZuKlCwt91sX116bB9L0o/PDP---Alpha-2?node-id=2806%3A110571&t=a50U8K8jap5IuAHn-0">`Pill `</a>` UI Component, provides Pills component with event and styels.

### Inclusion

```ts
import { Pill, PillStyle, PillType, Theme } from '@nextgen-web-framework/all';

//basic
return <Pill title="Basic pill" disabled={true} selected={true} icon={{ icon: faCalendar }} />;

//chip
return <Pill title="Chip" pillStyle={PillStyle.CHIP} selected={true} icon={{ icon: faCalendar }} />;

//chip with solid type
return (
  <Pill title="Chip" pillStyle={PillStyle.CHIP} pillType={PillType.SOLID} selected={true} icon={{ icon: faCalendar }} />
);

//chip with different theme and right icon
return (
  <Pill title="Chip" pillStyle={PillStyle.CHIP} theme={Theme.ORANGE} selected={true} icon={{ icon: faCalendar }} />
);
```

### Optional Props

| Name               | Description                                                         | Default value | Variable          |
| ------------------ | ------------------------------------------------------------------- | ------------- | ----------------- | ------------------------------------------------------------------------------------- |
| icon               | Nextgen-framework icon                                              | --            | IconPropInterface |
| rightIcon          | Nextgen-framework FAIcon                                            | --            | RightIcon         |
| theme              | Predefined theme for component                                      | --            | Theme             | PURPLE ,BLUE ,ORANGE ,GREEN ,RED ,YELLOW ,SUCCESS ,ERROR ,WARNING ,GRAY ,BLACK ,WHITE |
| title              | Provides title to the pill component                                |               |
| colorCode          | Provides colorCode to the swatch pill component                     |               |
| imgSrc             | Provides imgSrc to the image pill component                         |               |
| className          | Custom class from container application                             | --            |
| disabled           | Make Pill Component Enable/Disable                                  | false         |
| selected           | tells Pill Component selected or not                                | false         |
| className="active" | tells Pill Component selected or not even if selected prop is false | false         |
| pillStyle          | Provides different style for pill                                   | DEFAULT       | PillStyle         |
| pillType           | Provides different type of chip i.e., Solid or Outline              | OUTLINE       | PillType          |
| onClick            | Callback Function, on click on Pill component                       | ()=> void     |

### Storybook

[link to storybook](https://link_to_storybook)
