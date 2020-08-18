// @flow
/* eslint-env mocha */
/* global benchmark */

import map from '.'
import lodash from 'lodash'

suite('map', function () {
  benchmark('fns.js', function () {
    return map([1, 2, 3, 4, 5, 6, 7, 8], (v, i) => v * i)
  })

  benchmark('lodash', function () {
    return lodash.map([1, 2, 3, 4, 5, 6, 7, 8], (v, i) => v * i)
  })
})
