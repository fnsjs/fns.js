import takeRight from '.';
import lodash from 'lodash';

const b = require('benny');

b.suite(
  'takeRight',

  b.add('fns.js', () => {
    takeRight([1, 2, 3, 4, 5, 6, 7, 8]);
  }),

  b.add('lodash', () => {
    lodash.takeRight([1, 2, 3, 4, 5, 6, 7, 8]);
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'takeRight', version: '1.0.0' }),
  b.save({ file: 'takeRight', format: 'chart.html' })
);
