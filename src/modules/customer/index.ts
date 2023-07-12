import { BaseRequest } from '../../request';

export class CustomerModule extends BaseRequest {
  constructor(cache: boolean, api: string, store: string) {
    super(cache, api, store);
  }

  login(data: ILogin): Promise<any> {
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

  register(data: IRegister) {
    return new Promise((resolve, reject) => {
      let payload = {
        username: data.email,
        password: data.password,
      };
      super
        .POST({
          url: '/customer/register',
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

  getUserData(data: IToken) {
    return new Promise((resolve, reject) => {
      super
        .GET({
          url: '/customer/me',
          store: this.store,
          token: data.token,
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  updateUserData() {

  }

  changeEmail() {

  }

  changePassword() {

  }

  changeName() {

  }

  socialLogin() {

  }



}
