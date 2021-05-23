import {
  args,
  array,
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
} from '../.utils/test-helpers';
import isRegExp from '.';

describe('isRegExp', function() {
  it('should return `true` for `RegExp` values', function() {
    expect(isRegExp(regex)).toEqual(true);
  });
  it('should return `false` for none `RegExp` values', function() {
    expect(isRegExp(number)).toEqual(false);
    expect(isRegExp(array)).toEqual(false);
    expect(isRegExp(date)).toEqual(false);
    expect(isRegExp(error)).toEqual(false);
    expect(isRegExp(object)).toEqual(false);
    expect(isRegExp(noop)).toEqual(false);
    expect(isRegExp(args)).toEqual(false);
    expect(isRegExp(push)).toEqual(false);
    expect(isRegExp(defineProperty)).toEqual(false);
    expect(isRegExp(Object(number))).toEqual(false);
    expect(isRegExp(Object(boolean))).toEqual(false);
    expect(isRegExp(Object(string))).toEqual(false);
  });
});
