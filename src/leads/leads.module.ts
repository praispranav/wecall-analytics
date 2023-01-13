import { Module } from '@nestjs/common';
import { LeadsController } from './leads.controller';
import { LeadsService } from './leads.service';
import { MedicareModule } from './medicare/medicare.module';
import { AcaModule } from './aca/aca.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LeadsConfig, LeadsConfigSchema } from './leadsConfig.schema';
import { LeadsConnection } from 'src/constants/ConnectionNames';

@Module({
  controllers: [LeadsController],
  providers: [LeadsService],
  imports: [
    MedicareModule,
    AcaModule,
    MongooseModule.forFeature(
      [{ name: LeadsConfig.name, schema: LeadsConfigSchema }],
      LeadsConnection.connectionName,
    ),
  ],
})
export class LeadsModule {}
