import lodash from 'lodash';
import chunk from '.';

const b = require('benny');

b.suite(
  'chunk',

  b.add('fns.js', () => {
    chunk([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4);
  }),

  b.add('lodash', () => {
    lodash.chunk([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4);
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'chunk', version: '1.0.0' }),
  b.save({ file: 'chunk', format: 'chart.html' })
);
