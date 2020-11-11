import { DepositCashUseCase } from './deposit-cash.use-case';
import {fakeDeposit,fakeDepositRepo } from './../tests/fakeRepo';
import { Deposit } from './../../../domain/entities/Deposit';



describe('create account', () => {

   it('should create a instance of account to make a deposit', async () => {
      const repository = fakeDepositRepo();
      const depositDto = Deposit.create(fakeDeposit());
      const result = await new DepositCashUseCase().execute(depositDto.getValue(), repository);
      expect(result.getValue().value).toBe(depositDto.getValue().value);
   });

   // Ensure call credit domain event on make a deposit 
   
});