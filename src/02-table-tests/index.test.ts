// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },

    { a: 10, b: 2, action: Action.Subtract, expected: 8 },
    { a: 3, b: 2, action: Action.Subtract, expected: 1 },

    { a: 100, b: 2, action: Action.Divide, expected: 50 },
    { a: 30, b: 10, action: Action.Divide, expected: 3 },

    { a: 3, b: 2, action: Action.Multiply, expected: 6 },
    { a: 5, b: 5, action: Action.Multiply, expected: 25 },

    { a: 2, b: 5, action: Action.Exponentiate, expected: 32 },
    { a: 3, b: 3, action: Action.Exponentiate, expected: 27 },

    { a: 3, b: "3", action: Action.Add, expected: null },
    { a: 3, b: 3, action: "not valid action", expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)('simpleCalculator with $a and $b with action "$action" should return "$expected"', (testCase) => {
    expect(simpleCalculator(testCase)).toEqual(testCase.expected)
  })

});
