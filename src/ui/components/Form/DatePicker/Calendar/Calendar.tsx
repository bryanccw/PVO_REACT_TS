import {
  FC,
  useState,
  useRef,
  forwardRef,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  FocusEvent as ReactFocusEvent,
} from 'react';
import { FAIcon, MLPVersion, Theme, DropDownDataInterface, IconStyle } from '../../../';
import DropDown from '../../DropDown/DropDown';
import ARIA_LABELS from '../../../AccessibiltyLabels';
import { CalendarProps, DAY_LIMIT } from './../types/propTypes';
import styles from './Calendar.module.scss';

const Calendar: FC<CalendarProps> = forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      showFullCalendar = true,
      onChange,
      disabledDates,
      timeLabel = 'Select time',
      timeLabelStart = 'Select time (start time)',
      timeLabelEnd = 'Select time (end time)',
      showTime = false,
      selectRange = false,
      onNavigate,
      value = new Date(),
      valueTo,
      forwardedRef,
      ariaLabelledBy = ARIA_LABELS.CALENDAR,
      calendarTitle = '',
      show4WeeksOnly = false,
    },
    ref,
  ) => {
    const roundedValue = new Date(Math.round(value.getTime() / 900000) * 900000);
    const minValue = new Date(0);
    const roundedToValue = valueTo ? new Date(Math.round(valueTo.getTime() / 900000) * 900000) : new Date(0);

    const [date, setDate] = useState(roundedValue);
    const [selectedDateTime, setSelectedDateTime] = useState(roundedValue);
    const [selectedDateTimeEnd, setSelectedDateTimeEnd] = useState(roundedToValue);
    const [selectedDateTimeEndHover, setSelectedDateTimeEndHover] = useState(roundedToValue);

    const year = date.getFullYear();
    const month = date.getMonth();
    const today = date.getDate();
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const firstDay = new Date(year, month).getDay();
    const noOfDays = new Date(year, month + 1, 0).getDate();
    const rows = showFullCalendar ? Math.ceil((noOfDays + firstDay) / 7) : 5;

    const select = (
      displayDate: { date: number; month: number } | false,
      isDisabled: boolean,
      isRange: Boolean,
      e: ReactKeyboardEvent | ReactMouseEvent | ReactFocusEvent,
    ) => {
      const selectDate =
        displayDate &&
        !isDisabled &&
        new Date(year, displayDate.month, displayDate.date, selectedDateTime.getHours(), selectedDateTime.getMinutes());

      if (e.type === 'focus' || (e.type === 'mouseover' && !isRange)) {
        //on mouseover while not selecting a date range, does nothing
        //on focus does nothing, to comply with lint
        return;
      }

      if (selectDate) {
        if (
          e.type === 'mouseover' &&
          isRange &&
          selectedDateTimeEnd.getTime() === minValue.getTime() &&
          selectDate.getTime() > selectedDateTime.getTime()
        ) {
          //mouseover effect only applicable to Range selection
          //AND when end date not selected AND end date later than start date
          setSelectedDateTimeEndHover(selectDate);
          return;
        } else if (e.type === 'mouseover' && isRange) {
          //mouseover while Start & End date already set
          return;
        }

        if (isRange) {
          if (selectDate.getTime() < selectedDateTime.getTime()) {
            //if date selected earlier than start date, clear End, set Start
            setSelectedDateTime(selectDate);
            setSelectedDateTimeEnd(minValue);
            setSelectedDateTimeEndHover(minValue);
          } else if (selectedDateTimeEnd.getTime() === minValue.getTime()) {
            //if Start selected & End date NOT selected, set End
            setSelectedDateTimeEnd(selectDate);
            onChange?.(selectedDateTime, selectDate, e);
          } else {
            //if End date selected, clear End, set Start
            setSelectedDateTime(selectDate);
            setSelectedDateTimeEnd(minValue);
            setSelectedDateTimeEndHover(minValue);
          }
        } else {
          //on select single date
          setSelectedDateTime(selectDate);
          onChange?.(selectDate, undefined, e);
        }
      }
    };

    const getDates = () => {
      const dates = [];
      for (let i = 0; i < rows; i++) {
        const week = [];
        for (let j = 0; j < 7; j++) {
          const currentDate = i * 7 + j + (showFullCalendar ? 1 - firstDay : today);
          let displayDate = currentDate > 0 &&
            currentDate <= (show4WeeksOnly ? DAY_LIMIT : noOfDays) && {
              date: currentDate,
              month,
            };

          if (!showFullCalendar) {
            if (i * 7 + j > 30) {
              displayDate = false;
            } else if (currentDate > noOfDays) {
              displayDate = { date: currentDate - noOfDays, month: month + 1 };
            } else {
              displayDate = { date: currentDate, month };
            }
          }

          const isSelected =
            displayDate &&
            new Date(
              selectedDateTime.getFullYear(),
              selectedDateTime.getMonth(),
              selectedDateTime.getDate(),
            ).getTime() === new Date(year, month, displayDate.date).getTime();
          const isSelectedFrom = selectRange && isSelected;

          const isSelectedTo =
            displayDate &&
            selectRange &&
            (new Date(
              selectedDateTimeEnd.getFullYear(),
              selectedDateTimeEnd.getMonth(),
              selectedDateTimeEnd.getDate(),
            ).getTime() === new Date(year, month, displayDate.date).getTime() ||
              new Date(
                selectedDateTimeEndHover.getFullYear(),
                selectedDateTimeEndHover.getMonth(),
                selectedDateTimeEndHover.getDate(),
              ).getTime() === new Date(year, month, displayDate.date).getTime());

          const isSelectedRange =
            displayDate &&
            new Date(
              selectedDateTime.getFullYear(),
              selectedDateTime.getMonth(),
              selectedDateTime.getDate(),
            ).getTime() < new Date(year, month, displayDate.date).getTime() &&
            (new Date(
              selectedDateTimeEnd.getFullYear(),
              selectedDateTimeEnd.getMonth(),
              selectedDateTimeEnd.getDate(),
            ).getTime() > new Date(year, month, displayDate.date).getTime() ||
              new Date(
                selectedDateTimeEndHover.getFullYear(),
                selectedDateTimeEndHover.getMonth(),
                selectedDateTimeEndHover.getDate(),
              ).getTime() > new Date(year, month, displayDate.date).getTime());

          const isDisabled = !!(
            displayDate &&
            disabledDates?.find(
              (disabledDate: Date) =>
                disabledDate.getTime() === new Date(year, month, displayDate ? displayDate.date : undefined).getTime(),
            )
          );

          const weekSpan = (
            <span
              className={`${styles['date-cell']} ${displayDate && styles['selectable-cell']} ${
                isSelected || isSelectedFrom || isSelectedTo ? styles['selected-cell'] : ''
              } ${isDisabled ? styles['disabled-cell'] : ''}
            ${isSelectedRange ? styles['selected-range-cell'] : ''}
            ${isSelectedRange && j === 0 ? styles['range-left'] : ''}
            ${isSelectedRange && j === 6 ? styles['range-right'] : ''}`}
              onClick={e => select(displayDate, isDisabled, selectRange, e)}
              onKeyDown={e => select(displayDate, isDisabled, selectRange, e)}
              onMouseOver={e => select(displayDate, isDisabled, selectRange, e)}
              onFocus={e => {
                select(displayDate, isDisabled, selectRange, e);
              }}
              key={`${i}${j}${displayDate ? displayDate.date : ''}`}
              tabIndex={0}
              role="button"
              aria-label={ariaLabelledBy}
              data-testid="week-span-testid"
            >
              {displayDate && displayDate.date}
            </span>
          );

          week.push(
            isSelectedFrom ? (
              <span className={styles['selected-cell-from']}>{weekSpan}</span>
            ) : isSelectedTo ? (
              <span className={styles['selected-cell-to']}>{weekSpan}</span>
            ) : (
              weekSpan
            ),
          );
        }

        if (!showFullCalendar && i) {
          dates.push(<div className={styles['divider']} />);
        }

        dates.push(
          <div
            className={` ${selectRange ? styles['date-row-range'] : ''} ${styles['date-row']}`}
            key={`week-${i + 1}`}
          >
            {selectRange}
            {week}
          </div>,
        );
      }
      return dates;
    };

    const navigate = (direction: string, e: ReactKeyboardEvent | ReactMouseEvent) => {
      let newYear = year;
      let newMonth = month;

      if (direction === 'left') {
        if (month === 0) {
          newYear--;
          newMonth = 11;
        } else {
          newMonth--;
        }
      } else {
        if (month === 11) {
          newYear++;
          newMonth = 0;
        } else {
          newMonth++;
        }
      }
      setDate(new Date(newYear, newMonth));
      onNavigate?.(e);
    };

    const getTimeList = () => {
      const timeList = [];
      const date = new Date();

      for (let hour = 0; hour < 24; hour++) {
        for (let interval = 0; interval < 4; interval++) {
          timeList.push([hour, interval * 15]);
        }
      }

      const formatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });

      return timeList.map(time => {
        const [hour, minute] = time;
        date.setHours(hour);
        date.setMinutes(minute);
        const formattedTime = formatter.format(date);
        return { id: formattedTime, name: formattedTime };
      });
    };

    const { current: timeList } = useRef(getTimeList());

    const setTime = (e: DropDownDataInterface) => {
      const time = e.name;

      if (typeof time === 'string') {
        const [hour, rest] = time.split(':');
        const [minute, ampm] = rest.split(' ');
        const convertedHour = hour === '12' ? '0' : hour;
        const selectedTime = new Date(
          selectedDateTime.getFullYear(),
          selectedDateTime.getMonth(),
          selectedDateTime.getDate(),
          ampm === 'PM' ? Number(convertedHour) + 12 : Number(convertedHour),
          Number(minute),
        );
        setSelectedDateTime(selectedTime);
        onChange?.(selectedTime, selectedDateTimeEnd);
      }
    };
    const setTimeEnd = (e: DropDownDataInterface) => {
      const time = e.name;

      if (typeof time === 'string') {
        const [hour, rest] = time.split(':');
        const [minute, ampm] = rest.split(' ');
        const selectedTime = new Date(
          selectedDateTimeEnd.getFullYear(),
          selectedDateTimeEnd.getMonth(),
          selectedDateTimeEnd.getDate(),
          ampm === 'PM' ? Number(hour === '12' ? 0 : hour) + 12 : Number(hour === '12' ? 0 : hour),
          Number(minute),
        );
        setSelectedDateTimeEnd(selectedTime);
        onChange?.(selectedDateTime, selectedTime);
      }
    };

    return (
      <div
        className={`${styles['calendar-container']} ${calendarTitle ? styles['show-calendar-title-only'] : ''}`}
        data-testid="calendar-container"
        ref={ref ?? forwardedRef}
      >
        {showFullCalendar && (
          <div className={styles['month-container']}>
            {calendarTitle ? (
              <span className={styles['calendar-title']} data-testid="calendar-title-testid">
                {calendarTitle}
              </span>
            ) : (
              <>
                <span>{`${months[month]} ${year}`}</span>
                <span className={styles['navigation-container']}>
                  <FAIcon
                    iconName={'arrow-left'}
                    iconStyle={IconStyle.SOLID}
                    theme={Theme.PURPLE}
                    className={styles['navigation-left']}
                    data-testid="navigation-left"
                    onClick={e => navigate('left', e)}
                  />
                  <FAIcon
                    iconName={'arrow-right'}
                    iconStyle={IconStyle.SOLID}
                    theme={Theme.PURPLE}
                    className={styles['navigation-right']}
                    data-testid="navigation-right"
                    onClick={e => navigate('right', e)}
                  />
                </span>
              </>
            )}
          </div>
        )}
        <div className={styles['dates-container']}>
          {showFullCalendar && (
            <div className={` ${selectRange ? styles['date-row-range'] : ''} ${styles['date-row']}`}>
              {days.map(day => (
                <span className={`${styles['date-cell']} ${styles['heading-cell']}`} key={day}>
                  {day}
                </span>
              ))}
            </div>
          )}
          {getDates()}
        </div>
        {showFullCalendar && showTime && (
          <div className={styles['time-container']}>
            <FAIcon iconName={'clock'} className={styles['time-icon']} />
            <span className={styles['time-label']} data-testid="time-label">
              {selectRange ? timeLabelStart : timeLabel}
            </span>
            <span className={styles['time-dropdown']}>
              <DropDown
                className={`${styles['dropdown-box']} ${styles['base-dropdown-result']} ${styles['open-dropdown-result']}`}
                name="time-picker"
                data={timeList}
                configData={{
                  label: 'name',
                  onSelect: setTime,
                }}
                value={selectedDateTime.toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })}
                mlpVersion={MLPVersion.ONE}
              />
            </span>
          </div>
        )}
        {showFullCalendar && showTime && selectRange && (
          <div className={styles['time-container']}>
            <FAIcon iconName={'clock'} className={styles['time-icon']} />
            <span className={styles['time-label']} data-testid="time-label">
              {timeLabelEnd}
            </span>
            <span className={styles['time-dropdown']}>
              <DropDown
                className={`${styles['dropdown-box']} ${styles['base-dropdown-result']} ${styles['open-dropdown-result']}`}
                name="time-picker"
                data={timeList}
                configData={{
                  label: 'name',
                  onSelect: setTimeEnd,
                }}
                value={selectedDateTimeEnd.toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })}
                mlpVersion={MLPVersion.ONE}
              />
            </span>
          </div>
        )}
      </div>
    );
  },
);
Calendar.displayName = 'Calendar';

export default Calendar;
