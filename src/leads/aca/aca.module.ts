import { Module } from '@nestjs/common';
import { AcaController } from './aca.controller';
import { AcaService } from './aca.service';

@Module({
  controllers: [AcaController],
  providers: [AcaService]
})
export class AcaModule {}
