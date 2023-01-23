import { Module } from '@nestjs/common';
import { ExcelService } from './excel/excel.service';
import { JobsModule } from './jobs/jobs.module';

@Module({
  providers: [ExcelService],
  exports:[ExcelService],
  imports: [JobsModule]
})
export class UtilsModule {}
