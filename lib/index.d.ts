export declare class ClientBuilder {
    private cache;
    private api;
    private store;
    constructor(cache: boolean, api: string, store: string);
    customerModule(): {
        login: (data: {
            email: string;
            password: string;
        }) => Promise<any>;
        register: () => void;
        getUserData: () => void;
        updateUserData: () => void;
        changeEmail: () => void;
        changeName: () => void;
        changePassword: () => void;
        socialLogin: () => void;
    };
    build(): any;
}
