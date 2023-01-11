import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { CreateEntryDto } from './webhook.dto';
import { WebhookService } from './webhook.service';

@UseGuards(AuthGuard('api-key'))
@Controller('webhook')
export class WebhookController {

    constructor(private webhookService: WebhookService) { }

    @Get()
    async getAll() {
        return await this.webhookService.getAll()
    }

    @Post()
    async insert(@Body() payload: CreateEntryDto) {
        return await this.webhookService.insert(payload)
    }
}
