import helpers from '../../../src/helpers/string.helper';

describe('string helper', () => {
  const str = helpers.string;
  it('should return true if the string is String.', () => {
    const result = str.isSet('Hello World');
    expect(result).toBe(true);
  });

  it('should return false if str is falsy or not a string.', () => {
    const args = [null, undefined, NaN, '', 0];

    args.forEach(arg => {
      const result = str.isSet(arg);
      expect(result).toBe(false);
    });
  });
});
