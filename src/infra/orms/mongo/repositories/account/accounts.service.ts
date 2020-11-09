
import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from '../../../../../dto/account/create-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountRepository } from './account.repository';
import { IAccount } from '../../../../../domain/interfaces/entities/IAccount';
import { CreateAccountUseCase } from '../../../../../application/use_cases/account/create-account.use-case';


@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountRepository) private accountRepository: AccountRepository
    ) {}
    
    async create(createAccountDto: CreateAccountDto): Promise<IAccount> {
      const createAccount = new CreateAccountUseCase().execute(createAccountDto, this.accountRepository);
      return createAccount;
    }
    
   // Add repository CRUD method
  }
  