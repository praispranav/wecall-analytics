import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReportingConnection } from 'src/constants/ConnectionNames';
import { CreateEntryDto } from './webhook.dto';
import { Webhook, WebhookDocument } from './webhook.schema';

@Injectable()
export class WebhookService {
    constructor(
        @InjectModel(Webhook.name, ReportingConnection.connectionName) private model: Model<WebhookDocument>,
    ) { }

    async insert(payload) {
        const dto = new CreateEntryDto();
        dto.CallDateTime = payload.CallDateTime ? (payload.CallDateTime) : '';
        dto.Hangup = payload.Hangup ? payload.Hangup : "";
        dto.CallerId = payload.CallerId ? payload.CallerId : "";
        dto.InboundCallId = payload.InboundCallId;
        dto.Publisher = payload.Publisher ? payload.Publisher : "";
        dto.PublisherId = payload.PublisherId ? payload.PublisherId : "";
        dto.Revenue = payload.Revenue ? payload.Revenue : 0;
        dto.Campaign = payload.Campaign ? payload.Campaign : "";
        dto.Target = payload.Target ? payload.Target : "";
        dto.TargetId = payload.TargetId ? payload.TargetId : '';
        dto.Buyer = payload.Buyer ? payload.Buyer : '';
        dto.BuyerId = payload.BuyerId ? payload.BuyerId : "";
        dto.Duplicate = payload.Duplicate ? payload.Duplicate : false;
        dto.Payout = payload.Payout ? payload.Payout : 0;
        dto.Dialed = payload.Dialed ? payload.Dialed : "";
        dto.RecordingUrl = payload.RecordingUrl ? payload.RecordingUrl : '';
        dto.TelcoCost = payload.TelcoCost ? payload.TelcoCost : 0;
        dto.ConversionAdjusted = payload.ConversionAdjusted ? payload.ConversionAdjusted : false;
        dto.PayoutAdjusted = payload.PayoutAdjusted ? payload.PayoutAdjusted : false;
        dto.IsConverted = payload.IsConverted ? payload.IsConverted : false;
        dto.IsBillable = payload.IsBillable ? payload.IsBillable : false;
        dto.JornayaId = payload.JornayaId ? payload.JornayaId : '';
        dto.LeadSource = payload.LeadSource ? payload.LeadSource : ""

        dto.UtmSource = payload.UtmSource ? payload.UtmSource : "";
        dto.UtmMedium = payload.UtmMedium ? payload.UtmMedium : "";
        dto.UtmCampaign = payload.UtmCampaign ? payload.UtmCampaign : '';
        dto.UtmAdset = payload.UtmAdset ? payload.UtmAdset : "";
        dto.UtmAd = payload.UtmAd ? payload.UtmAd : "";
        dto.SiteId = payload.SiteId ? payload.SiteId : '';
        dto.VisitorId = payload.VisitorId ? payload.VisitorId : '';
        dto.InboundState = payload.InboundState ? payload.InboundState : '';
        dto.IcpState = payload.IcpState ? payload.IcpState : '';
        dto.IcpZip = payload.IcpZip ? payload.IcpZip : 0;
        dto.UserState = payload.UserState ? payload.UserState : '';
        dto.UserZip = payload.UserZip ? payload.UserZip : 0;

        const obj = {
            ...dto,
            callDateTimeJs: payload.CallDateTime ? this.formatRequestDateFormat(payload.CallDateTime) : new Date(),
            ConnectedDurationSec: !isNaN(Number(payload.ConnectedDurationSec)) ? Number(payload.ConnectedDurationSec) : 0,
            ConnectedDurationMin: !isNaN(Number(payload.ConnectedDurationSec)) ? Number(payload.ConnectedDurationSec) / 60 : 0
        }

        const { _id } = await (new this.model(obj)).save()
        return { message: "Inserted Successfully", _id, InboundCallId: payload.InboundCallId }
    }

