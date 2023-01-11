import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WebhookDocument = Webhook & Document;

@Schema()
export class Webhook {

    @Prop({ type: String, required: false, default: null, index: true })
    CallDateTime: string;

    @Prop({ type: Date, required: false, index: true })
    callDateTimeJs: Date;

    @Prop({ type: String, required: false, default: null })
    Hangup: string;

    @Prop({ type: Number, required: false, default: null })
    CallerId: Date;

    @Prop({ type: String, required: true, maxlength: 255, unique: true, index: true })
    InboundCallId: Date;

    @Prop({ type: String, required: false, default: null })
    Publisher: Date;

    @Prop({ type: String, required: false, maxlength: 255, default: null })
    PublisherId: String;

    @Prop({ type: Number, required: false, default: null })
    Revenue: number;

    @Prop({ type: String, required: false, default: null })
    Campaign: String;

    @Prop({ type: String, required: false, default: null })
    Target: String;

    @Prop({ type: String, required: false, default: null, maxlength: 255 })
    TargetId: String;

    @Prop({ type: String, required: false, default: null })
    Buyer: String;

    @Prop({ type: String, required: false, default: null })
    BuyerId: String;

    @Prop({ type: Number, required: false, default: null })
    ConnectedDurationSec: Number;

    @Prop({ type: Number, required: false, default: null })
    ConnectedDurationMin: Number;

    @Prop({ type: Boolean, required: false, default: false })
    Duplicate: boolean;

    @Prop({ type: Number, required: false, default: null })
    Payout: number;

    @Prop({ type: Number, required: false, default: null })
    Dialed: number;

    @Prop({ type: String, required: false, default: null })
    RecordingUrl: string;

    @Prop({ type: Number, required: false, default: null })
    TelcoCost: number;

    @Prop({ type: Boolean, required: false, default: null })
    ConversionAdjusted: boolean;

    @Prop({ type: Boolean, required: false, default: null })
    PayoutAdjusted: boolean;

    @Prop({ type: Boolean, required: false, default: null })
    IsConverted: boolean;

    @Prop({ type: Boolean, required: false, default: null })
    IsBillable: boolean;

    @Prop({ type: String, required: false, default: null })
    JornayaId: string;

    @Prop({ type: String, required: false, default: null })
    LeadSource: string;

    @Prop({ type: Date, required: false, default: null })
    timestamp: Date = new Date();

}

export const WebhookSchema = SchemaFactory.createForClass(Webhook);
