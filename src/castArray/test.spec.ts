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
import castArray from '.';

describe('castArray', function() {
  it('should return casted array', function() {
    expect(castArray(string)).toEqual([string]);
    expect(castArray(number)).toEqual([number]);
    expect(castArray(boolean)).toEqual([boolean]);
    expect(castArray(object)).toEqual([object]);
    expect(castArray(array)).toEqual(array);
    expect(castArray(regex)).toEqual([regex]);
    expect(castArray(symbol)).toEqual([symbol]);
    expect(castArray(noop)).toEqual([noop]);
    expect(castArray(date)).toEqual([date]);
    expect(castArray(error)).toEqual([error]);
    expect(castArray(null)).toEqual([]);
    expect(castArray(undefined)).toEqual([]);
  });
});
