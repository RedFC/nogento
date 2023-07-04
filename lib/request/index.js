"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRequest = void 0;
const util = require("util");
const axios_1 = require("axios");
class BaseRequest {
    constructor(cache, api, store) {
        this.buildMagentoClient = () => {
            return axios_1.default.create({
                baseURL: util.format(this.M2_API, this.store),
                timeout: 70000,
                headers: { 'Content-Type': 'application/json;' },
            });
        };
        this.cache = cache;
        this.M2_API = api;
        this.store = store;
    }
    GET(data) {
        return new Promise((resolve, reject) => {
            let httpConfig = { headers: {} };
            if (data.token) {
                httpConfig.headers = {
                    Authorization: `Bearer ${data.token}`,
                };
            }
            this.buildMagentoClient()
                .get(data.url, httpConfig)
                .then((data) => {
                resolve(data.data);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    POST(data) {
        return new Promise((resolve, reject) => {
            let httpConfig = { headers: {} };
            if (data.token) {
                httpConfig.headers = {
                    Authorization: `Bearer ${data.token}`,
                };
            }
            this.buildMagentoClient()
                .post(data.url, data.payload, httpConfig)
                .then((data) => {
                resolve(data.data);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
}
exports.BaseRequest = BaseRequest;
