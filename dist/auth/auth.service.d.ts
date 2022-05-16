import { PrismaService } from "src/prisma/prisma.service";
import { SignInDto, SignUpDto } from "./dto";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signup(dto: SignUpDto): Promise<{
        user: import(".prisma/client").User;
        token: {
            access_token: string;
        };
    }>;
    signin(dto: SignInDto): Promise<{
        user: import(".prisma/client").User;
        token: {
            access_token: string;
        };
    }>;
    signToken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
}
