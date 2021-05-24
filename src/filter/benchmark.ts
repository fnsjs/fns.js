import filter from '.';
import lodash from 'lodash';

const b = require('benny');

b.suite(
  'filter',

  b.add('fns.js', () => {
    filter([1, 2, 3, 4, 5, 6, 7, 8], v => v % 2 === 0);
  }),

  b.add('lodash', () => {
    lodash.filter([1, 2, 3, 4, 5, 6, 7, 8], v => v % 2 === 0);
  }),

  b.add('Vanilla', () => {
    [1, 2, 3, 4, 5, 6, 7, 8].filter(v => v % 2 === 0);
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'filter', version: '1.0.0' }),
  b.save({ file: 'filter', format: 'chart.html' })
);
