const {stringLength, reverseString} = require('./tasks.js');

describe('stringLength tests', () => {
  test('valid string length', () => {
    expect(stringLength('Microverse')).toEqual(10);
  });

  test('empty string', () => {
    expect(() => stringLength('')).toThrow();
  });

  test('string length more than 10', () => {
    expect(() => stringLength('Hello World!!!')).toThrow();
  });
});


describe('reverseString tests', () => {
  test('reversing a string (1)', () => {
    expect(reverseString('racecar')).toEqual('racecar');
  });

  test('reversing a string (2)', () => {
    expect(reverseString('ABCDEFG')).toEqual('GFEDCBA');
  });
});
