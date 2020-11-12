import { IdValueObject } from './id.value-object';
import {v4 as uuid} from 'uuid';

describe('digit value object ', () => {
 it('should fail if provide a simple random string', () => {
  const idOrError = IdValueObject.create('ASD32234LKJKDFG-203932SDKNCVAQE');
  expect(idOrError.isFailure).toBe(true);
  expect(idOrError.errorValue()).toBe('Invalid uuid string pattern');
 });

 it('should succesly create an id',  () => {
  const idOrError =  IdValueObject.create(uuid());
  expect(idOrError.isFailure).toBe(false);
  expect(idOrError.getValue().value.length).toBeGreaterThanOrEqual(36);
 });
});