import { BaseRequest } from '../../request';

export class HealthCheck extends BaseRequest {
  constructor(cache: boolean, api: string, store: string) {
    super(cache, api, store);
  }

  ping(data: { email: string; password: string }): Promise<any> {
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
