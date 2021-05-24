import max from '.';
import lodash from 'lodash';

const b = require('benny');

b.suite(
  'max',

  b.add('fns.js', () => {
    max([1, 2, 3, 4, 5, 6, 7, 8]);
  }),

  b.add('lodash', () => {
    lodash.max([1, 2, 3, 4, 5, 6, 7, 8]);
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'max', version: '1.0.0' }),
  b.save({ file: 'max', format: 'chart.html' })
);
