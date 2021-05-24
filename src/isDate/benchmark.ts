import isDate from '.';
import lodash from 'lodash';

const b = require('benny');

b.suite(
  'isDate',

  b.add('fns.js', () => {
    isDate('Thu Jun 18 2020');
  }),

  b.add('lodash', () => {
    lodash.isDate('Thu Jun 18 2020');
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'isDate', version: '1.0.0' }),
  b.save({ file: 'isDate', format: 'chart.html' })
);
