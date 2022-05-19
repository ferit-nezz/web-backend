import { EventDto, JoinEventDto } from "./dto";
import { EventService } from "./event.service";
export declare class EventController {
    private eventService;
    constructor(eventService: EventService);
    getAllEvents(): Promise<import(".prisma/client").Event[]>;
    getAllUserEvents(userId: number): Promise<import(".prisma/client").Event[]>;
    getAllUserJoinedEvents(userId: number): Promise<import(".prisma/client").Event[]>;
    getById(id: string): Promise<import(".prisma/client").Event>;
    createEvent(dto: EventDto): Promise<import(".prisma/client").Event>;
    joinEvent(dto: JoinEventDto): Promise<import(".prisma/client").EventUsers>;
}
