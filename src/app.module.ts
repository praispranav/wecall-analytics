import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { WebhookModule } from './reporting/webhook.module';
import { UtilsModule } from './utils/utils.module';
import { LeadsModule } from './leads/leads.module';
import { LeadsModule } from './leads/leads.module';
require('dotenv').config();

@Module({
  imports: [
    AuthModule, 
    WebhookModule, 
    MongooseModule.forRoot(process.env.DB, { dbName: 'wecall-analytics'}), 
    UtilsModule, LeadsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
