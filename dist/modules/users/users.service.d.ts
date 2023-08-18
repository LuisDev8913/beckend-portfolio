import { User } from './models/user.model';
import { CreateUserDTO, UpdatePasswordDTO, UpdateUserDTO } from './dto';
import { TokenService } from '../token/token.service';
import { AuthUserResponse } from '../auth/response';
export declare class UsersService {
    private readonly userRepository;
    private readonly tokenService;
    constructor(userRepository: typeof User, tokenService: TokenService);
    hashPassword(password: string): Promise<string>;
    findUserByEmail(email: string): Promise<User>;
    findUserById(id: number): Promise<User>;
    createUser(dto: CreateUserDTO): Promise<CreateUserDTO>;
    publicUser(email: string): Promise<AuthUserResponse>;
    updateUser(userId: number, dto: UpdateUserDTO): Promise<UpdateUserDTO>;
    updatePassword(userId: number, dto: UpdatePasswordDTO): Promise<any>;
    deleteUser(id: number): Promise<boolean>;
}
