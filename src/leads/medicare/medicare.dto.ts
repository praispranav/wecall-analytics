import { ApiProperty } from '@nestjs/swagger';

export class CreateMedicareEntryDto {
  @ApiProperty({
    description: 'e.g interna1, internal2',
    required: false,
    default: null,
  })
  Generator: String = '';

  @ApiProperty({
    description: 'Generated by voluum on landerpage',
    required: false,
    default: null,
  })
  ClickId: String = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  UtmSource: String = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  UtmMedium: String = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  UtmCampaign: String = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  UtmAdset: String = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  UtmAd: String = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  SiteId: String = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  Language: String = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  Device: String = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  Interest: String = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  Fbclid: String = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  Gclid: String = '';

  @ApiProperty({
    description: 'Quotes website first question.',
    required: false,
    default: null,
  })
  AgeAbove64: String = '';

  @ApiProperty({
    description: 'Zip Code of the user. max size of the zip will 5digits.',
    required: false,
    default: null,
    maximum: 99999,
  })
  Zip: number = 0;

  @ApiProperty({
    description: '',
    required: false,
    default: null,
  })
  FirstName: string = '';

  @ApiProperty({
    description: '',
    required: false,
    default: null,
  })
  LastName: string = '';

  @ApiProperty({
    description: 'Mobile number of user.',
    required: false,
    default: null,
  })
  HomePhone: number = 0;

  @ApiProperty({
    description: 'Email of the user.',
    required: false,
    default: '',
  })
  Email: string = '';

  @ApiProperty({
    description:
      'Visitor Id is generated on quotes website. It is unique value. It get stored in localStorage of the quotes website.',
    required: false,
    default: '',
  })
  VisitorId: string = '';

  @ApiProperty({
    description:
      'String time when user submit from quotes. Time zone will ???America/New_York??? and format will be ???YYYY-MM-DD hh:mm:ss???',
    required: false,
    default: '',
  })
  CreatedDate: string = 'YYYY-MM-DD hh:mm:ss';
}
