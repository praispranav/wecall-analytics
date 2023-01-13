import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LeadsDocument = Leads & Document;

export interface AdditionalKeys{
    fieldName: string;
    formula: string;
}

export interface Aliases {
    fieldName: string;
    label: string;
}

@Schema()
export class Leads {

    @Prop({ type: String })
    name: string;

    @Prop({ type: String })
    dataSource: string;

    @Prop({ type: Array })
    additionalKeys: AdditionalKeys[];

    @Prop({ type: Array })
    aliases: Aliases[];

}

export const LeadsSchema = SchemaFactory.createForClass(Leads);
