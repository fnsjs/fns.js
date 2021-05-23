import isObjectLike from '.';
import {
  array,
  regex,
  date,
  error,
  object,
  number,
  boolean,
  string,
  args,
} from '../.utils/test-helpers';

describe('isObjectLike', function() {
  it('should return `true` for `object-like` values', function() {
    expect(isObjectLike(args)).toEqual(true);
    expect(isObjectLike(array)).toEqual(true);
    expect(isObjectLike(date)).toEqual(true);
    expect(isObjectLike(error)).toEqual(true);
    expect(isObjectLike(object)).toEqual(true);
    expect(isObjectLike(regex)).toEqual(true);
    expect(isObjectLike(Object(number))).toEqual(true);
    expect(isObjectLike(Object(boolean))).toEqual(true);
    expect(isObjectLike(Object(string))).toEqual(true);
  });
  it('should return `false` for none `object-like` values', function() {
    expect(isObjectLike(number)).toEqual(false);
  });
});
