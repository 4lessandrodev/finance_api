import { Account } from './Account';

describe('Account', () => {
 const validFakeAccount = {
  id:null,
  agency: 1090,
  account: 559020,
  name: 'Joao Da Se',
  balance: 1090
 };
 const createNewAccount = () => {
  return new Account(validFakeAccount);
 };


 it('shoud create a new valid account', () => {
  const account = createNewAccount();
  expect(account.id).not.toBeNull();
  expect(account).not.toBeUndefined();
  expect(createNewAccount).not.toThrow();
 });



});