import compact from '.';

describe('compact', function() {
  const array = [1, null, undefined, 2, false, 0, NaN, '', 3];

  it('should filter falsy values', function() {
    expect(compact(array)).toEqual([1, 2, 3]);
  });
});
