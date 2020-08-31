// @flow
/* eslint-env mocha */
/* global benchmark */

import compact from '.'
import lodash from 'lodash'

suite('compact', function () {
  benchmark('fns.js', function () {
    return compact([1, null, undefined, 2, false, 0, NaN, '', 3])
  })

  benchmark('lodash', function () {
    return lodash.compact([1, null, undefined, 2, false, 0, NaN, '', 3])
  })

  benchmark('native', function () {
    return [1, null, undefined, 2, false, 0, NaN, '', 3].filter(function (
      value
    ) {
      return value
    })
  })
})
