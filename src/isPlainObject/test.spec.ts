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
import isPlainObject from '.';

describe('isPlainObject', function() {
  it('should return `true` for `object` values', function() {
    expect(isPlainObject(object)).toEqual(true);
  });

  it('should return `false` for none `object` values', function() {
    expect(isPlainObject(args)).toEqual(false);
    expect(isPlainObject(array)).toEqual(false);
    expect(isPlainObject(date)).toEqual(false);
    expect(isPlainObject(error)).toEqual(false);
    expect(isPlainObject(push)).toEqual(false);
    expect(isPlainObject(regex)).toEqual(false);
    expect(isPlainObject(noop)).toEqual(false);
    expect(isPlainObject(defineProperty)).toEqual(false);
    expect(isPlainObject(Object(number))).toEqual(false);
    expect(isPlainObject(Object(boolean))).toEqual(false);
    expect(isPlainObject(Object(string))).toEqual(false);
    expect(isPlainObject(number)).toEqual(false);
    if (!!Symbol) {
      expect(isPlainObject(symbol)).toEqual(false);
    }
    if (document) {
      expect(isPlainObject(body)).toEqual(false);
    }
    if (!!Symbol) {
      expect(isPlainObject(Object(symbol))).toEqual(false);
    }
  });
});
