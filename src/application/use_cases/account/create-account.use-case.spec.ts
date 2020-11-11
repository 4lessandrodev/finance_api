import { fakeAccount, fakeAccountRepo} from '../tests/fakeRepo';
import { IAccount } from '../../../domain/interfaces/entities/IAccount';
import { CreateAccountUseCase } from './create-account.use-case';
import { Result } from '../../../domain/aggregate-root/Result';

describe('create account', () => {

 it('should use repo and return result', async () => {
  const repositorySut = fakeAccountRepo();
  const fakeAcc = fakeAccount();
  const createOne = async ():Promise<Result<IAccount>> => await new CreateAccountUseCase().execute(fakeAcc, repositorySut);
  const result = createOne();
  expect(createOne).not.toThrow();
  expect((await result).getValue().account).toBe(fakeAcc.account);
  expect((await result).getValue().agency).toBe(fakeAcc.agency);
  expect((await result).getValue().balance).toBe(fakeAcc.balance);
  expect((await result).getValue().name).toBe(fakeAcc.name);
  expect((await result).getValue().id).not.toBe(null);
  expect(result).not.toBe(undefined);
 });
});