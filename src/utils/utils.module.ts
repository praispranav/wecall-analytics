import { Module } from '@nestjs/common';
import { ExcelService } from './excel/excel.service';

@Module({
  providers: [ExcelService],
  exports:[ExcelService]
})
export class UtilsModule {}
