import { Account } from './Account';
import {fakeAccount, fakeCustomAccount} from '../../application/use_cases/tests/fakeRepo';

describe('Account', () => {



 it('shoud create a new valid account', () => {
  const account = new Account(fakeAccount());
  expect(account.id).not.toBeNull();
  expect(account).not.toBeUndefined();
 });

 it('shoud throw if not provide agency', () => {
  const fn = ()=> new Account(fakeCustomAccount(null, 0, 559020, 'Joao Da Se', 1090));
  expect(fn).toThrow('Invalid account params');
 });

 it('shoud throw if not provide name', () => {
  const fn = ()=> new Account(fakeCustomAccount(null, 100, 559020,'', 1090));
  expect(fn).toThrow('Invalid account params');
 });

 it('shoud throw if not provide a negative value', () => {
  const fn = ()=> new Account(fakeCustomAccount(null, 100, 559020, 'Valid name', -10));
  expect(fn).toThrow('Invalid account params');
 });

 it('shoud throw if not provide a invalid account', () => {
  const fn = ()=> new Account(fakeCustomAccount(null, 100, 0, 'Valid name', 100));
  expect(fn).toThrow('Invalid account params');
 });

 it('shoud not throw if provide a empty string id', () => {
  const fn = () => new Account(fakeCustomAccount( '',  100,  100,  'Valid name',  100 ));
  expect(fn).not.toThrow('Invalid account params');
  expect(fn().id).not.toBeNull();
  expect(fn().id).not.toBe('');
 });

 it('shoud throw if not provide a valid id (null)', () => {
  const fn = ()=> new Account(fakeCustomAccount('5', 100, 100,  'Valid name',  100));
  expect(fn).toThrow('Invalid account params');
 });

 it('shoud throw if not provide a valid id (null)', () => {
  const fn = ()=> new Account(fakeCustomAccount(' 5 ',  100,  100,  'Valid name',  100));
  expect(fn).toThrow('Invalid account params');
 });

 it('should debit 50 from account ', () => {
  const account = new Account(fakeAccount());
  const currentBalance = account.balance;
  const accountWithDebit = account.applyDebitValue({
   ...account, value: 50, fromAccount:account.account, fromAgency:account.agency
  });
  expect(accountWithDebit instanceof Account).toBe(true);
  if (accountWithDebit instanceof Account) {
   expect(accountWithDebit.balance).toBe(currentBalance - 50);
  }
 });

 it('should deposit 50 on account ', () => {
  const account = new Account(fakeAccount());
  const currentBalance = account.balance;
  const accountWithDeposit = account.applyDepositValue({
   ...account, value: 50, toAccount: account.account, toAgency: account.agency
  });
  expect(accountWithDeposit instanceof Account).toBe(true);
  if (accountWithDeposit instanceof Account) {
   expect(accountWithDeposit.balance).toBe(currentBalance + 50);
  }
 });

 it('should throw if try debit on negative balance', () => {
  const account = new Account(fakeCustomAccount(null, 5020, 550, 'Jc Camilo', 0));
  const result = () => account.applyDebitValue({
   ...account, balance: 0, value: 50, fromAccount: account.account, fromAgency: account.agency
  });
  expect(result instanceof Account).toBe(false);
  expect(result).toThrow('Insufficient funds for this operation');
 });

 it('should throw if provide a negative value on deposit', () => {
  const account = new Account(fakeAccount());
  const result = () => account.applyDepositValue({
   ...account, balance: 0, value: -50, toAccount: account.account, toAgency: account.agency
  });
  expect(result instanceof Account).toBe(false);
  expect(result).toThrow('Not valid value');
 });

});