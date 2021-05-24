import isArray from '.';
import lodash from 'lodash';

const b = require('benny');

b.suite(
  'isArray',

  b.add('fns.js', () => {
    isArray(null);
  }),

  b.add('lodash', () => {
    lodash.isArray(null);
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'isArray', version: '1.0.0' }),
  b.save({ file: 'isArray', format: 'chart.html' })
);
