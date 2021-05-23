import isNull from '.';
import lodash from 'lodash';

suite('isNull', function() {
  benchmark('fns.js', function() {
    return isNull(Object);
  });

  benchmark('lodash', function() {
    return lodash.isNull(Object);
  });
});
