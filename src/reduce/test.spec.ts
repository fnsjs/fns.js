import reduce from '.';

describe('reduce', function() {
  const array = [1, 2, 3];

  it("throws TypeError exception if reducer isn't provided", function() {
    expect(reduce.bind(array)).toThrow(TypeError);
  });

  it('should reduce a list of items', function() {
    const result = reduce(
      array,
      function(last, item) {
        return last + item;
      },
      2
    );
    expect(result).toEqual(8);
  });

  it("should use input[0] if initialValue isn't provided", function() {
    const result = reduce(
      array,
      function(last, item) {
        return last + item;
      },
      0
    );
    expect(result).toEqual(6);
  });
});
