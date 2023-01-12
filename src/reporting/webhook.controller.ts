import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Body, UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { ExcelService } from 'src/utils/excel/excel.service';
import { CreateEntryDto } from './webhook.dto';
import { WebhookService } from './webhook.service';

@UseGuards(AuthGuard('api-key'))
@Controller('webhook')
export class WebhookController {

    constructor(private webhookService: WebhookService, private excelService: ExcelService) { }

    @Get()
    async getAll() {
        return await this.webhookService.getAll()
    }

    @Post('insert')
    async insert(@Body() payload: CreateEntryDto) {
        return await this.webhookService.insert(payload)
    }

    @Post('update')
    async update(@Body() payload: CreateEntryDto) {
        return await this.webhookService.update(payload)
    }

    @Post('excel')
    @UseInterceptors(
        FileInterceptor('file', {
            dest: './upload',
        }),
    )
    async addEntriesFromExcel(@UploadedFile() file: any) {
        const json = await this.excelService.convertToJSON(file);
        const Sheet1 = json['Sheet1'];
        const generatedEntries = this.webhookService.generateEntries(Sheet1)
        const result = this.webhookService.addMultipleEntries(generatedEntries)
        return result
    }
}
