import { BaseRequest } from '../../request';
export declare class HealthCheck extends BaseRequest {
    constructor(cache: boolean, api: string, store: string);
    ping(data: {
        email: string;
        password: string;
    }): Promise<any>;
}
