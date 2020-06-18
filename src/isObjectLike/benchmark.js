// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isPlainObject from '.'
import lodash from 'lodash'

suite('isPlainObject', function() {
  benchmark('fns.js', function() {
    return isPlainObject({})
  })

  benchmark('lodash', function() {
    return lodash.isObjectLike({})
  })
})