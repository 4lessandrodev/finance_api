import { IAccount } from '../../../domain/interfaces';
import { DepositCashOnMyAccountUseCase } from './deposit-cash-on-my-account';
import { fakeAccountRepo, fakeAccountWithDeposit} from '../tests/fakeRepo';

describe('deposit cash on my account', () => {

 it('should use repo and return result', async () => {
  const repositorySut = fakeAccountRepo();
  const fakeAcc = fakeAccountWithDeposit();
  const createOne = async (): Promise<IAccount> =>
   await new DepositCashOnMyAccountUseCase().execute(fakeAcc, repositorySut);
  const result = createOne();
  expect(createOne).not.toThrow();
  expect((await result).account).toBe(fakeAcc.account);
  expect((await result).agency).toBe(fakeAcc.agency);
  expect((await result).name).toBe(fakeAcc.name);
  expect((await result).id).not.toBe(null);
  expect(result).not.toBe(undefined);
 });

 it('should deposit a value and sum with balance', async () => {
  const repositorySut = fakeAccountRepo();
  const fakeAcc = fakeAccountWithDeposit();
  const createOne = async (): Promise<IAccount> =>
   await new DepositCashOnMyAccountUseCase().execute(fakeAcc, repositorySut);
  const result = createOne();
  expect(createOne).not.toThrow();
  expect((await result).balance).toBe(fakeAcc.balance + fakeAcc.value);
  expect((await result).id).not.toBe(null);
  expect(result).not.toBe(undefined);
 });
});