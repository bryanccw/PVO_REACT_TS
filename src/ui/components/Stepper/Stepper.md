# Stepper

<a href="https://www.figma.com/file/NmGzJoDRtkn481G3lgg0Z9/Amway-DS-–%C2%A0Global-Core-Components?type=design&node-id=31990-143933&t=Plyl5wKCcVDNIGHf-0">Stepper</a> UI Component, provide a progress bar for steps.

### Inclusion

```ts
import { Stepper } from '@nextgen-web-framework/all';

return <Stepper currentStep={VARIABLE} totalSteps={VARIABLE} />;
```

### Required Props

| Name        | Description           |
| ----------- | --------------------- |
| currentStep | active step           |
| totalSteps  | total number of steps |

### Optional Props

| Name | Description | Default value |
| label | text above the progress bar | '' |
| helperText | text to be displayed on right side.| '' |

### Storybook

[link to storybook](https://link_to_storybook)
