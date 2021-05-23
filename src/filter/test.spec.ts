import filter from '.';

describe('filter', function() {
  it('get should filter undefined items', function() {
    const array = [1, 2, undefined, 3, undefined];
    expect(filter(array, Boolean)).toEqual([1, 2, 3]);
  });
});
