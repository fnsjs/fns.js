// @flow
/* eslint-env mocha */
/* global benchmark */

import max from '.'
import lodash from 'lodash'

suite('max', function () {
  benchmark('fns.js', function () {
    return max([1, 2, 3, 4, 5, 6, 7, 8], 8)
  })

  benchmark('lodash', function () {
    return lodash.max([1, 2, 3, 4, 5, 6, 7, 8], 8)
  })
})
