import { CustomerModule } from './modules/customer';

export class ClientBuilder {
    private cache: boolean;
    private api: string;
    private store: string;

    constructor(cache: boolean, api: string, store: string) {
        this.cache = cache;
        this.api = api;
        this.store = store;
    }

    customerModule() {
        // Create instances of each module and bind them to the baseRequest
        const customerModule = new CustomerModule(this.store, this.cache, this.api);

        // Return an object containing all the functions from each module
        return {
            login: customerModule.login.bind(customerModule),
            // register: customerModule.register.bind(customerModule),
            // getUserData: customerModule.getUserData.bind(customerModule),
            // updateUserData: customerModule.updateUserData.bind(customerModule),
            // changeEmail: customerModule.changeEmail.bind(customerModule),
            // changeName: customerModule.changeName.bind(customerModule),
            // changePassword: customerModule.changePassword.bind(customerModule),
            // socialLogin: customerModule.socialLogin.bind(customerModule),
        };
    }

    build(): any {
        return {
            customer: this.customerModule()
        }
    }

}

