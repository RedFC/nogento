"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientBuilder = void 0;
const customer_1 = require("./modules/customer");
class ClientBuilder {
    constructor(cache, api, store) {
        this.cache = cache;
        this.api = api;
        this.store = store;
    }
    customerModule() {
        // Create instances of each module and bind them to the baseRequest
        const customerModule = new customer_1.CustomerModule(this.cache, this.api, this.store);
        // Return an object containing all the functions from each module
        return {
            login: customerModule.login.bind(customerModule),
            register: customerModule.register.bind(customerModule),
            getUserData: customerModule.getUserData.bind(customerModule),
            updateUserData: customerModule.updateUserData.bind(customerModule),
            changeEmail: customerModule.changeEmail.bind(customerModule),
            changeName: customerModule.changeName.bind(customerModule),
            changePassword: customerModule.changePassword.bind(customerModule),
            socialLogin: customerModule.socialLogin.bind(customerModule),
        };
    }
    build() {
        return {
            customer: this.customerModule()
        };
    }
}
exports.ClientBuilder = ClientBuilder;
