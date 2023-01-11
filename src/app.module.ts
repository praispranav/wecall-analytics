import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { WebhookModule } from './webhook/webhook.module';
require('dotenv').config();

@Module({
  imports: [AuthModule, WebhookModule, MongooseModule.forRoot(process.env.DB)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
