import { IDepositCash } from '../interfaces/entities/IDepositCash';
import { Deposit } from './Deposit';

describe('Account', () => {
 const validDeposit = {
  agency: 1090,
  account: 559020,
  depositValue: 1090
 };
 const createValidDeposit = ():Deposit => {
  return new Deposit(validDeposit);
 };

 const createInvalidDeposit = (params:IDepositCash) => {
  return new Deposit(params);
 };

 it('shoud create a new valid account', () => {
  const deposit = createValidDeposit();
  expect(deposit).not.toBeUndefined();
  expect(createValidDeposit).not.toThrow();
 });

 it('shoud throw if provide 0 value to agency, account and deposit value', () => {
  const fn = ()=> createInvalidDeposit({agency: 0, account: 0, depositValue: 0});
  expect(fn).toThrow('Invalid deposit params');
 });

 it('shoud throw if provide a 0 value to agency', () => {
  const fn = ()=> createInvalidDeposit({agency: 0, account: 20, depositValue: 1090});
  expect(fn).toThrow('Invalid deposit params');
 });

 it('shoud throw if provide a 0 value to account', () => {
  const fn = ()=> createInvalidDeposit({agency: 10, account: 0, depositValue: 1090});
  expect(fn).toThrow('Invalid deposit params');
 });

 it('shoud throw if not provide a zero depositValue', () => {
  const fn = ()=> createInvalidDeposit({agency: 10, account: 20, depositValue: 0});
  expect(fn).toThrow('Invalid deposit params');
 });

 it('shoud create a valid instance of deposit', () => {
  const fn = () => createInvalidDeposit({agency: 100, account: 20, depositValue: 1090});
  expect(fn).not.toThrow('Invalid deposit params');
  expect(fn().account).toBe(20);
  expect(fn().agency).toBe(100);
  expect(fn().depositValue).toBe(1090);
 });


});