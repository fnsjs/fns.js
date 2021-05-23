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
import isFunction from '.';

describe('isFunction', function() {
  it('should return `true` for `function` values', function() {
    expect(isFunction(noop)).toEqual(true);
    expect(isFunction(push)).toEqual(true);
    expect(isFunction(defineProperty)).toEqual(true);
  });
  it('should return `false` for none `function` values', function() {
    expect(isFunction(number)).toEqual(false);
    expect(isFunction(array)).toEqual(false);
    expect(isFunction(date)).toEqual(false);
    expect(isFunction(error)).toEqual(false);
    expect(isFunction(object)).toEqual(false);
    expect(isFunction(regex)).toEqual(false);
    expect(isFunction(args)).toEqual(false);
    expect(isFunction(Object(number))).toEqual(false);
    expect(isFunction(Object(boolean))).toEqual(false);
    expect(isFunction(Object(string))).toEqual(false);
  });
});
