import moment from 'moment';

export const formatTime24 = (str: string) => {
  if (str === '' || str === null || str === undefined) return '';
  else if (str.indexOf('T') > 0 || str.indexOf(' ') > 0) {
    var today = new Date(str);
    return moment(today).format('HH:mm');
  } else return str;
};

export const formatFullDate = (dateString: string, showYear: boolean = true, showWeekday: boolean = true) => {
  let date = new Date(dateString);
  let format = `${showWeekday ? 'dddd,' : ''} D MMMM ${showYear ? 'YYYY' : ''}`;
  return moment(date).format(format);
};

export const formatISODate = (date: string | Date) => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  return moment(date).format();
};
