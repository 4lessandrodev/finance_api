import { DepositCashUseCase } from './deposit-cash.use-case';
import {fakeDeposit,fakeDepositRepo } from './../tests/fakeRepo';
import { Deposit } from './../../../domain/entities/Deposit';



describe('create account', () => {

   it('should create a instance of account to make a deposit', () => {
      const repository = fakeDepositRepo();
      const depositDto = new Deposit(fakeDeposit());
      const result = async ()=> await new DepositCashUseCase().execute(depositDto, repository);
      expect(result).not.toThrow();
   });

   // Ensure call credit domain event on make a deposit 
   
});