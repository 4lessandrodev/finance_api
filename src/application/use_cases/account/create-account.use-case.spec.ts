import { fakeAccount, fakeAccountRepo} from '../tests/fakeRepo';
import { IAccount } from '../../../domain/interfaces/entities/IAccount';
import { CreateAccountUseCase } from './create-account.use-case';

describe('create account', () => {


 it('should use repo and return result', async () => {
  const repositorySut = fakeAccountRepo();
  const fakeAcc = fakeAccount();
  const createOne = async ():Promise<IAccount> => await new CreateAccountUseCase().execute(fakeAcc, repositorySut);
  const result = createOne();
  expect(createOne).not.toThrow();
  expect((await result).account).toBe(fakeAcc.account);
  expect((await result).agency).toBe(fakeAcc.agency);
  expect((await result).balance).toBe(fakeAcc.balance);
  expect((await result).name).toBe(fakeAcc.name);
  expect((await result).id).not.toBe(null);
  expect(result).not.toBe(undefined);
 });
});