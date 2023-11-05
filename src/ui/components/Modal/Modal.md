# Modal

<a href="https://www.figma.com/file/NmGzJoDRtkn481G3lgg0Z9/Amway-DS-%E2%80%93%C2%A0Global-Core-Components?node-id=8740%3A71806&t=joZ8wEgx0U7iEKmA-0">Modal</a> UI Component, provide Modal Component with customizable event callbacks.

### Inclusion

```ts
import { Modal } from '@nextgen-web-framework/all';

return (
  <Modal
    headline="Modal Headline"
    children="Modal body copy with FOUR OR MORE LINES of text. Modal body copy with FOUR OR MORE LINES of text. Modal body copy with FOUR OR MORE LINES…"
    primaryButtonLabel="Primary"
    secondaryButtonLabel="Secondary"
    testLinkProps={((href = '#'), (text = 'secondary'))}
    closeIcon={true}
  />
);
```

### Required Props

| Name               | Description                                           |
| ------------------ | ----------------------------------------------------- |
| headline           | display headline of modal                             |
| primaryButtonLabel | display primaryButtonLabel on primary button in modal |

### Optional Props

| Name                   | Description                                                      | Default value | VARIABLE        |
| ---------------------- | ---------------------------------------------------------------- | ------------- | --------------- |
| children               | content of the modal                                             |               |
| primaryButton          | footer primaryButton of the modal can be passed as JSX Element   |               |
| secondaryButton        | footer secondaryButton of the modal can be passed as JSX Element |               |
| secondaryButtonLabel   | display secondaryButtonLabel on secondary button in modal        |
| testLinkProps          | accept prop from TextLink component to display text              |
| closeIcon              | Make 'x' icon Enable/Disable                                     | true          |
| closeOnBackdropClick   | Make onBackdropClick true/false                                  | true          |
| buttonAlignment        | Change footer button alignment                                   | HORIZONTAL    | ButtonAlignment |
| className              | Custom class[module.scss] from container application             | --            |
| textAlign              | textAlign for headline and children                              | left          |
| containerWidth         | To specify the container width                                   |               |
| onSecondaryButtonClick | callback function on Secondary Button click                      | ()=> void     |
| onPrimaryButtonClick   | Callback Function, on Primary Button click                       | ()=> void     |
| onClose                | Callback Function, on close Icon                                 | ()=> void     |

### Storybook

[link to storybook](https://link_to_storybook)
