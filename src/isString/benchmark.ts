import isString from '.';
import lodash from 'lodash';

const b = require('benny');

b.suite(
  'isString',

  b.add('fns.js', () => {
    isString(/x/);
  }),

  b.add('lodash', () => {
    lodash.isString(/x/);
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'isString', version: '1.0.0' }),
  b.save({ file: 'isString', format: 'chart.html' })
);
