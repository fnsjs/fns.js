// @flow
/* eslint-env mocha */
/* global benchmark */

import isDate from '.'
import lodash from 'lodash'

suite('isDate', function () {
  benchmark('fns.js', function () {
    return isDate('Thu Jun 18 2020')
  })

  benchmark('lodash', function () {
    return lodash.isDate('Thu Jun 18 2020')
  })
})
