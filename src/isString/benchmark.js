// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import isString from '.'
import lodash from 'lodash'

suite('isString', function() {
  benchmark('fns.js', function() {
    return isString(/x/)
  })

  benchmark('lodash', function() {
    return lodash.isString(/x/)
  })
})
