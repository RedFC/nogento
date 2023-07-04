"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModule = void 0;
const request_1 = require("../../request");
class CustomerModule extends request_1.BaseRequest {
    constructor(cache, api, store) {
        super(cache, api, store);
    }
    login(data) {
        return new Promise((resolve, reject) => {
            let payload = {
                username: data.email,
                password: data.password,
            };
            super
                .POST({
                url: '/integration/customer/token',
                payload: payload,
                store: this.store,
                token: '',
            })
                .then((response) => {
                resolve(response);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    register() {
    }
    getUserData() {
    }
    updateUserData() {
    }
    changeEmail() {
    }
    changePassword() {
    }
    changeName() {
    }
    socialLogin() {
    }
}
exports.CustomerModule = CustomerModule;
