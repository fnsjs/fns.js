import reduceRight from '.';
import lodash from 'lodash';

const b = require('benny');

b.suite(
  'reduceRight',

  b.add('fns.js', () => {
    reduceRight([1, 2, 3, 4, 5, 6, 7, 8], (acc, v) => acc + v, 0);
  }),

  b.add('lodash', () => {
    lodash.reduceRight([1, 2, 3, 4, 5, 6, 7, 8], (acc, v) => acc + v, 0);
  }),

  b.add('native', () => {
    [1, 2, 3, 4, 5, 6, 7, 8].reduceRight((acc, v) => acc + v, 0);
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'reduceRight', version: '1.0.0' }),
  b.save({ file: 'reduceRight', format: 'chart.html' })
);
