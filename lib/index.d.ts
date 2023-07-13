export declare class ClientBuilder {
    private cache;
    private api;
    private store;
    constructor(cache: boolean, api: string, store: string);
    customerModule(): {
        login: (data: ILogin) => Promise<any>;
    };
    build(): any;
}
