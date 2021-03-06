import { EventDto, JoinEventDto } from './dto';
import { EventService } from './event.service';
export declare class EventController {
    private eventService;
    constructor(eventService: EventService);
    getAllEvents(): Promise<import(".prisma/client").Event[]>;
    getById(id: number): Promise<import(".prisma/client").Event>;
    createEvent(dto: EventDto): Promise<import(".prisma/client").Event>;
    joinEvent(dto: JoinEventDto): Promise<import(".prisma/client").EventUsers>;
}
