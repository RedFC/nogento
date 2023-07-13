"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheck = void 0;
const request_1 = require("../../request");
class HealthCheck extends request_1.BaseRequest {
    constructor(cache, api, store) {
        super(cache, api, store);
    }
    ping(data) {
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
}
exports.HealthCheck = HealthCheck;
