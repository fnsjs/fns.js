// @flow
/* eslint-env mocha */
/* global benchmark */

import isFunction from '.'
import lodash from 'lodash'

suite('isFunction', function () {
  benchmark('fns.js', function () {
    return isFunction({})
  })

  benchmark('lodash', function () {
    return lodash.isFunction({})
  })
})
