import isError from '.';
import lodash from 'lodash';

const b = require('benny');

b.suite(
  'isError',

  b.add('fns.js', () => {
    isError(new Error());
  }),

  b.add('lodash', () => {
    lodash.isError(new Error());
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'isError', version: '1.0.0' }),
  b.save({ file: 'isError', format: 'chart.html' })
);
