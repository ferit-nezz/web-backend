import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { EventDto, JoinEventDto } from './dto';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  getAllEvents() {
    return this.eventService.getAllEvents();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.eventService.getById(id);
  }

  @UseGuards(JwtGuard)
  @Post()
  createEvent(@Body() dto: EventDto) {
    return this.eventService.createEvent(dto);
  }

  @UseGuards(JwtGuard)
  @Post()
  joinEvent(@Body() dto: JoinEventDto) {
    return this.eventService.joinEvent(dto);
  }
}
