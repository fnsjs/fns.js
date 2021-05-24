import last from '.';

describe('last', function() {
  const array = [1, 2, 3, 4];

  it('should return the last element', function() {
    expect(last(array)).toEqual(4);
  });

  it('should return `undefined` when querying empty arrays', function() {
    expect(last([])).toEqual(undefined);
  });
});
