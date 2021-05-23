import isFunction from '.';
import lodash from 'lodash';

const b = require('benny');

b.suite(
  'isFunction',

  b.add('fns.js', () => {
    isFunction({});
  }),

  b.add('lodash', () => {
    lodash.isFunction({});
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'isFunction', version: '1.0.0' }),
  b.save({ file: 'isFunction', format: 'chart.html' })
);
