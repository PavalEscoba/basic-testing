// Uncomment the code below and write your tests
import {
  getBankAccount,
  InsufficientFundsError,
  TransferFailedError,
  SynchronizationFailedError,
} from '.';

describe('BankAccount', () => {
  const initialBalance = 100;
  const amountToManipulate = 50;
  const amountMoreThanBalance = 100000;
  const account = getBankAccount(initialBalance);
  const anotherAccount = getBankAccount(initialBalance + amountToManipulate);

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should create account with initial balance', () => {
    // Write your test here
    expect(account.getBalance()).toEqual(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    expect(() => {
      account.withdraw(amountMoreThanBalance);
    }).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    expect(() =>
      account.transfer(amountMoreThanBalance, anotherAccount),
    ).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    expect(() => account.transfer(initialBalance, account)).toThrow(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    // Write your test here
    const initialAccAmount = account.getBalance();

    account.deposit(amountToManipulate);

    expect(account.getBalance()).toEqual(initialAccAmount + amountToManipulate);
  });

  test('should withdraw money', () => {
    // Write your test here
    const initialAccAmount = account.getBalance();
    account.withdraw(amountToManipulate);
    expect(account.getBalance()).toEqual(initialAccAmount - amountToManipulate);
  });

  test('should transfer money', () => {
    // Write your test here
    const initialAccAmount = account.getBalance();
    const initialSecondAccAmount = anotherAccount.getBalance();
    account.transfer(amountToManipulate, anotherAccount);
    expect(anotherAccount.getBalance()).toEqual(
      initialSecondAccAmount + amountToManipulate,
    );
    expect(account.getBalance()).toEqual(initialAccAmount - amountToManipulate);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    const result = await account.fetchBalance();
    if (typeof result === 'number') {
      expect(account.getBalance()).toEqual(50);
      expect(typeof result).toEqual('number');
      expect(result).not.toBe(null);
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    const balance = 100;
    jest.spyOn(account, 'fetchBalance').mockResolvedValueOnce(balance);
    await account.synchronizeBalance();
    expect(account.getBalance()).toEqual(balance);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    jest.spyOn(account, 'fetchBalance').mockResolvedValueOnce(null);
    await expect(account.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
