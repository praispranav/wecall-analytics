import { ApiProperty } from '@nestjs/swagger';


export class CreateEntryDto {

    @ApiProperty({
        description: "Call date time",
        required: false,
        default: null
    })
    CallDateTime: Date;

    @ApiProperty({
        required: false,
        default: null
    })
    Hangup: string | null = null;

    @ApiProperty({
        required: false,
        default: null
    })
    CallerId: number | null = null;

    @ApiProperty({
        description: "This is unique id for every call.",
        required: true,
        maxLength: 255
    })
    InboundCallId: string = '';

    @ApiProperty({
        required: false,
        default: null
    })
    Publisher: string | null = null;

    @ApiProperty({
        required: false,
        description: "Maximum length of this field is 255.",
        maxLength: 255,
        default: null
    })
    PublisherId: string | null = null;

    @ApiProperty({
        description: "Revenue will be in 40.0 format.",
        required: false,
        default: null
    })
    Revenue: number | null = null;

    @ApiProperty({
        required: false,
        default: null
    })
    Campaign: string | null = null;

    @ApiProperty({
        required: false,
        default: null
    })
    Target: string | null = null;

    @ApiProperty({
        description: "Maximum length of this field is 255.",
        maxLength: 255,
        required: false,
        default: null
    })
    TargetId: string | null = null;

    @ApiProperty({
        required: false,
        default: null
    })
    Buyer: string | null = null;

    @ApiProperty({
        description: "Maximum length of this field is 255.",
        maxLength: 255,
        required: false,
        default: null
    })
    BuyerId: string | null = null;

    @ApiProperty({
        description: "Call duration in seconds.",
        required: false,
        default: null
    })
    ConnectedDuration: number | null = null;

    @ApiProperty({
        required: false,
        default: false
    })
    Duplicate: boolean = false

    @ApiProperty({
        required: false,
        default: null
    })
    Payout: number | null = null

    @ApiProperty({
        required: false,
        default: null
    })
    Dialed: number | null = null;

    @ApiProperty({
        description: 'This is recording audio link.',
        required: false,
        default: null
    })
    RecordingUrl: string | null = null;

    @ApiProperty({
        required: false,
        default: null
    })
    TelcoCost: number | null = null;

    @ApiProperty({
        required: false,
        default: false
    })
    ConversionAdjusted: boolean = false

    @ApiProperty({
        required: false,
        default: false
    })
    PayoutAdjusted: boolean = false;

    @ApiProperty({
        description: "Contains 1 for converted, 0 for non-converted",
        required: false,
        default: false
    })
    IsConverted: boolean = false

    @ApiProperty({
        description: "",
        required: false,
        default: false
    })
    IsBillable: boolean = false

    @ApiProperty({
        description: "",
        maxLength: 255,
        required: false,
        default: null
    })
    JornayaId: string | null = null;

    @ApiProperty({
        description: "Contains 1 for converted, 0 for non-converted",
        required: false,
        default: null
    })
    LeadSource: string | null = null;
}