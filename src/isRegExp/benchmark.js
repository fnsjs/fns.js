// @flow
/* eslint-env mocha */
/* global benchmark */

import isRegExp from '.'
import lodash from 'lodash'

suite('isRegExp', function () {
  benchmark('fns.js', function () {
    return isRegExp('RegExp')
  })

  benchmark('lodash', function () {
    return lodash.isRegExp('RegExp')
  })
})
