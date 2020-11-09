import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { DepositCashAccountDto } from 'src/dto';
import { DepositService } from 'src/infra/orms/mongo/repositories/deposit/deposit.service';

@Controller('deposits')
export class DepositController{
 constructor(private depositService: DepositService) { }
 
 @Post()
 async makeNewDeposit(@Body(ValidationPipe) depositCashDto: DepositCashAccountDto) {
  await this.depositService.create(depositCashDto);
 }
}