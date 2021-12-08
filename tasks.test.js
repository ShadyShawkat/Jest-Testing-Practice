const {stringLength, reverseString, Calculator} = require('./tasks.js');

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
    expect(reverseString('racecar')).toBe('racecar');
  });

  test('reversing a string (2)', () => {
    expect(reverseString('ABCDEFG')).toBe('GFEDCBA');
  });
});


describe('Calculator tests', () => {
  test('adding two numbers', () => {
    expect(Calculator.add(3, 4)).toEqual(7);
  });

  test('substracting two numbers', () => {
    expect(Calculator.substract(3, 4)).toEqual(-1);
  });

  test('multiplying two numbers', () => {
    expect(Calculator.multiply(3, 4)).toEqual(12);
  });

  test('dividing two numbers', () => {
    expect(Calculator.divide(6, 2)).toEqual(3);
  });

  test('dividing by zero', () => {
    expect(() => Calculator.divide(6, 0)).toThrow();
  });
});
