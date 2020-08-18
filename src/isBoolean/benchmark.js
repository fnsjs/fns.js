// @flow
/* eslint-env mocha */
/* global benchmark */

import isBoolean from '.'
import lodash from 'lodash'

suite('isBoolean', function () {
  benchmark('fns.js', function () {
    return isBoolean([])
  })

  benchmark('lodash', function () {
    return lodash.isBoolean([])
  })
})
