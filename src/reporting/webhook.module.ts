import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportingConnection } from 'src/constants/ConnectionNames';
import { UtilsModule } from 'src/utils/utils.module';
import { WebhookController } from './webhook.controller';
import { Webhook, WebhookSchema } from './webhook.schema';
import { WebhookService } from './webhook.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Webhook.name, schema: WebhookSchema }],
      ReportingConnection.connectionName,
    ),
    UtilsModule,
  ],
  controllers: [WebhookController],
  providers: [WebhookService],
})
export class WebhookModule {}
