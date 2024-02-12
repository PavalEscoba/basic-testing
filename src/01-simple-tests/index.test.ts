// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const addPayload = {
      a: 100,
      b: 200,
      action: Action.Add,
    };

    expect(simpleCalculator(addPayload)).toEqual(300);
  });

  test('should subtract two numbers', () => {
    const subtractPayload = {
      a: 100,
      b: 51,
      action: Action.Subtract,
    };

    expect(simpleCalculator(subtractPayload)).toEqual(49);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const multiplyPayload = {
      a: 100,
      b: 100,
      action: Action.Multiply,
    };

    expect(simpleCalculator(multiplyPayload)).toEqual(10000);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const dividePayload = {
      a: 100,
      b: 2,
      action: Action.Divide,
    };

    expect(simpleCalculator(dividePayload)).toEqual(50);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const exponentiatePayload = {
      a: 2,
      b: 5,
      action: Action.Exponentiate,
    };

    expect(simpleCalculator(exponentiatePayload)).toEqual(32);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const invalidActionPayload = {
      a: 2,
      b: 5,
      action: 'invalid action',
    };

    expect(simpleCalculator(invalidActionPayload)).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const invalidArgsPayload = {
      a: 2,
      b: '3',
      action: Action.Add,
    };

    expect(simpleCalculator(invalidArgsPayload)).toBeNull();
  });
});
