import toFinite from '.';
import lodash from 'lodash';

const b = require('benny');

b.suite(
  'toFinite',

  b.add('fns.js', () => {
    toFinite(Infinity);
  }),

  b.add('lodash', () => {
    lodash.toFinite(Infinity);
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'toFinite', version: '1.0.0' }),
  b.save({ file: 'toFinite', format: 'chart.html' })
);
