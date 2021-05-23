import map from '.';
import lodash from 'lodash';

const b = require('benny');

b.suite(
  'map',

  b.add('fns.js', () => {
    map([1, 2, 3, 4, 5, 6, 7, 8], (v, i) => v * i);
  }),

  b.add('lodash', () => {
    lodash.map([1, 2, 3, 4, 5, 6, 7, 8], (v, i) => v * i);
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'map', version: '1.0.0' }),
  b.save({ file: 'map', format: 'chart.html' })
);
