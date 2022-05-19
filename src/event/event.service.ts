import { Injectable, UseFilters } from "@nestjs/common";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { PrismaService } from "src/prisma/prisma.service";
import { EventDto, JoinEventDto } from "./dto";

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async getAllEvents() {
    return await this.prisma.event.findMany();
  }

  async getById(id: string) {
    return await this.prisma.event.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  async createEvent(dto: EventDto) {
    try {
      const event = await this.prisma.event.create({
        data: dto,
      });

      return event;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new Error("Error on event create");
      }
      throw error;
    }
  }

  async joinEvent(dto: JoinEventDto) {
    /*  const eventUsers = await this.prisma.eventUsers.findUnique({
      where: {
        // userId: dto.userId,
        //eventId: dto.eventId,
      },
    });

    if (eventUsers) return; */

    try {
      return await this.prisma.eventUsers.create({
        data: dto,
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new Error("Error on event create");
      }
      throw error;
    }
  }
}
