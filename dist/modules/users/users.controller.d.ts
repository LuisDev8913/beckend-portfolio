import { UsersService } from './users.service';
import { UpdatePasswordDTO, UpdateUserDTO } from './dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    updateUser(updateDto: UpdateUserDTO, request: any): Promise<UpdateUserDTO>;
    updatePassword(updatePasswordDto: UpdatePasswordDTO, request: any): Promise<any>;
    deleteUser(request: any): Promise<boolean>;
}
