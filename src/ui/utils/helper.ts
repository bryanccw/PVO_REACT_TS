import { DynamicObjectInterface } from '../../sdk/type';

export const getAPIVersion = () => {
  return localStorage.getItem('appVersion') || '';
};
export const getEmplId = () => localStorage.getItem('EmplId') || '';

export const getAPIHost = () => process.env.REACT_APP_API_BASEURL || `${window.location.origin}/api`;

export const getLandingPage = () => process.env.REACT_APP_LANDING_PAGE;

export const getAppToken = () => localStorage.getItem('appToken') || '';

export const apiHeaders = () => {
  return {
    headers: {
      'x-access-token': getAppToken(),
      'Content-Type': 'application/json',
    },
  };
};

export const bodyParams = () => {
  return {
    idToken: localStorage.getItem('idToken'),
    accessToken: localStorage.getItem('accessToken'),
  };
};

export const getEnvironment = (type: string | null): string => {
  let env: string = process.env.REACT_APP_ENV || '';
  if (type === '' || !type) {
    return env === 'PROD' ? '' : env;
  } else {
    let name: string = env === 'PROD' ? '' : env;
    if (name === 'ISS') name = 'issdev';
    return name.toLowerCase();
  }
};

export const isLocal = () => process.env.REACT_APP_ENV === 'LOCAL' || process.env.REACT_APP_ENV === 'ISS';
export const isDEV = () => process.env.REACT_APP_ENV === 'DEV';
export const isQA = () => process.env.REACT_APP_ENV === 'QA';
export const isProd = () => process.env.REACT_APP_ENV === 'PROD';

export const formatNumber = (number: DynamicObjectInterface, decimal: number, prefix: string, postfix: string) => {
  if (isNaN(number)) number = 0;
  number = parseFloat(number);
  if (!prefix) prefix = '';
  if (!postfix) postfix = '';
  return (
    prefix +
    number.toLocaleString(undefined, {
      minimumFractionDigits: decimal,
      maximumFractionDigits: decimal,
    }) +
    postfix
  );
};

export const getMonthName = (number: number, abbreviate = false) => {
  let months = [
    { name: 'January', sf: 'Jan' },
    { name: 'February', sf: 'Feb' },
    { name: 'March', sf: 'Mar' },
    { name: 'April', sf: 'Apr' },
    { name: 'May', sf: 'May' },
    { name: 'June', sf: 'June' },
    { name: 'July', sf: 'July' },
    { name: 'August', sf: 'Aug' },
    { name: 'September', sf: 'Sept' },
    { name: 'October', sf: 'Oct' },
    { name: 'November', sf: 'Nov' },
    { name: 'December', sf: 'Dec' },
  ];
  return abbreviate ? months[number - 1].sf : months[number - 1].name;
};

export const getDayName = (number: number) => {
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[number];
};

export const zeroPad = (num: number, places: number) => String(num).padStart(places, '0');

export const getQSParam = (key: string) => {
  let qs = new URLSearchParams(window.location.search);
  return qs.get(key);
};

export const shortNumber = (n: DynamicObjectInterface, d: number) => {
  let num: number = parseFloat(n);

  if (num < 1000) return parseFloat(n).toFixed(d);
  else if (n < 1000000) return (num / 1000).toFixed(d) + 'K';
  else return (num / 1000000).toFixed(d) + 'M';
};

export const sort = (key: string, order = 'asc') => {
  return function innerSort(a: DynamicObjectInterface, b: DynamicObjectInterface) {
    if (!a.key || !b.key) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key] || '';
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key] || '';

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };
};

export const dateYYYYMMDD = (str: string) => {
  let s = str.substring(0, 10).split('-', 3);
  return new Date(parseInt(s[0]), parseInt(s[1]) - 1, parseInt(s[2]), 0, 0, 0, 0);
};

export const formatDate = (str: string) => {
  // from YYYY-MM-DD
  if (str === '' || str === null || str === undefined) return '';
  else if (str.indexOf('T') > 0 || str.indexOf(' ') > 0) {
    // for date with timezone
    let d = new Date(str);
    return zeroPad(d.getMonth() + 1, 2) + '/' + zeroPad(d.getDate(), 2) + '/' + d.getFullYear(); // return mm/dd/yyyy
  } else {
    // for date only
    let s = str.split('-');
    return s[1] + '/' + s[2] + '/' + s[0]; // return mm/dd/yyyy
  }
};

/*
export const formatNumber2 = (number, digit) => {
  if (isNaN(number)) number = 0;
  let digitStr = '';
  for (let i = 1; i < digit; i++) {
    digitStr = digitStr + '0';
  }
  var formattedNumber = (digitStr + number).slice(-digit);
  return formattedNumber;
};

export const formatISODate = dateString => {
  let date = new Date(dateString);
  let year = formatNumber2(date.getFullYear(), 2);
  let month = formatNumber2(parseInt(date.getMonth()) + 1, 2);
  let day = formatNumber2(date.getDate(), 2);
  return `${day}/${month}/${year}`;
};
*/
export const getTimeforDate = (str: string) => {
  if (str === '' || str === null || str === undefined) return '';
  else if (str.indexOf('T') > 0 || str.indexOf(' ') > 0) {
    var today = new Date(str),
      // time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      time = today.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    return time;
  }
};

export const arrayRemoveNull = (array: Object[]) => {
  let newArray = array.filter(item => {
    return item;
  });
  return newArray;
};

export const isEmpty = (obj: object) => {
  return Object.keys(obj).length === 0;
};

export const phoneNumberFormat = (str: string) => {
  if (str.indexOf('-') === 3 && str.indexOf('-', 4) === 7) return str;
  else {
    var cleaned = ('' + str).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return match[1] + '-' + match[2] + '-' + match[3];
    }
    return null;
  }
};

export const removeSpecialChar = (text: string) => {
  return text.replace(/[^a-zA-Z0-9]/g, '');
};

/*export const getRouter = () => {
  if (typeof window === 'undefined') return {};
  return window.useRouter && window.useRouter();
};*/

/*export const getCurrentPath = () => {
  const router = getRouter();
  let path = '';
  if (router && router.asPath) path = router.asPath;
  else if (router && router.location && router.location.pathname) path = router.location.pathname;
  return path;
};*/
