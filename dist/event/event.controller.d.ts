import { EventDto, EventInteractionDto } from "./dto";
import { EventService } from "./event.service";
export declare class EventController {
    private eventService;
    constructor(eventService: EventService);
    getAllEvents(): Promise<import(".prisma/client").Event[]>;
    getAllUserEvents(userId: string): Promise<import(".prisma/client").Event[]>;
    getAllUserJoinedEvents(userId: string): Promise<import(".prisma/client").Event[]>;
    getById(id: string): Promise<import(".prisma/client").Event>;
    createEvent(dto: EventDto): Promise<import(".prisma/client").Event>;
    joinEvent(dto: EventInteractionDto): Promise<import(".prisma/client").EventUsers | "User is already joined">;
    unjoinEvent(dto: EventInteractionDto): Promise<false | import(".prisma/client").EventUsers>;
    isUserJoined(userId: string, eventId: string): Promise<boolean>;
}
