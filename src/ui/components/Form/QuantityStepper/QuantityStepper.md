# QuantityStepper

QuantityStepper renders a stepper for quantity.
<a href="https://www.figma.com/file/NmGzJoDRtkn481G3lgg0Z9/Amway-DS-–%C2%A0Global-Core-Components?type=design&node-id=266-18682&t=mDPiqIe0Avuk94Vl-0">QuantityStepper</a> UI Component, provide QuantityStepper component with customizable view and fixed icons.

### Inclusion

```ts
import { QuantityStepper } from '@nextgen-web-framework/all';

return (
  <QuantityStepper
    count={VARIABLE}
    maxCount={VARIABLE}
    type={QuantityStepperType.OUTLINED}
    size={QuantityStepperSize.MEDIUM}
    disabled={VARIABLE}
  />
);
```

### Required Props

| Name | Description |
| ---- | ----------- |

### Optional Props

| Name               | Description                       | Default value                | example          |
| ------------------ | --------------------------------- | ---------------------------- | ---------------- |
| Count              | value of count                    | 0                            | count={4}        |
| maxCount           | value of count                    | 999                          | maxCount={10}    |
| minCount           | value of count                    | 0                            | minCount={0}     |
| type               | Display type OUTLINED or Filled.  | QuantityStepperType.OUTLINED | OUTLINED, FILLED |
| size               | Change Size                       | QuantityStepperSize.SMALL    | SMALL,MEDIUM     |
| disabled           | disabled complete stepper or not. | false                        | TRUE, FALSE      |
| disablePlusButton  | disabled plus button or not.      | false                        | TRUE, FALSE      |
| disableMinusButton | disabled minus button or not.     | false                        | TRUE, FALSE      |
| inputChangeHandler | handler for input change.         | ()=>0                        | ()=>0            |
| minusClickHandler  | handler for minus button click.   | ()=>0                        | ()=>0            |
| plusClickHandler   | handler for plus button click.    | ()=>0                        | ()=>0            |

### Storybook

<a href='https://6464aeb0a2244603ae7f7243-xufcpxplvm.chromatic.com/?path=/story/components-quantitystepper--quantity-stepper-default'>Link to Storybook</a>
