import lodash from 'lodash';
import indexOf from '.';

const b = require('benny');

b.suite(
  'indexOf',

  b.add('fns.js', () => {
    indexOf(['ant', 'bison', 'camel', 'duck', 'bison'], 'bison');
  }),

  b.add('lodash', () => {
    lodash.indexOf(['ant', 'bison', 'camel', 'duck', 'bison'], 'bison');
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'indexOf', version: '1.0.0' }),
  b.save({ file: 'indexOf', format: 'chart.html' })
);
