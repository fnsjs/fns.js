// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import last from '.'
import lodash from 'lodash'

suite('last', function() {
  benchmark('fns.js', function() {
    return last([1, 2, 3, 4, 5, 6, 7, 8], (v, i) => v * i)
  })

  benchmark('lodash', function() {
    return lodash.last([1, 2, 3, 4, 5, 6, 7, 8], (v, i) => v * i)
  })
})
