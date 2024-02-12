// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const originalModule =
    jest.requireActual<typeof import('./index')>('./index');
  return {
    __esModule: true,
    ...originalModule,
    mockOne: jest.fn(),
    mockTwo: jest.fn(),
    mockThree: jest.fn(),
  };
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    const clSpy = jest.spyOn(console, 'log');

    mockOne();
    mockTwo();
    mockThree();

    expect(mockOne).toHaveBeenCalledTimes(1);
    expect(mockTwo).toHaveBeenCalledTimes(1);
    expect(mockThree).toHaveBeenCalledTimes(1);
    expect(clSpy).not.toHaveBeenCalled();
  });

  test('unmockedFunction should log into console', () => {
    // Write your test here
    const clSpy = jest.spyOn(console, 'log');

    unmockedFunction();

    expect(clSpy).toHaveBeenCalledTimes(1);
    expect(clSpy).toHaveBeenCalledWith('I am not mocked');
  });
});