    async update(payload) {
        const findEntry = await this.getEntryByInboundCallerId(payload.InboundCallId);
        if (!findEntry) return

        const dto = new CreateEntryDto();
        dto.CallDateTime = payload.CallDateTime ? (payload.CallDateTime) : findEntry.CallDateTime;
        dto.Hangup = payload.Hangup ? payload.Hangup : findEntry.Hangup;
        dto.CallerId = payload.CallerId ? payload.CallerId : findEntry.CallerId;
        dto.InboundCallId = payload.InboundCallId;
        dto.Publisher = payload.Publisher ? payload.Publisher : findEntry.Publisher;
        dto.PublisherId = payload.PublisherId ? payload.PublisherId : findEntry.PublisherId;
        dto.Revenue = payload.Revenue ? payload.Revenue : findEntry.Revenue;
        dto.Campaign = payload.Campaign ? payload.Campaign : findEntry.Campaign;
        dto.Target = payload.Target ? payload.Target : findEntry.Target;
        dto.TargetId = payload.TargetId ? payload.TargetId : findEntry.TargetId;
        dto.Buyer = payload.Buyer ? payload.Buyer : findEntry.Buyer;
        dto.BuyerId = payload.BuyerId ? payload.BuyerId : findEntry.BuyerId;
        dto.Duplicate = payload.Duplicate ? payload.Duplicate : findEntry.Duplicate;
        dto.Payout = payload.Payout ? payload.Payout : findEntry.Payout;
        dto.Dialed = payload.Dialed ? payload.Dialed : findEntry.Dialed;
        dto.RecordingUrl = payload.RecordingUrl ? payload.RecordingUrl : findEntry.RecordingUrl;
        dto.TelcoCost = payload.TelcoCost ? payload.TelcoCost : findEntry.TelcoCost;
        dto.ConversionAdjusted = payload.ConversionAdjusted ? payload.ConversionAdjusted : findEntry.ConversionAdjusted;
        dto.PayoutAdjusted = payload.PayoutAdjusted ? payload.PayoutAdjusted : findEntry.PayoutAdjusted;
        dto.IsConverted = payload.IsConverted ? payload.IsConverted : findEntry.IsConverted;
        dto.IsBillable = payload.IsBillable ? payload.IsBillable : findEntry.IsBillable;
        dto.JornayaId = payload.JornayaId ? payload.JornayaId : findEntry.JornayaId;
        dto.LeadSource = payload.LeadSource ? payload.LeadSource : findEntry.LeadSource

        dto.UtmSource = payload.UtmSource ? payload.UtmSource : findEntry.UtmSource;
        dto.UtmMedium = payload.UtmMedium ? payload.UtmMedium : findEntry.UtmMedium;
        dto.UtmCampaign = payload.UtmCampaign ? payload.UtmCampaign : findEntry.UtmCampaign;
        dto.UtmAdset = payload.UtmAdset ? payload.UtmAdset : findEntry.UtmAdset;
        dto.UtmAd = payload.UtmAd ? payload.UtmAd : findEntry.UtmAd;
        dto.SiteId = payload.SiteId ? payload.SiteId : findEntry.SiteId;
        dto.VisitorId = payload.VisitorId ? payload.VisitorId : findEntry.VisitorId;
        dto.InboundState = payload.InboundState ? payload.InboundState : findEntry.InboundState;
        dto.IcpState = payload.IcpState ? payload.IcpState : findEntry.IcpState;
        dto.IcpZip = payload.IcpZip ? payload.IcpZip : findEntry.IcpZip;
        dto.UserState = payload.UserState ? payload.UserState : findEntry.UserState;
        dto.UserZip = payload.UserZip ? payload.UserZip : findEntry.UserZip;

        try {
            await this.model.findOneAndUpdate({ InboundCallId: payload.InboundCallId }, dto);
            return { message: "Updated Successfully", _id: findEntry._id, InboundCallId: payload.InboundCallId }
        } catch (error) {
            throw new HttpException("", HttpStatus.BAD_REQUEST)
        }
    }

    formatRequestDateFormat(date: string): Date {
        const newDateObj = new Date();

        const split = date.split(" ")
        const onlyTime = split[1];
        const onlyDate = split[0];


        const onlyDateSplit = onlyDate.split('-');
        let months = onlyDateSplit[0]
        newDateObj.setMonth(Number(months) > 0 ? Number(months) - 1 : Number(months));
        let day = onlyDateSplit[1];
        newDateObj.setDate(Number(day));
        let year = onlyDateSplit[2];
        newDateObj.setFullYear(Number(year))


        const onlyTimeSplit = onlyTime.split(':');
        let hours = onlyTimeSplit[0];
        newDateObj.setHours(Number(hours))
        let minutes = onlyTimeSplit[1];
        newDateObj.setMinutes(Number(minutes));
        let seconds = onlyTimeSplit[2];
        newDateObj.setSeconds(Number(seconds));

        return newDateObj
    }

    async getEntryByInboundCallerId(InboundCallId: string) {
        const result = await this.model.findOne({ InboundCallId })
        return result
    }

    async getAll() {
        return await this.model.find()
    }

    generateEntries(data) {
        const Columns = data[0];
        const newList: Node[] = [];

        data.slice(1, data.length).forEach((a) => {
            const obj: any = {};

            const ent = Object.entries(a);
            ent.forEach((i) => {
                obj[Columns[i[0]]] = String(i[1]);
            });
            newList.push(obj);
        });

        return newList;
    }

    async addMultipleEntries(data) {
        const result = await this.model.insertMany(data);
        return result;
    }

    async disposition({ IsConverted, InboundCallId }){
        await this.model.findOneAndUpdate({ InboundCallId }, { IsConverted });
        return { message: `Inbound Call Id ${InboundCallId} has been updated.`}
    }
}
