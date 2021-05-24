import takeRight from '.';
import map from '../map';

describe('takeRight', function() {
  var array = [1, 2, 3];

  it('should take the last two elements', function() {
    expect(takeRight(array, 2)).toEqual([2, 3]);
  });

  it('should take the last element when the second argument is empty', function() {
    expect(takeRight(array)).toEqual([3]);
  });

  it('should return [] when array is empty', function() {
    expect(takeRight([], 2)).toEqual([]);
  });

  it('should return all elements when `n` >= `length`', function() {
    expect(takeRight(array, 10)).toEqual(array);
  });

  it('should work as an iteratee for methods like `map`', function() {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(map(array, takeRight)).toEqual([[1, 2, 3], [6], [8, 9]]);
  });

  it('throws TypeError exception if passed Non-array like argument', function() {
    expect(takeRight.bind({})).toThrow(TypeError);
  });
});
