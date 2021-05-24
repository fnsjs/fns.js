import {
  array,
  boolean,
  date,
  error,
  noop,
  number,
  object,
  regex,
  string,
  symbol,
} from '../.utils/test-helpers';
import isString from '.';

describe('isString', function() {
  it('should return `true` for `string` values', function() {
    expect(isString(string)).toEqual(true);
    expect(isString(Object(string))).toEqual(true);
  });
  it('should return `false` for none `string` values', function() {
    expect(isString(number)).toEqual(false);
    expect(isString(boolean)).toEqual(false);
    expect(isString(object)).toEqual(false);
    expect(isString(array)).toEqual(false);
    expect(isString(null)).toEqual(false);
    expect(isString(regex)).toEqual(false);
    expect(isString(symbol)).toEqual(false);
    expect(isString(noop)).toEqual(false);
    expect(isString(date)).toEqual(false);
    expect(isString(error)).toEqual(false);
  });
});
