import isBoolean from '.';
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

describe('isBoolean', function() {
  it('should return `true` for `boolean` values', function() {
    expect(isBoolean(Boolean(string))).toEqual(true);
    expect(isBoolean(Object(boolean))).toEqual(true);
    expect(isBoolean(boolean)).toEqual(true);
  });
  it('should return `false` for none `boolean` values', function() {
    expect(isBoolean(number)).toEqual(false);
    expect(isBoolean(null)).toEqual(false);
    expect(isBoolean(string)).toEqual(false);
    expect(isBoolean(array)).toEqual(false);
    expect(isBoolean(object)).toEqual(false);
    expect(isBoolean(regex)).toEqual(false);
    expect(isBoolean(symbol)).toEqual(false);
    expect(isBoolean(noop)).toEqual(false);
    expect(isBoolean(date)).toEqual(false);
    expect(isBoolean(error)).toEqual(false);
  });
});
