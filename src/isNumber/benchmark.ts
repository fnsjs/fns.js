import isNumber from '.';
import lodash from 'lodash';

suite('isNumber', function() {
  benchmark('fns.js', function() {
    return isNumber(null);
  });

  benchmark('lodash', function() {
    return lodash.isNumber(null);
  });
});
