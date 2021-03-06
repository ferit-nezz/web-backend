import { User } from '@prisma/client';
import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class EventDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsDate()
  @IsNotEmpty()
  time: Date;

  @IsNotEmpty()
  userId: number;
}

export class JoinEventDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  eventId: number;
}
