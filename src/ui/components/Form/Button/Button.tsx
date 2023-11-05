import { FC, forwardRef } from 'react';
import RawButton from './RawButton';
import { ButtonPropsTypes, RawButtonPropsTypes, ButtonTheme } from './types/propsType';
import { ButtonIconPosition, ButtonStyles, ButtonSize, ButtonTypes, ButtonWidth } from './types/enums';

/**
 * @description Button component provides a <RawButton> component with customized style(SOLID, OUTLINE).
 * Props ->
 * title: text in button (Required),
 * type: type of button (submit, button, reset)
 * disabled: enable/disable button property (true/false)
 * tabIndex: specifies the tab order of an element,
 * size: button tall property (small-38px, medium-48px)
 * style: style related property (solid/outline)
 * theme: colour themes (red/black/white etc)
 * role: accessibility related prop
 * icon: display an icon inside button
 * iconPosition: decide the position of icon (left/right)
 * language: decide type of language used (en,ch etc)
 * onClick: event triggeed on button click
 */
export const Button: FC<ButtonPropsTypes> = forwardRef<HTMLButtonElement, ButtonPropsTypes>(
  ({ buttonStyle, ...restProps }, ref) => {
    const { SOLID, OUTLINE } = ButtonStyles;
    let styles: ButtonStyles;
    switch (buttonStyle) {
      case SOLID:
        styles = SOLID;
        break;
      case OUTLINE:
        styles = OUTLINE;
        break;
      default:
        styles = SOLID;
        break;
    }
    const customProps = { buttonStyle: styles, ...restProps };
    return <RawButton {...customProps} forwardedRef={ref} />;
  },
);
export default Button;
Button.displayName = 'Button';

export { ButtonIconPosition, ButtonStyles, ButtonSize, ButtonTypes, ButtonWidth };
export type { ButtonPropsTypes, RawButtonPropsTypes, ButtonTheme };
