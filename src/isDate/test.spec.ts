import isDate from '.';
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

describe('isDate', function() {
  it('should return `true` for `Date` values', function() {
    expect(isDate(date)).toEqual(true);
  });
  it('should return `false` for none `Date` values', function() {
    expect(isDate(number)).toEqual(false);
    expect(isDate(boolean)).toEqual(false);
    expect(isDate(string)).toEqual(false);
    expect(isDate(array)).toEqual(false);
    expect(isDate(object)).toEqual(false);
    expect(isDate(regex)).toEqual(false);
    expect(isDate(symbol)).toEqual(false);
    expect(isDate(noop)).toEqual(false);
    expect(isDate(error)).toEqual(false);
  });
});
