import lodash from 'lodash';
import compact from '.';

const b = require('benny');

b.suite(
  'compact',

  b.add('fns.js', () => {
    compact([1, null, undefined, 2, false, 0, NaN, '', 3]);
  }),

  b.add('lodash', () => {
    lodash.compact([1, null, undefined, 2, false, 0, NaN, '', 3]);
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'compact', version: '1.0.0' }),
  b.save({ file: 'compact', format: 'chart.html' })
);
