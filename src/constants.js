/* eslint-disable no-useless-escape */
export const FR = 'fr';
export const EN = 'en';

export const TODAY = 'today';
export const YESTERDAY = 'yesterday';
export const LAST_WEEK  = 'last_week';
export const LAST_MONTH = 'last_month';
export const LAST_7_DAYS = 'last_7_days';
export const LAST_30_DAYS = 'last_30_days';
export const CURRENT_MONTH = 'current_month';

export const defaultShortcuts = [
  TODAY,
  YESTERDAY,
  LAST_7_DAYS,
  LAST_WEEK,
  LAST_30_DAYS,
  LAST_MONTH,
  CURRENT_MONTH,
];

export const dateFormats = {
  date: 'll', // Oct 27, 2017
  long_date: 'LL', // October 27, 2017
  time: 'LT', // 10:00 AM
  time_with_seconds: 'LTS', // 10:03:56 AM
  date_with_time: 'lll',  // Oct 27, 2017 10:04 AM
  date_with_time_with_seconds: 'll LTS', // Oct 27, 2017 10:03:56 AM
};

export const patterns = {
  date: {
    fr: '([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))',
    en: '([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))',
  },
  email: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
  integer: '[0-9]+',
  iban: '[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}',
  pan: '[X0-9]{13,19}',
  amount: '^\\d*([\\.][\\d]{0,2})?$',
  ip: '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)',
  website: '(https?:\/\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\/\\w \\.-]*)*\/?'
};

export const placeholders = {
  date: {
    fr: 'YYYY-MM-DD',
    en: 'YYYY-MM-DD',
  }
};

export const DESKTOP  = 'desktop';
export const TABLET   = 'tablet';

export const layoutFormats = {
  [DESKTOP]: DESKTOP,
  [TABLET]: TABLET,
};
