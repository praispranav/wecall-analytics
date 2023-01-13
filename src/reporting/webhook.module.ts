import { Module } from '@nestjs/common';
import { getConnectionToken, MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
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
  providers: [
    {
      provide: WebhookService,
      useFactory: (webhookConnection) => {
        return new WebhookService(webhookConnection);
      },
      inject: [getConnectionToken(ReportingConnection.connectionName)],
    }
  ],
})
export class WebhookModule {}
