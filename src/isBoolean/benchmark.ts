import isBoolean from '.';
import lodash from 'lodash';

const b = require('benny');

b.suite(
  'isBoolean',

  b.add('fns.js', () => {
    isBoolean([]);
  }),

  b.add('lodash', () => {
    lodash.isBoolean([]);
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'isBoolean', version: '1.0.0' }),
  b.save({ file: 'isBoolean', format: 'chart.html' })
);
