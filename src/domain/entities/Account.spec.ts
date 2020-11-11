import { Account } from './Account';
import {fakeAccount, fakeCustomAccount} from '../../application/use_cases/tests/fakeRepo';

describe('Account', () => {
 
 
 
 it('shoud create a  valid account', () => {
  const account =  Account.create(fakeAccount());
  expect(account.getValue().id).not.toBeNull();
  expect(account).not.toBeUndefined();
 });
 
 it('shoud throw if not provide agency', () => {
  const acc =  Account.create(fakeCustomAccount(null, 0, 559020, 'Joao Da Se', 1090));
  expect(acc.error).toBe('Invalid account params');
 });
 
 it('shoud throw if not provide name', () => {
  const acc =  Account.create(fakeCustomAccount(null, 100, 559020,'', 1090));
  expect(acc.error).toBe('Invalid account params');
 });
 
 it('shoud throw if not provide a negative value', () => {
  const acc =  Account.create(fakeCustomAccount(null, 100, 559020, 'Valid name', -10));
  expect(acc.error).toBe('Invalid account params');
 });
 
 it('shoud throw if not provide a invalid account', () => {
  const acc =  Account.create(fakeCustomAccount(null, 100, 0, 'Valid name', 100));
  expect(acc.error).toBe('Invalid account params');
 });
 
 it('shoud not throw if provide a empty string id', () => {
  const acc=  Account.create(fakeCustomAccount( '',  100,  100,  'Valid name',  100 ));
  expect(acc.isFailure).toBe(false);
  expect(acc.getValue().id).not.toBeNull();
  expect(acc.getValue().id).not.toBe('');
 });
 
 it('shoud throw if not provide a valid id (null)', () => {
  const acc =  Account.create(fakeCustomAccount('5', 100, 100,  'Valid name',  100));
  expect(acc.error).toBe('Invalid account params');
  expect(acc.isFailure).toBe(true);
 });
 
 it('shoud throw if not provide a valid id (null)', () => {
  const acc = Account.create(fakeCustomAccount(' 5 ',  100,  100,  'Valid name',  100));
  expect(acc.error).toBe('Invalid account params');
  expect(acc.isFailure).toBe(true);
 });
 
 it('should debit 50 from account ', () => {
  const account = Account.create(fakeAccount());
  const currentBalance = account.getValue().balance;
  const accountWithDebit = account.getValue().applyDebitValue({
   ...account.getValue(), value: 50, fromAccount:account.getValue().account, fromAgency:account.getValue().agency
  });
  expect(accountWithDebit.isFailure).toBe(false);
  expect(accountWithDebit.getValue().balance).toBe(currentBalance - 50);
  
 });
 
 it('should deposit 50 on account ', () => {
  const account = Account.create(fakeAccount());
  const currentBalance = account.getValue().balance;
  const accountWithDeposit = account.getValue().applyDepositValue({
   ...account.getValue(), value: 50, toAccount: account.getValue().account, toAgency: account.getValue().agency
  });
  expect(accountWithDeposit.isFailure).toBe(false);
  expect(accountWithDeposit.getValue().balance).toBe(currentBalance + 50);
  
 });
 
 it('should throw if try debit on negative balance', () => {
  const account = Account.create(fakeCustomAccount(null, 5020, 550, 'Jc Camilo', 0));
  const result = account.getValue().applyDebitValue({
   ...account.getValue(), balance: 0, value: 50, fromAccount: account.getValue().account, fromAgency: account.getValue().agency
  });
  expect(result.isFailure).toBe(true);
  expect(result.error).toBe('Insufficient funds for this operation');
 });
 
 it('should throw if provide a negative value on deposit', () => {
  const account =  Account.create(fakeAccount());
  const result = account.getValue().applyDepositValue({
   ...account.getValue(), balance: 0, value: -50, toAccount: account.getValue().account, toAgency: account.getValue().agency
  });
  expect(result.isFailure).toBe(true);
  expect(result.error).toBe('Invalid value');
 });
 
});