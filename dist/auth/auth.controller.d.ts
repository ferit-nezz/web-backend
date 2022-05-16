import { AuthService } from "./auth.service";
import { SignInDto, SignUpDto } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
}
