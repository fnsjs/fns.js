import map from '.';

describe('map', function() {
  const array = [1, 2];

  it('should map values and apply function to a new array', function() {
    const expected = [2, 4];
    expect(map(array, d => d * 2)).toEqual(expected);
  });
});
