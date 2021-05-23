import chunk from '.';

describe('chunk', () => {
  it('should create chunks', () => {
    const a = [1, 2, 3, 4];
    const e = [
      [1, 2],
      [3, 4],
    ];
    expect(chunk(a, 2)).toEqual(e);
  });

  it('should default to make 1-element chunks', () => {
    const a = ['one', 'two', 'three', 'four', 'five'];
    const e = [['one'], ['two'], ['three'], ['four'], ['five']];
    expect(chunk(a)).toEqual(e);
  });

  it('should return the last chunk as remaining elements', function() {
    expect(chunk([0, 1, 2, 3, 4, 5], 4)).toEqual([
      [0, 1, 2, 3],
      [4, 5],
    ]);
  });
});
