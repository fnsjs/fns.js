// @flow
/* eslint-env mocha */

import isLength from '.';
import {
  array,
  noop,
  symbol,
  regex,
  date,
  error,
  object,
  number,
  boolean,
  string,
} from '../.utils/test-helpers';

describe('isLength', function() {
  it('should return `true` for `boolean` values', function() {
    expect(isLength(number)).toEqual(true);
    expect(isLength(9007199254740991)).toEqual(true);
  });
  it('should return `false` for none `boolean` values', function() {
    expect(isLength(9007199254740991 + 1)).toEqual(false);
    expect(isLength(boolean)).toEqual(false);
    expect(isLength(string)).toEqual(false);
    expect(isLength(null)).toEqual(false);
    expect(isLength(array)).toEqual(false);
    expect(isLength(string)).toEqual(false);
    expect(isLength(object)).toEqual(false);
    expect(isLength(regex)).toEqual(false);
    expect(isLength(symbol)).toEqual(false);
    expect(isLength(noop)).toEqual(false);
    expect(isLength(date)).toEqual(false);
    expect(isLength(error)).toEqual(false);
  });
});
