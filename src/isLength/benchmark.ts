import isLength from '.';
import lodash from 'lodash';

suite('isLength', function() {
  benchmark('fns.js', function() {
    return isLength([1, 2, 3, 4, 5]);
  });

  benchmark('lodash', function() {
    return lodash.isLength([1, 2, 3, 4, 5]);
  });
});
