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
  object,
  push,
  regex,
  string,
  symbol,
} from '../.utils/test-helpers';
import isObject from '.';

describe('isObject', function() {
  it('should return `true` for `object` values', function() {
    expect(isObject(args)).toEqual(true);
    expect(isObject(array)).toEqual(true);
    expect(isObject(date)).toEqual(true);
    expect(isObject(error)).toEqual(true);
    expect(isObject(push)).toEqual(true);
    expect(isObject(object)).toEqual(true);
    expect(isObject(regex)).toEqual(true);
    expect(isObject(noop)).toEqual(true);
    expect(isObject(defineProperty)).toEqual(true);
    expect(isObject(Object(number))).toEqual(true);
    expect(isObject(Object(boolean))).toEqual(true);
    expect(isObject(Object(string))).toEqual(true);

    if (document) {
      expect(isObject(body)).toEqual(true);
    }
    if (!!Symbol) {
      expect(isObject(Object(symbol))).toEqual(true);
    }
  });
  it('should return `false` for none `object` values', function() {
    expect(isObject(number)).toEqual(false);
    if (!!Symbol) {
      expect(isObject(symbol)).toEqual(false);
    }
  });
});
