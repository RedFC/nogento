export declare class BaseRequest {
    protected cache: boolean;
    protected M2_API: string;
    protected store: string;
    constructor(cache: boolean, api: string, store: string);
    protected buildMagentoClient: () => import("axios").AxiosInstance;
    GET(data: {
        url: string;
        store: string;
        token: string;
        payload: object;
        params?: object;
    }): Promise<any>;
    POST(data: {
        url: string;
        store: string;
        token: string;
        payload: object;
        params?: object;
    }): Promise<any>;
}
