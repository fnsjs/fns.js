// @flow
/* eslint-env mocha */
/* global benchmark */

import min from '.'
import lodash from 'lodash'

suite('min', function () {
  benchmark('fns.js', function () {
    return min([1, 2, 3, 4, 5, 6, 7, 8])
  })

  benchmark('lodash', function () {
    return lodash.min([1, 2, 3, 4, 5, 6, 7, 8])
  })
})
