import { BaseRequest } from '../request';

export class MagentoRequestService extends BaseRequest {
    constructor(store: string, cache: boolean, api: string) {
        super(cache, api, store);
        this.store = store;
    }

    REQUEST(urlKey: string, payload = {}, token = "", param = null, httpParams = Object) {
        return new Promise((resolve, reject) => {
            let { method, url } = this.getUrl(urlKey);
            switch (method) {
                case 'GET':
                    super
                        .GET({ url: param == null ? url : url+param, store: this.store, token, payload, params: httpParams })
                        .then((data) => {
                            resolve(data);
                        })
                        .catch((err) => {
                            reject(err);
                        });
                    break;
                case 'POST':
                    super
                        .POST({ url: param == null ?  url : url+param, store: this.store, token, payload })
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
