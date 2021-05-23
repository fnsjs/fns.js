// @flow
/* global benchmark */
/* eslint-env mocha */

import isPlainObject from '.';
import lodash from 'lodash';

suite('isPlainObject', function() {
  benchmark('fns.js', function() {
    return isPlainObject({});
  });

  benchmark('lodash', function() {
    return lodash.isObjectLike({});
  });
});
