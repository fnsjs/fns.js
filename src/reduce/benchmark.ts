import reduce from '.';
import lodash from 'lodash';

const b = require('benny');

b.suite(
  'reduce',

  b.add('fns.js', () => {
    reduce([1, 2, 3, 4, 5, 6, 7, 8], (acc, v) => acc + v, 0);
  }),

  b.add('lodash', () => {
    lodash.reduce([1, 2, 3, 4, 5, 6, 7, 8], (acc, v) => acc + v, 0);
  }),

  b.add('native', () => {
    [1, 2, 3, 4, 5, 6, 7, 8].reduce((acc, v) => acc + v, 0);
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'reduce', version: '1.0.0' }),
  b.save({ file: 'reduce', format: 'chart.html' })
);
