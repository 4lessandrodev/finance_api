import { Result } from '../aggregate-root/Result';
import { IDepositCash } from '../interfaces/entities/IDepositCash';
import { Deposit } from './Deposit';

describe('toAccount', () => {
 const validDeposit = {
  toAgency: 1090,
  toAccount: 559020,
  value: 1090
 };
 const createValidDeposit = ():Result<Deposit> => {
  return Deposit.create(validDeposit);
 };

 const createInvalidDeposit = (params:IDepositCash):Result<Deposit> => {
  return Deposit.create(params);
 };

 it('shoud create a new valid deposit to Account', () => {
  const deposit = createValidDeposit();
  expect(deposit).not.toBeUndefined();
  expect(deposit.getValue()).not.toBeNull();
  expect(deposit.getValue().id).not.toBeNull();
 });

 it('shoud throw if provide 0 value to toAgency, toAccount and deposit value', () => {
  const fn = ()=> createInvalidDeposit({toAgency: 0, toAccount: 0, value: 0});
  expect(fn().error).toBe('Invalid deposit params');
 });

 it('shoud throw if provide a 0 value to toAgency', () => {
  const fn = ()=> createInvalidDeposit({toAgency: 0, toAccount: 20, value: 1090});
  expect(fn().error).toBe('Invalid deposit params');
 });

 it('shoud throw if provide a 0 value to toAccount', () => {
  const fn = ()=> createInvalidDeposit({toAgency: 10, toAccount: 0, value: 1090});
  expect(fn().error).toBe('Invalid deposit params');
 });

 it('shoud throw if not provide a zero value', () => {
  const fn = ()=> createInvalidDeposit({toAgency: 10, toAccount: 20, value: 0});
  expect(fn().error).toBe('Invalid deposit params');
 });

 it('shoud create a valid instance of deposit', () => {
  const fn = () => createInvalidDeposit({toAgency: 100, toAccount: 20, value: 1090});
  expect(fn().isFailure).toBe(false);
  expect(fn().getValue().toAccount).toBe(20);
  expect(fn().getValue().toAgency).toBe(100);
  expect(fn().getValue().value).toBe(1090);
 });


});