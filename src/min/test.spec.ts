import min from '.';

describe('min', function() {
  var array = [12, 15, 6, 13, 9];

  it('should return the largest value from a collection', function() {
    expect(min(array)).toEqual(6);
  });

  it('should return `undefined` for empty collections', function() {
    expect(min([])).toEqual(undefined);
  });

  it('should work with non-numeric collection values', function() {
    expect(min(['b', 'c', 'r', 'z'])).toEqual('b');
  });

  it('throws TypeError exception if passed Non-array argument', function() {
    expect(min.bind({})).toThrow(TypeError);
    expect(min.bind(null)).toThrow(TypeError);
  });
});
