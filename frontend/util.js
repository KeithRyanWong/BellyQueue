var moment = require('moment');

export function getTimestamp() {
  return moment().format('LT');
}
