# DatePicker and Calender

Provides DatePicker and Calender UI Component.

### Inclusion

```
import {DatePicker , Calender} from "@nextgen-web-framework/all";

return(<DatePicker />)
return(<Calender />)
```

### Optional Props

| Name                 | Description                                              | Default value | Variable          | Option                                                                                 |
| -------------------- | -------------------------------------------------------- | ------------- | ----------------- | -------------------------------------------------------------------------------------- |
| showFullCalendar     | flag to show full calendar                               | true          | Boolean           | true, false                                                                            |
| onChange             | callback for date selection                              | ()=>{}        |                   |                                                                                        |
| disabledDates        | list of dates to be disabled                             | none          |                   |                                                                                        |
| timeLabel            | label for time field                                     | Select Time   |                   |                                                                                        |
| inputLabel           | label for input field                                    | ''            |                   |                                                                                        |
| labelInfo            | Display information in info tooltip                      | ''            |                   |                                                                                        |
| labelInfoPreference  | Position of the info tooltip                             | RIGHT         | TooltipPreference | BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT, LEFT, RIGHT, TOP_CENTER, TOP_LEFT, TOP_RIGHT |
| placeholder          | placeholder text                                         | ''            |                   |                                                                                        |
| cancelLabel          | label for cancel                                         | 'Cancel'      |                   |                                                                                        |
| scheduleLabel        | label for schedule                                       | 'Schedule'    |                   |                                                                                        |
| onCalendarToggle     | label for schedule                                       | ()=>{}        |                   |                                                                                        |
| onSelect             | callback for date time click                             | ()=>{}        |                   |                                                                                        |
| value                | initial date value (from)                                | none          |                   |                                                                                        |
| valueTo              | initial date value value to                              | none          |                   |                                                                                        |
| displayText          | custom display text                                      | none          |                   |                                                                                        |
| description          | description text                                         | none          |                   |                                                                                        |
| calendarHeading      | calendar heading                                         | none          |                   |                                                                                        |
| calendarFooter       | calendar footer                                          | none          |                   |                                                                                        |
| showTime             | show time section                                        | false         | Boolean           | true, false                                                                            |
| selectRange          | flag to select date range                                | false         | Boolean           | true, false                                                                            |
| show4WeeksOnly       | flag to show only 4 weeks (28 days)                      | false         | Boolean           | true, false                                                                            |
| calendarTitle        | shows calendar title only and remove arrow and week days | ''            |                   |                                                                                        |
| inputContainerHeight | height of the input field                                | ''            |                   |                                                                                        |

### Storybook

[link to storybook]('datePicker')
