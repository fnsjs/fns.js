import max from '.';

describe('max', function() {
  var array = [12, 15, 6, 13, 9];

  it('should return the largest value from a collection', function() {
    expect(max(array)).toEqual(15);
  });

  it('should return `undefined` for empty collections', function() {
    expect(max([])).toEqual(undefined);
  });

  it('should work with non-numeric collection values', function() {
    expect(max(['b', 'c', 'r', 'z'])).toEqual('z');
  });

  it('throws TypeError exception if passed Non-array argument', function() {
    expect(max.bind({})).toThrow(TypeError);
    expect(max.bind(null)).toThrow(TypeError);
  });
});
