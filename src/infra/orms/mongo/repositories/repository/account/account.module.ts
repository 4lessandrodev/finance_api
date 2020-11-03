import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AccountController } from "src/presentation/account/account.controller";
import { Account, AccountSchema } from "../../schemas/account.schema";
import { AccountRespository } from "./account.repository";
import { AccountService } from "./account.service";

@Module({
 imports: [
  MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  AccountRespository
 ],
 controllers: [AccountController],
 providers:[AccountService]
})
export class AccountModule{}