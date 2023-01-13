import { Module } from '@nestjs/common';
import { LeadsController } from './leads.controller';
import { LeadsService } from './leads.service';
import { MedicareModule } from './medicare/medicare.module';
import { AcaModule } from './aca/aca.module';

@Module({
  controllers: [LeadsController],
  providers: [LeadsService],
  imports: [MedicareModule, AcaModule]
})
export class LeadsModule {}
