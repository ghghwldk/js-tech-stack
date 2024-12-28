import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getMainPage(): Promise<string>;
    register(body: any): Promise<{
        email: string;
        password: any;
    } & import("../../entities/user.entity").UserEntity>;
}
