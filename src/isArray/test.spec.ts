import isArray from '.';

describe('isNull', function() {
  it('should return `true` for `array` values', function() {
    expect(isArray([1, 2, 3])).toEqual(true);
  });
  it('should return `false` for none `array` values', function() {
    expect(isArray(1)).toEqual(false);
    expect(isArray(false)).toEqual(false);
    expect(isArray('')).toEqual(false);
    expect(isArray(null)).toEqual(false);
    expect(isArray(undefined)).toEqual(false);
    expect(isArray({})).toEqual(false);
    expect(isArray(/t/)).toEqual(false);
    expect(isArray(Symbol())).toEqual(false);
    expect(isArray(() => {})).toEqual(false);
    expect(isArray(new Date())).toEqual(false);
    expect(isArray(new Error())).toEqual(false);
  });
});
