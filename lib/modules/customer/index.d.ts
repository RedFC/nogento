import { BaseRequest } from '../../request';
export declare class CustomerModule extends BaseRequest {
    constructor(cache: boolean, api: string, store: string);
    login(data: {
        email: string;
        password: string;
    }): Promise<any>;
    register(): void;
    getUserData(): void;
    updateUserData(): void;
    changeEmail(): void;
    changePassword(): void;
    changeName(): void;
    socialLogin(): void;
}
