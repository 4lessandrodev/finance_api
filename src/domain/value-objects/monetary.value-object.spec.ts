import { MonetaryValueObject } from './monetary.value-object';

describe('monetary value object ', () => {
 it('should fail if provide a negative value ', () => {
  const idOrError = MonetaryValueObject.create(-1);
  expect(idOrError.isFailure).toBe(true);
  expect(idOrError.errorValue()).toBe('Invalid value. It should be positive');
 });

 it('should succesly create an monetary value',  () => {
  const idOrError =  MonetaryValueObject.create(100);
  expect(idOrError.isFailure).toBe(false);
  expect(idOrError.getValue().value).toBeGreaterThanOrEqual(100);
 });
});