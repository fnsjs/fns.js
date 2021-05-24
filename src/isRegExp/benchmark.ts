import isRegExp from '.';
import lodash from 'lodash';

const b = require('benny');

b.suite(
  'castArray',

  b.add('fns.js', () => {
    isRegExp('RegExp');
  }),

  b.add('lodash', () => {
    lodash.isRegExp('RegExp');
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'isRegExp', version: '1.0.0' }),
  b.save({ file: 'isRegExp', format: 'chart.html' })
);
