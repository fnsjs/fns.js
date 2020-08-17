// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import takeRight from '.'
import lodash from 'lodash'

suite('last', function() {
  benchmark('fns.js', function() {
    return takeRight([1, 2, 3, 4, 5, 6, 7, 8])
  })

  benchmark('lodash', function() {
    return lodash.takeRight([1, 2, 3, 4, 5, 6, 7, 8])
  })
})
