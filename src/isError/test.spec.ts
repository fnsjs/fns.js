import {
  args,
  array,
  body,
  boolean,
  date,
  defineProperty,
  error,
  noop,
  number,
  push,
  regex,
  string,
  symbol,
} from '../.utils/test-helpers';
import isError from '.';

describe('isError', function() {
  it('should return `true` for `Error` values', function() {
    expect(isError(error)).toEqual(true);
  });

  it('should return `false` for none `object` values', function() {
    expect(isError(args)).toEqual(false);
    expect(isError(array)).toEqual(false);
    expect(isError(date)).toEqual(false);
    expect(isError(push)).toEqual(false);
    expect(isError(regex)).toEqual(false);
    expect(isError(noop)).toEqual(false);
    expect(isError(defineProperty)).toEqual(false);
    expect(isError(Object(number))).toEqual(false);
    expect(isError(Object(boolean))).toEqual(false);
    expect(isError(Object(string))).toEqual(false);
    expect(isError(number)).toEqual(false);
    if (!!Symbol) {
      expect(isError(symbol)).toEqual(false);
    }
    if (document) {
      expect(isError(body)).toEqual(false);
    }
    if (!!Symbol) {
      expect(isError(Object(symbol))).toEqual(false);
    }
  });
});
