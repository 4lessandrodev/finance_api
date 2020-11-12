import { DigitValueObject } from './digit.value-object';

describe('digit value object ', () => {
 it('should fail if provide value greatter than 9', () => {
  const digitOrError = DigitValueObject.create(10);
  expect(digitOrError.isFailure).toBe(true);
  expect(digitOrError.error).toBe('Invalid digit number');
 });

 it('should fail if provide negative value', () => {
  const digitOrError = DigitValueObject.create(-1);
  expect(digitOrError.isFailure).toBe(true);
  expect(digitOrError.error).toBe('Invalid digit number');
 });

 it('should fail if provide two digits value', () => {
  const digitOrError = DigitValueObject.create(10);
  expect(digitOrError.isFailure).toBe(true);
  expect(digitOrError.error).toBe('Invalid digit number');
 });

 it('should succesly create an digit', () => {
  const digitOrError = DigitValueObject.create(7);
  expect(digitOrError.isFailure).toBe(false);
  expect(digitOrError.getValue().value).toBe(7);
 });
});