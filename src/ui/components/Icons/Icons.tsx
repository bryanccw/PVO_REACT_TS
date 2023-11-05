import { forwardRef } from 'react';
import { Theme } from '../types/enums';
import { FAIconProps, IconTheme } from './types/propsType';
import { IconStyle, Shade } from './types/enums';
import styles from './Icons.module.scss';

const FAIcon = forwardRef<HTMLSpanElement, FAIconProps>((props: FAIconProps, ref) => {
  const {
    theme = Theme.BLACK,
    iconStyle = IconStyle.REGULAR,
    shade = Shade.DARK,
    iconName,
    className,
    ...rest
  } = props;

  return (
    <span
      className={`fa-${iconStyle} fa-${iconName} ${styles[theme]} ${styles[shade]} ${className || ''}`}
      ref={ref}
      {...rest}
    />
  );
});
FAIcon.displayName = 'FAIcon';

export default FAIcon;
export { FAIcon, Shade, IconStyle };
export type { FAIconProps, IconTheme };
