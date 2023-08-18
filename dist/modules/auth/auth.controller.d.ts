import { BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from '../users/dto';
import { UserLoginDTO } from './dto';
import { AuthUserResponse } from './response';
import { UsersService } from '../users/users.service';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UsersService);
    register(dto: CreateUserDTO): Promise<AuthUserResponse>;
    login(dto: UserLoginDTO): Promise<AuthUserResponse | BadRequestException>;
    getPublicUserInfo(request: any): Promise<AuthUserResponse>;
}
