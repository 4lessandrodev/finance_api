import { NameValueObject } from './name.value-object';

describe('name value object ', () => {
 it('should fail if provide a name length less then 3 character ', () => {
  const idOrError = NameValueObject.create('It');
  expect(idOrError.isFailure).toBe(true);
  expect(idOrError.errorValue()).toBe('Invalid name length. Name should be min 3 characters');
 });

 it('should succesly create an id',  () => {
  const idOrError =  NameValueObject.create('Alex');
  expect(idOrError.isFailure).toBe(false);
  expect(idOrError.getValue().value).toBe('Alex');
 });
});