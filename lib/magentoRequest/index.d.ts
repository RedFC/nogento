import { BaseRequest } from '../request';
export declare class MagentoRequestService extends BaseRequest {
    constructor(store: string, cache: boolean, api: string);
    REQUEST(urlKey: string, payload?: {}, token?: string, param?: null, httpParams?: ObjectConstructor): Promise<unknown>;
}
