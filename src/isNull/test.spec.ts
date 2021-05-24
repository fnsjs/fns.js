import isNull from '.';

describe('isNull', function() {
  it('should return `true` for `null` values', function() {
    expect(isNull(null)).toEqual(true);
  });
  it('should return `false` for none `null` values', function() {
    expect(isNull(1)).toEqual(false);
    expect(isNull(false)).toEqual(false);
    expect(isNull('')).toEqual(false);
    expect(isNull([])).toEqual(false);
    expect(isNull({})).toEqual(false);
    expect(isNull(/t/)).toEqual(false);
    expect(isNull(Symbol())).toEqual(false);
    expect(isNull(() => {})).toEqual(false);
    expect(isNull(new Date())).toEqual(false);
    expect(isNull(new Error())).toEqual(false);
  });
});
