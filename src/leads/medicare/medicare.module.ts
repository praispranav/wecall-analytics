import { Module } from '@nestjs/common';
import { MedicareService } from './medicare.service';
import { MedicareController } from './medicare.controller';

@Module({
  providers: [MedicareService],
  controllers: [MedicareController]
})
export class MedicareModule {}
