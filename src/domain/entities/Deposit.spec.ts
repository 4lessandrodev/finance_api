import { IDepositCash } from '../interfaces/entities/IDepositCash';
import { Deposit } from './Deposit';

describe('toAccount', () => {
 const validDeposit = {
  toAgency: 1090,
  toAccount: 559020,
  value: 1090
 };
 const createValidDeposit = ():Deposit => {
  return new Deposit(validDeposit);
 };

 const createInvalidDeposit = (params:IDepositCash) => {
  return new Deposit(params);
 };

 it('shoud create a new valid toAccount', () => {
  const deposit = createValidDeposit();
  expect(deposit).not.toBeUndefined();
  expect(createValidDeposit).not.toThrow();
 });

 it('shoud throw if provide 0 value to toAgency, toAccount and deposit value', () => {
  const fn = ()=> createInvalidDeposit({toAgency: 0, toAccount: 0, value: 0});
  expect(fn).toThrow('Invalid deposit params');
 });

 it('shoud throw if provide a 0 value to toAgency', () => {
  const fn = ()=> createInvalidDeposit({toAgency: 0, toAccount: 20, value: 1090});
  expect(fn).toThrow('Invalid deposit params');
 });

 it('shoud throw if provide a 0 value to toAccount', () => {
  const fn = ()=> createInvalidDeposit({toAgency: 10, toAccount: 0, value: 1090});
  expect(fn).toThrow('Invalid deposit params');
 });

 it('shoud throw if not provide a zero value', () => {
  const fn = ()=> createInvalidDeposit({toAgency: 10, toAccount: 20, value: 0});
  expect(fn).toThrow('Invalid deposit params');
 });

 it('shoud create a valid instance of deposit', () => {
  const fn = () => createInvalidDeposit({toAgency: 100, toAccount: 20, value: 1090});
  expect(fn).not.toThrow('Invalid deposit params');
  expect(fn().toAccount).toBe(20);
  expect(fn().toAgency).toBe(100);
  expect(fn().value).toBe(1090);
 });


});