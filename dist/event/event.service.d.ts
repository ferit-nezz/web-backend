import { PrismaService } from "src/prisma/prisma.service";
import { EventDto, JoinEventDto } from "./dto";
export declare class EventService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllEvents(): Promise<import(".prisma/client").Event[]>;
    getById(id: string): Promise<import(".prisma/client").Event>;
    createEvent(dto: EventDto): Promise<import(".prisma/client").Event>;
    joinEvent(dto: JoinEventDto): Promise<import(".prisma/client").EventUsers>;
}
