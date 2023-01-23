import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WebhookDocument = Webhook & Document;

export enum JobConfigStatus {

}

@Schema()
export class Webhook {

    @Prop({ type: String })
    status: string;

    @Prop({ type: String })
    interval: string;

    // @Prop({ type: String })
    // : string;


    @Prop({ type: Date, required: false, default: null })
    timestamp: Date = new Date();

}

export const WebhookSchema = SchemaFactory.createForClass(Webhook);
