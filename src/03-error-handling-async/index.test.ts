// Uncomment the code below and write your tests
import {
  resolveValue,
  throwError,
  throwCustomError,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const testVal = 'test value';
    expect(await resolveValue(testVal)).toBe('test value');
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const customMessage = 'this is custom message';

    expect(() => {
      throwError(customMessage);
    }).toThrowError(customMessage);
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => {
      throwError();
    }).toThrowError('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => {
      throwCustomError();
    }).toThrowError(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    // Write your test here
    expect(() => rejectCustomError()).rejects.toThrow(MyAwesomeError);
  });
});
