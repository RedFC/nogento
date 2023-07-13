"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagentoRequestService = void 0;
const request_1 = require("../request");
class MagentoRequestService extends request_1.BaseRequest {
    constructor(store, cache, api) {
        super(cache, api, store);
        this.store = store;
    }
    REQUEST(urlKey, payload = {}, token = "", param = null, httpParams = Object) {
        return new Promise((resolve, reject) => {
            let { method, url } = this.getUrl(urlKey);
            switch (method) {
                case 'GET':
                    super
                        .GET({ url: param == null ? url : url + param, store: this.store, token, payload, params: httpParams })
                        .then((data) => {
                        resolve(data);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                    break;
                case 'POST':
                    super
                        .POST({ url: param == null ? url : url + param, store: this.store, token, payload })
                        .then((data) => {
                        resolve(data);
                    })
                        .catch((err) => {
                        reject(err);
                    });
                    break;
                default:
                    // Handle unsupported method
                    reject('Internal Request Error');
                    break;
            }
        });
    }
}
exports.MagentoRequestService = MagentoRequestService;
