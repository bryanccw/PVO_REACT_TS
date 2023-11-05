import {
  ReactNode,
  ForwardedRef,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  FocusEvent as ReactFocusEvent,
} from 'react';
import { TooltipPreference } from '../../../';

export interface DateObj {
  year: number;
  month: number;
  date: number;
  time?: string;
}

export interface CalendarProps {
  showFullCalendar?: boolean;
  onChange?: (dateTime: Date, dateTimeTo?: Date, e?: ReactKeyboardEvent | ReactMouseEvent | ReactFocusEvent) => void;
  disabledDates?: Date[];
  timeLabel?: string;
  timeLabelStart?: string;
  timeLabelEnd?: string;
  showTime?: boolean;
  selectRange?: boolean;
  onNavigate?: (e: ReactKeyboardEvent | ReactMouseEvent) => void;
  value?: Date;
  valueTo?: Date;
  forwardedRef?: ForwardedRef<HTMLDivElement>;
  ariaLabelledBy?: string;
  calendarTitle?: string;
  /**
   * @description calendar will only show 28 days
   */
  show4WeeksOnly?: boolean;
}

export type DatePickerProps = CalendarProps & {
  inputLabel?: string;
  labelInfo?: string;
  labelInfoPreference?: TooltipPreference;
  placeholder?: string;
  cancelLabel?: string;
  scheduleLabel?: string;
  onCalendarToggle?: (e: ReactKeyboardEvent | ReactMouseEvent) => void;
  onSelect?: (e?: ReactKeyboardEvent | ReactMouseEvent | ReactFocusEvent) => void;
  displayText?: string;
  description?: string;
  calendarHeading?: string;
  calendarFooter?: ReactNode;
  inputContainerHeight?: string;
  ariaLabelledBy?: string;
};
export const DAY_LIMIT = 28;
