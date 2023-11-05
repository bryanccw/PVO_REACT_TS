import { TooltipPreference } from './enums';

/**
 *  @param preference can be used to change the place of Tooltip.
 */

type PropTypes = {
  id?: number;
  preference?: TooltipPreference;
  message: string | undefined;
  className?: string;
};
export type TooltipPropsTypes = PropTypes;
