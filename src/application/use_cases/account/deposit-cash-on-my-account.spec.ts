import { IAccount } from '../../../domain/interfaces';
import { DepositCashOnMyAccountUseCase } from './deposit-cash-on-my-account.use-case';
import { fakeAccountRepo, fakeAccountWithDeposit} from '../tests/fakeRepo';
import { Result } from '../../../domain/aggregate-root/Result';

describe('deposit cash on my account', () => {

 it('should use repo and return result', async () => {
  const repositorySut = fakeAccountRepo();
  const fakeAcc = fakeAccountWithDeposit();
  const createOne = async (): Promise<Result<IAccount>> =>
   await new DepositCashOnMyAccountUseCase().execute(fakeAcc, repositorySut);
  const result = createOne();
  expect((await createOne()).isFailure).toBe(false);
  expect((await result).getValue().account).toBe(fakeAcc.account);
  expect((await result).getValue().agency).toBe(fakeAcc.agency);
  expect((await result).getValue().name).toBe(fakeAcc.name);
  expect((await result).getValue().id).not.toBeNull();
  expect(result).not.toBeUndefined();
 });

 it('should deposit a value and sum with balance', async () => {
  const repositorySut = fakeAccountRepo();
  const fakeAcc = fakeAccountWithDeposit();
  fakeAcc.value = 10;
  fakeAcc.balance = 1990;
  const createOne = async (): Promise<Result<IAccount>> =>
   await new DepositCashOnMyAccountUseCase().execute(fakeAcc, repositorySut);
  const result = createOne();
  expect((await result).isFailure).toBe(false);
  expect((await result).getValue().balance).toBe(2000);
  expect((await result).getValue().id).not.toBeNull();
  expect(result).not.toBeUndefined();
 });
});