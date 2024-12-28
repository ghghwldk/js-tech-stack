import { UserEntity } from "../../entities/user.entity";
import { Repository } from "typeorm";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    getMainPage(): Promise<string>;
    register(email: string, password: string): Promise<{
        email: string;
        password: any;
    } & UserEntity>;
}
