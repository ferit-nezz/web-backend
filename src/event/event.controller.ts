import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { JwtGuard } from "src/auth/guard";
import { EventDto, JoinEventDto } from "./dto";
import { EventService } from "./event.service";

@Controller("event")
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  getAllEvents() {
    return this.eventService.getAllEvents();
  }

  @Get("my/:userId")
  //@UseGuards(JwtGuard)
  getAllUserEvents(@Param("userId") userId: string) {
    return this.eventService.getAllUserEvents(userId);
  }

  @Get("joined/:userId")
  //@UseGuards(JwtGuard)
  getAllUserJoinedEvents(@Param("userId") userId: string) {
    return this.eventService.getAllUserJoinedEvents(userId);
  }

  @Get(":id")
  getById(@Param("id") id: string) {
    return this.eventService.getById(id);
  }

  @UseGuards(JwtGuard)
  @Post("create")
  createEvent(@Body() dto: EventDto) {
    return this.eventService.createEvent(dto);
  }

  @UseGuards(JwtGuard)
  @Post("join")
  joinEvent(@Body() dto: JoinEventDto) {
    return this.eventService.joinEvent(dto);
  }

  /* @Get("is-joined")
  isUserJoined(
    @Body("userId") userId: number,
    @Body("eventId") eventId: number
  ) {
    console.log(userId);
    console.log(eventId);
    return this.eventService.isUserJoined(userId, eventId);
  } */
}
