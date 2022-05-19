import { PrismaService } from "src/prisma/prisma.service";
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getById(id: string): Promise<import(".prisma/client").User>;
}
