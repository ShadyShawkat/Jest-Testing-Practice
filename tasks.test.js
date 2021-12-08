const {stringLength} = require('./tasks.js');

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
