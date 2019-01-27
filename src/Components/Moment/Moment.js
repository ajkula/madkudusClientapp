/*
 * Copyright (c) 2016-present, Dalenys
 * All rights reserved.
 */
import 'moment-timezone';

import React      from 'react';
import PropTypes  from 'prop-types';
import moment     from 'moment';

const Moment = ({ format, fromNow, tz, locale, children, errorText }) => {

  if (!children) {
    return <time>{errorText}</time>;
  }

  // ini Moment object with specified locale
  let dateTime = moment(children).locale(locale);

  // apply a specific timezone if any
  if (tz) {
    dateTime.tz(tz);
  }

  let result = '';
  if (fromNow) {
    // get relative time
    result = dateTime.fromNow();
  } else {
    // format specified time
    result = dateTime.format(format).toString();
  }

  if (result === 'Invalid date') {
    result = errorText;
  }

  return <time>{result}</time>;
};

Moment.defaultProps = {
  format:        'YYYY-MM-DD HH:mm:ss',
  fromNow:       false,
  locale:        'en',
  errorText:     '-',
};

Moment.propTypes = {
  children:     PropTypes.node, // component children
  errorText:    PropTypes.string, // text error displayed
  format:       PropTypes.string, // date format pattern
  fromNow:      PropTypes.bool, // set date as a relative value
  locale:       PropTypes.string, // UTC time offset
  tz:           PropTypes.string, // locale
};

export default Moment;
