import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Webhook, WebhookDocument } from './webhook.schema';

@Injectable()
export class WebhookService {
    constructor(@InjectModel(Webhook.name) private model: Model<WebhookDocument>) { }

    async insert(payload) {
        payload.ConnectedDurationMin = payload.ConnectedDurationSec / 60
        const { _id } = await (new this.model(payload)).save()
        return { message: "Inserted Successfully", _id }
    }

    async getAll() {
        return await this.model.find()
    }

}
