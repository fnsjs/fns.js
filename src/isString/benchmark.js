// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isString from '.'
import lodash from 'lodash'
import underscore from 'underscore'

suite('isString', function() {
  benchmark('fns.js', function() {
    return isString(/x/)
  })

  benchmark('lodash', function() {
    return lodash.isString(/x/)
  })
})
