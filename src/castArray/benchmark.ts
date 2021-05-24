import lodash from 'lodash';
import castArray from '.';

const b = require('benny');

b.suite(
  'castArray',

  b.add('fns.js', () => {
    castArray({ a: 1 });
  }),

  b.add('lodash', () => {
    lodash.castArray({ a: 1 });
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'castArray', version: '1.0.0' }),
  b.save({ file: 'castArray', format: 'chart.html' })
);
