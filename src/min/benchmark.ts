import min from '.';
import lodash from 'lodash';

const b = require('benny');

b.suite(
  'min',

  b.add('fns.js', () => {
    min([1, 2, 3, 4, 5, 6, 7, 8]);
  }),

  b.add('lodash', () => {
    lodash.min([1, 2, 3, 4, 5, 6, 7, 8]);
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'min', version: '1.0.0' }),
  b.save({ file: 'min', format: 'chart.html' })
);
