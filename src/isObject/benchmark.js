// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isObject from '.'
import lodash from 'lodash'
import underscore from 'underscore'

suite('isObject', function() {
  benchmark('fns.js', function() {
    return isObject({})
  })

  benchmark('lodash', function() {
    return lodash.isObject({})
  })

  benchmark('underscore', function() {
    return underscore.isObject({})
  })
})
