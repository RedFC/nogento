import { MagentoRequestService } from '../../magentoRequest';
export declare class CustomerModule extends MagentoRequestService {
    login(data: ILogin): Promise<any>;
    getCustomerAddress(data: IToken): Promise<unknown>;
    updateUserData(): void;
    changeEmail(): void;
    changePassword(): void;
    changeName(): void;
    socialLogin(): void;
}
