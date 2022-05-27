"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const runtime_1 = require("@prisma/client/runtime");
const prisma_service_1 = require("../prisma/prisma.service");
let EventService = class EventService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllEvents() {
        return await this.prisma.event.findMany();
    }
    async isUserJoined(userId, eventId) {
        const userEvent = await this.prisma.eventUsers.findMany({
            where: {
                userId: userId,
                eventId: eventId,
            },
        });
        if (userEvent)
            return true;
        return false;
    }
    async getAllUserEvents(userId) {
        console.log(userId);
        return await this.prisma.event.findMany({
            where: {
                userId: parseInt(userId),
            },
        });
    }
    async getAllUserJoinedEvents(userId) {
        console.log(userId);
        const eventUsers = await this.prisma.eventUsers.findMany({
            where: {
                userId: parseInt(userId),
            },
        });
        return await this.prisma.event.findMany({
            where: {
                id: { in: eventUsers.map((x) => x.id) },
            },
        });
    }
    async getById(id) {
        return await this.prisma.event.findUnique({
            where: {
                id: parseInt(id),
            },
        });
    }
    async createEvent(dto) {
        try {
            const event = await this.prisma.event.create({
                data: dto,
            });
            return event;
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError) {
                throw new Error("Error on event create");
            }
            throw error;
        }
    }
    async joinEvent(dto) {
        try {
            return await this.prisma.eventUsers.create({
                data: dto,
            });
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError) {
                throw new Error("Error on event create");
            }
            throw error;
        }
    }
};
EventService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map