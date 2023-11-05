import {
  FC,
  useState,
  forwardRef,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  FocusEvent as ReactFocusEvent,
} from 'react';

import {
  FAIcon,
  TooltipPreference,
  Tooltip,
  Theme,
  Button,
  ButtonSize,
  ButtonStyles,
  ButtonTypes,
  useBreakpoint,
  Drawer,
  // IconStyle
} from '../../';

import ARIA_LABELS from '../../AccessibiltyLabels';
import { DateObj, DatePickerProps } from './types/propTypes';
import Calendar from './Calendar/Calendar';
import styles from './DatePicker.module.scss';
const DatePicker: FC<DatePickerProps> = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      onChange,
      inputLabel,
      labelInfo = '',
      labelInfoPreference = TooltipPreference.RIGHT,
      placeholder = '',
      cancelLabel = 'Cancel',
      scheduleLabel = 'Schedule',
      onCalendarToggle,
      onSelect,
      showTime = false,
      selectRange = false,
      value,
      valueTo,
      displayText,
      description,
      calendarHeading,
      calendarFooter,
      inputContainerHeight,
      ariaLabelledBy = ARIA_LABELS.DATEPICKER,
      ...restProps
    },
    ref,
  ) => {
    const initialDate = value ?? new Date();
    const roundedInitialDate = new Date(Math.round(initialDate.getTime() / 900000) * 900000);
    const [dateTime, setDateTime] = useState(roundedInitialDate);
    const roundedEndDate = valueTo ? new Date(Math.round(valueTo.getTime() / 900000) * 900000) : new Date(0);
    const [dateTimeTo, setDateTimeTo] = useState(roundedEndDate);
    const [showCalendar, setShowCalendar] = useState(false);
    const [scheduledDateTime, setScheduledDateTime] = useState<DateObj>(
      value
        ? {
            year: roundedInitialDate.getFullYear(),
            month: roundedInitialDate.getMonth(),
            date: roundedInitialDate.getDate(),
            time: roundedInitialDate.toLocaleString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            }),
          }
        : {
            year: 0,
            month: 0,
            date: 0,
            time: '',
          },
    );
    const [scheduledDateTimeTo, setScheduledDateTimeTo] = useState<DateObj>(
      valueTo
        ? {
            year: roundedEndDate.getFullYear(),
            month: roundedEndDate.getMonth(),
            date: roundedEndDate.getDate(),
            time: roundedEndDate.toLocaleString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            }),
          }
        : {
            year: 0,
            month: 0,
            date: 0,
            time: '',
          },
    );

    // const { year, month, date, time } = scheduledDateTime;
    // const { year, month, date, time } = scheduledDateTimeTo;
    let dateTimeText = '';

    if (scheduledDateTime.date) {
      dateTimeText = `${scheduledDateTime.date}/${scheduledDateTime.month + 1}/${scheduledDateTime.year} `;
    }

    if (showTime) {
      dateTimeText += scheduledDateTime.time;
    }

    if (selectRange) {
      if (scheduledDateTimeTo.date) {
        dateTimeText += ` to ${scheduledDateTimeTo.date}/${scheduledDateTimeTo.month + 1}/${scheduledDateTimeTo.year} `;
      }

      if (showTime) {
        dateTimeText += scheduledDateTimeTo.time;
      }
    }

    const handleCalendarVisibility = (e: ReactKeyboardEvent | ReactMouseEvent, show: boolean) => {
      setShowCalendar(show);
      onCalendarToggle?.(e);
    };

    const handleSchedule = (e: ReactKeyboardEvent | ReactMouseEvent) => {
      onChange?.(dateTime, selectRange ? dateTimeTo : undefined, e);
      setScheduledDateTime({
        year: dateTime.getFullYear(),
        month: dateTime.getMonth(),
        date: dateTime.getDate(),
        time: dateTime.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        }),
      });

      if (selectRange && dateTimeTo.getTime() !== new Date(0).getDate()) {
        setScheduledDateTimeTo({
          year: dateTimeTo.getFullYear(),
          month: dateTimeTo.getMonth(),
          date: dateTimeTo.getDate(),
          time: dateTimeTo.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          }),
        });
      }

      handleCalendarVisibility(e, false);
    };

    const actionButtons = (
      <div className={styles['action-button-container']}>
        <span className={styles['action-button']}>
          <Button
            title={cancelLabel}
            type={ButtonTypes.BUTTON}
            theme={Theme.BLACK}
            size={ButtonSize.SMALL}
            buttonStyle={ButtonStyles.OUTLINE}
            onClick={e => handleCalendarVisibility(e, false)}
          />
        </span>
        <span className={styles['action-button']}>
          <Button
            title={scheduleLabel}
            type={ButtonTypes.BUTTON}
            theme={Theme.BLACK}
            size={ButtonSize.SMALL}
            buttonStyle={ButtonStyles.SOLID}
            onClick={handleSchedule}
            data-testid="schedule-btn"
          />
        </span>
      </div>
    );

    const handleDateTimeChange = (
      date: Date,
      dateTo?: Date,
      e?: ReactKeyboardEvent | ReactMouseEvent | ReactFocusEvent,
    ) => {
      setDateTime(date);
      if (selectRange && dateTo) {
        setDateTimeTo(dateTo);
      }
      onSelect?.(e);
    };

    const calendarComponent = (
      <>
        {calendarHeading && <h3 className={styles['calendar-heading']}>{calendarHeading}</h3>}
        <Calendar
          {...restProps}
          onChange={handleDateTimeChange}
          showTime={showTime}
          selectRange={selectRange}
          value={dateTime}
          valueTo={dateTimeTo}
          forwardedRef={ref}
        />
      </>
    );

    const descriptionContent = description && <p className={styles['description-container']}>{description}</p>;

    const footerContent = calendarFooter && <div className={styles['calendar-footer']}>{calendarFooter}</div>;

    const menuContent = (
      <>
        <div className={styles['menu-container']}>
          {descriptionContent}
          {calendarComponent}
          {footerContent}
          {actionButtons}
        </div>
      </>
    );

    const drawerContent = (
      <>
        <Drawer
          header={<span>{inputLabel}</span>}
          footer={actionButtons}
          closeIcon
          onClose={() => setShowCalendar(false)}
        >
          {descriptionContent}
          <div className={styles['calendar-wrapper']}>{calendarComponent}</div>
          {footerContent}
        </Drawer>
      </>
    );

    const viewPortType = useBreakpoint();

    return (
      <div className={styles['date-picker-container']} data-testid="date-picker-container">
        {inputLabel && (
          <p className={styles['input-label']}>
            {inputLabel}
            {labelInfo && (
              <Tooltip
                message={labelInfo}
                preference={labelInfoPreference}
                className={styles['date-picker-tool-tip']}
              />
            )}
          </p>
        )}
        <div
          className={styles['input-container']}
          style={inputContainerHeight ? { height: inputContainerHeight } : {}}
          data-testid="input-container"
          onClick={e => handleCalendarVisibility(e, !showCalendar)}
          onKeyDown={e => handleCalendarVisibility(e, !showCalendar)}
          tabIndex={0}
          role="button"
          aria-label={ariaLabelledBy}
        >
          <span
            className={styles['placeholder-container']}
            data-value={displayText || dateTimeText || 'placeholderText'}
          >
            {displayText || dateTimeText || placeholder}
          </span>
          <FAIcon iconName={'calendar'} />
        </div>
        {showCalendar && (viewPortType === 'xs' || viewPortType === 'sm' ? drawerContent : menuContent)}
      </div>
    );
  },
);
DatePicker.displayName = 'DatePicker';
export { Calendar };
export default DatePicker;
