import { Injectable, UseFilters } from "@nestjs/common";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { PrismaService } from "src/prisma/prisma.service";
import { EventDto, EventInteractionDto } from "./dto";

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async getAllEvents() {
    return await this.prisma.event.findMany();
  }

  async isUserJoined(userId: string, eventId: string) {
    const userEvent = await this.prisma.eventUsers.findMany({
      where: {
        userId: parseInt(userId),
        eventId: parseInt(eventId),
      },
    });

    if (userEvent.length > 0) return true;
    return false;
  }

  async getAllUserEvents(userId: string) {
    console.log(userId);
    return await this.prisma.event.findMany({
      where: {
        userId: parseInt(userId),
      },
    });
  }

  async getAllUserJoinedEvents(userId: string) {
    const eventUsers = await this.prisma.eventUsers.findMany({
      where: {
        userId: parseInt(userId),
      },
    });

    console.log(eventUsers);

    return await this.prisma.event.findMany({
      where: {
        id: { in: eventUsers.map((x) => x.id) },
      },
    });
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

  async joinEvent(dto: EventInteractionDto) {
    const eventUsers = await this.prisma.eventUsers.findMany({
      where: {
        userId: dto.userId,
        eventId: dto.eventId,
      },
    });

    if (eventUsers.length > 0) return "User is already joined";

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

  async unjoinEvent(dto: EventInteractionDto) {
    const eventUser = await this.prisma.eventUsers.findMany({
      where: {
        userId: dto.userId,
        eventId: dto.eventId,
      },
    });

    if (eventUser.length > 0) {
      return await this.prisma.eventUsers.delete({
        where: {
          id: eventUser[0].id,
        },
      });
    }

    return false;
  }
}
