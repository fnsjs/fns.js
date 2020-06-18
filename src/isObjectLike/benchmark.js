// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isObjectLike from '.'
import lodash from 'lodash'

suite('isObjectLike', function() {
  benchmark('fns.js', function() {
    return isObjectLike([1, 2, 3, 4])
  })

  benchmark('lodash', function() {
    return lodash.isObjectLike([1, 2, 3, 4])
  })
})
