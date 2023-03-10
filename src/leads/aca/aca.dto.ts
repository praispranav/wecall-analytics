import { ApiProperty } from '@nestjs/swagger';

export class CreateAcaEntryDto {
  @ApiProperty({
    description: 'e.g interna1, internal2',
    required: false,
    default: null,
  })
  Generator: string = '';

  @ApiProperty({
    description: 'Generated by voluum on landerpage',
    required: false,
    default: null,
  })
  ClickId: string = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  UtmSource: string = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  UtmMedium: string = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  UtmCampaign: string = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  UtmAdset: string = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  UtmAd: string = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  SiteId: string = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  Language: string = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  Device: string = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  Interest: string = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  Fbclid: string = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  Gclid: string = '';

  @ApiProperty({
    description: 'Zip Code of the user. max size of the zip will 5digits.',
    required: false,
    default: null,
    maximum: 99999,
  })
  Zip: number = 0;

  @ApiProperty({
    required: false,
    default: null,
  })
  FirstName: string = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  LastName: string = '';

  @ApiProperty({
    description: 'Mobile number of user.',
    required: false,
    default: null,
  })
  HomePhone: string = '';

  @ApiProperty({
    description: 'Email of the user.',
    required: false,
    default: '',
  })
  Email: string = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  NoOfPeople: string = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  EnrolledMedicare: string = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  EnrolledMedicaid: string = '';

  @ApiProperty({
    required: false,
    default: null,
  })
  Income: string = '';

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
