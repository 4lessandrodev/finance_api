import { AccountValueObject } from './account.value-object';

describe('account value object', () => {
 it('should fail if provid less than 5 digits value ', () => {
  const accountNumberOrError = AccountValueObject.create(9999);
  expect(accountNumberOrError.isFailure).toBe(true);
  expect(accountNumberOrError.error).toBe('Invalid account number');
 });

 it('should fail if provid more than 5 digits value ', () => {
  const accountNumberOrError = AccountValueObject.create(999999);
  expect(accountNumberOrError.isFailure).toBe(true);
  expect(accountNumberOrError.error).toBe('Invalid account number');
 });

 it('should fail if provid negative value ', () => {
  const accountNumberOrError = AccountValueObject.create(-9999);
  expect(accountNumberOrError.isFailure).toBe(true);
  expect(accountNumberOrError.error).toBe('Invalid account number');
 });

 it('should create a account number ', () => {
  const accountNumberOrError = AccountValueObject.create(50502);
  expect(accountNumberOrError.isFailure).toBe(false);
  expect(accountNumberOrError.getValue().value).toBe(50502);
 });
});