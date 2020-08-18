// @flow
/* eslint-env mocha */
/* global benchmark */

import isArray from '.'
import lodash from 'lodash'

suite('isArray', function () {
  benchmark('fns.js', function () {
    return isArray(null)
  })

  benchmark('lodash', function () {
    return lodash.isArray(null)
  })
})
