import { User } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";

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

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  time: string;

  @IsNotEmpty()
  userId: number;
}

export class EventInteractionDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  eventId: number;
}
