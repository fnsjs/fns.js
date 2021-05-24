import lodash from 'lodash';
import isObject from '.';

const b = require('benny');

b.suite(
  'isObject',

  b.add('fns.js', () => {
    isObject({ a: 1 });
  }),

  b.add('lodash', () => {
    lodash.isObject({});
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'isObject', version: '1.0.0' }),
  b.save({ file: 'isObject', format: 'chart.html' })
);
