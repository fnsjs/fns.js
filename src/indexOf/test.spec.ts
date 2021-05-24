import indexOf from '.';
import map from '../map';
import { falseyArray, stubZero } from '../.utils/test-helpers';

describe('last', function() {
  var array = [1, 2, 3, 1, 2, 3];

  it('`_.indexOf` should return the index of the first matched value', function() {
    expect(indexOf(array, 3)).toEqual(2);
  });

  it('`_.indexOf` should work with a positive `fromIndex`', function() {
    expect(indexOf(array, 1, 2)).toEqual(3);
  });

  it('`_.indexOf` should work with a negative `fromIndex`', function() {
    expect(indexOf(array, 2, -3)).toEqual(4);
  });

  it('`_.indexOf` should work with a negative `fromIndex` <= `-length`', function() {
    const values = [-6, -8, -Infinity],
      expected = map(values, stubZero);

    const actual = map(values, function(fromIndex) {
      return indexOf(array, 1, fromIndex);
    });

    expect(actual).toEqual(expected);
  });

  it('`_.indexOf` should treat falsy `fromIndex` values as `0`', function() {
    const expected = map(falseyArray, stubZero);

    const actual = map(falseyArray, function(fromIndex) {
      return indexOf(array, 1, fromIndex as number);
    });

    expect(actual).toEqual(expected);
  });

  it('`_.indexOf` should coerce `fromIndex` to an integer', function() {
    expect(indexOf(array, 2, 1.2)).toEqual(1);
  });
});
