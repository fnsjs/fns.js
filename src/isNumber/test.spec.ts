import isNumber from '.';
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

describe('isNumber', function() {
  it('should return `true` for `number` values', function() {
    expect(isNumber(number)).toEqual(true);
  });
  it('should return `false` for none `number` values', function() {
    expect(isNumber(array)).toEqual(false);
    expect(isNumber(boolean)).toEqual(false);
    expect(isNumber(string)).toEqual(false);
    expect(isNumber(null)).toEqual(false);
    expect(isNumber(undefined)).toEqual(false);
    expect(isNumber(object)).toEqual(false);
    expect(isNumber(regex)).toEqual(false);
    expect(isNumber(symbol)).toEqual(false);
    expect(isNumber(noop)).toEqual(false);
    expect(isNumber(date)).toEqual(false);
    expect(isNumber(error)).toEqual(false);
  });
});
