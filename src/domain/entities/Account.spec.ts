import { IAccount } from '../interfaces/entities/IAccount';
import { Account } from './Account';

describe('Account', () => {
 const validFakeAccount = {
  id:null,
  agency: 1090,
  account: 559020,
  name: 'Joao Da Se',
  balance: 1090
 };
 const createValidNewAccount = ():Account => {
  return new Account(validFakeAccount);
 };

 const createInvalidNewAccount = (params:IAccount) => {
  return new Account(params);
 };

 it('shoud create a new valid account', () => {
  const account = createValidNewAccount();
  expect(account.id).not.toBeNull();
  expect(account).not.toBeUndefined();
  expect(createValidNewAccount).not.toThrow();
 });

 it('shoud throw if not provide agency', () => {
  const fn = ()=> createInvalidNewAccount({id:null, agency: 0, account: 559020, name: 'Joao Da Se', balance: 1090});
  expect(fn).toThrow('Invalid account params');
 });

 it('shoud throw if not provide name', () => {
  const fn = ()=> createInvalidNewAccount({id:null, agency: 100, account: 559020, name: '', balance: 1090});
  expect(fn).toThrow('Invalid account params');
 });

 it('shoud throw if not provide a negative value', () => {
  const fn = ()=> createInvalidNewAccount({id:null, agency: 100, account: 559020, name: 'Valid name', balance: -10});
  expect(fn).toThrow('Invalid account params');
 });

 it('shoud throw if not provide a invalid account', () => {
  const fn = ()=> createInvalidNewAccount({id:null, agency: 100, account: 0, name: 'Valid name', balance: 100});
  expect(fn).toThrow('Invalid account params');
 });

 it('shoud not throw if provide a empty string id', () => {
  const fn = () => createInvalidNewAccount({ id: '', agency: 100, account: 100, name: 'Valid name', balance: 100 });
  expect(fn).not.toThrow('Invalid account params');
  expect(fn().id).not.toBeNull();
  expect(fn().id).not.toBe('');
 });

 it('shoud throw if not provide a valid id (null)', () => {
  const fn = ()=> createInvalidNewAccount({id:'5', agency: 100, account: 100, name: 'Valid name', balance: 100});
  expect(fn).toThrow('Invalid account params');
 });

 it('shoud throw if not provide a valid id (null)', () => {
  const fn = ()=> createInvalidNewAccount({id:' 5 ', agency: 100, account: 100, name: 'Valid name', balance: 100});
  expect(fn).toThrow('Invalid account params');
 });

});