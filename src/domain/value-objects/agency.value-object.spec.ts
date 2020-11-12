import { AgencyNumber } from './agency.value-object';

describe('agency value object ', () => {
 it('should fail if provide value greatter than 9999', () => {
  const agencyOrError = AgencyNumber.create(10000);
  expect(agencyOrError.isFailure).toBe(true);
  expect(agencyOrError.error).toBe('Invalid agency number');
 });

 it('should fail if provide negative value', () => {
  const agencyOrError = AgencyNumber.create(-1);
  expect(agencyOrError.isFailure).toBe(true);
  expect(agencyOrError.error).toBe('Invalid agency number');
 });

 it('should fail if provide three digits value', () => {
  const agencyOrError = AgencyNumber.create(999);
  expect(agencyOrError.isFailure).toBe(true);
  expect(agencyOrError.error).toBe('Invalid agency number');
 });

 it('should succesly create an agency', () => {
  const agencyOrError = AgencyNumber.create(2280);
  expect(agencyOrError.isFailure).toBe(false);
  expect(agencyOrError.getValue().value).toBe(2280);
 });
});