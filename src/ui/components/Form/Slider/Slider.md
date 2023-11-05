# Overview

This is a slider component that will be use for profile banner image cropping

# Scope Inclusions/Exclusions

- This is component is for login user. Hence it **includes**

  1. slider to scale image
  2. Responsiveness

# Design Discussion

- Desktop, Mobile and Tablet Design

# Use Case Description

```ts
import { Slider } from '@nextgen-web-framework/all';
return (
  <Slider
    min="1"
    max="2"
    step="0.01"
    value={value}
    onChange={(_e) => {
      handleImageResize(_e);
    }}
  />
);
```

# Dissected Wireframe(s)

[23-03-2023]: https://www.figma.com/file/eQr2O2mArmJHtU8jQozeUF/MyShop?node-id=529-21405&t=2rduedFs34ft6seF-0

### Input Props

| Name     | Required | Description                              |
| :------- | -------- | ---------------------------------------- |
| min      | yes      | minimum value slider can reach           |
| max      | yes      | maximum value slider can reach           |
| step     | yes      | defines number steps slider will move on |
| value    | yes      | get current value of component           |
| onChange | yes      | callback to update value                 |

Note: <Slider /> component is based on HTML `<input type="range"/>` as it takes all attribute as component props (Except type attribute).

# Performance Considerations to Stay within SLA

1. [x] Accessibility
2. [x] Unit testing and coverage of 100%
3. [x] Storybook
