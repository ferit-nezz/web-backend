import { PrismaService } from "src/prisma/prisma.service";
import { EventDto, EventInteractionDto } from "./dto";
export declare class EventService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllEvents(): Promise<import(".prisma/client").Event[]>;
    isUserJoined(userId: string, eventId: string): Promise<boolean>;
    getAllUserEvents(userId: string): Promise<import(".prisma/client").Event[]>;
    getAllUserJoinedEvents(userId: string): Promise<import(".prisma/client").Event[]>;
    getById(id: string): Promise<import(".prisma/client").Event>;
    createEvent(dto: EventDto): Promise<import(".prisma/client").Event>;
    joinEvent(dto: EventInteractionDto): Promise<import(".prisma/client").EventUsers | "User is already joined">;
    unjoinEvent(dto: EventInteractionDto): Promise<false | import(".prisma/client").EventUsers>;
}
