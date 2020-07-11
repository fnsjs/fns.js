// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import filter from '.'
import lodash from 'lodash'

suite('filter', function() {
  benchmark('fns.js', function() {
    return filter([1, 2, 3, 4, 5, 6, 7, 8], v => v % 2 === 0)
  })

  benchmark('lodash', function() {
    return lodash.filter([1, 2, 3, 4, 5, 6, 7, 8], v => v % 2 === 0)
  })

  benchmark('Vanilla', function() {
    return [1, 2, 3, 4, 5, 6, 7, 8].filter(v => v % 2 === 0)
  })
})
