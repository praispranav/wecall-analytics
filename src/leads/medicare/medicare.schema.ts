import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MedicareDocument = Medicare & Document;

@Schema()
export class Medicare {

    @Prop({ type: String })
    Generator: string;

    @Prop({ type: String })
    ClickId: string;

    @Prop({ type: String })
    UtmSource: string;

    @Prop({ type: String })
    UtmMedium: string;

    @Prop({ type: String })
    UtmCampaign: string;

    @Prop({ type: String })
    UtmAdset: string;

    @Prop({ type: String })
    UtmAd: string;

    @Prop({ type: String })
    SiteId: string;

    @Prop({ type: String })
    Language: string;

    @Prop({ type: String })
    Device: string;

    @Prop({ type: String })
    Interest: string;

    @Prop({ type: String })
    Fbclid: string;

    @Prop({ type: String })
    Gclid: string;

    // Above are query parameters

    @Prop({ type: String })
    AgeAbove64: string;

    @Prop({ type: String })
    Zip: string;

    @Prop({ type: String })
    FirstName: string;

    @Prop({ type: String })
    LastName: string;

    @Prop({ type: String })
    HomePhone: string;

    @Prop({ type: String })
    Email: string;

    @Prop({ type: String })
    VisitorId: string;

    @Prop({ type: String })
    CreatedDate: string;

    @Prop({ type: Date, required: false, default: null })
    timestamp: Date = new Date();

}

export const MedicareSchema = SchemaFactory.createForClass(Medicare);
