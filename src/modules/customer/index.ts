import { MagentoRequestService } from '../../magentoRequest';
export class CustomerModule extends MagentoRequestService {
  
  login(data: ILogin): Promise<any> {
    return new Promise((resolve, reject) => {
      let payload = {
        username: data.email,
        password: data.password,
      };
      super
        .REQUEST("login",payload,"")
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // register(data: IRegister):Promise<IRegister> {
  //   return new Promise((resolve, reject) => {
  //     let payload = {
  //       username: data.email,
  //       password: data.password,
  //     };
  //     super
  //       .POST({
  //         url: '/customer/register',
  //         payload: payload,
  //         store: this.store,
  //         token: '',
  //       })
  //       .then((response) => {
  //         resolve(response);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  // }

  // getUserData(data: IToken) {
  //   return new Promise((resolve, reject) => {
  //     super
  //       .GET({
  //         url: '/customer/me',
  //         store: this.store,
  //         token: data.token,
  //       })
  //       .then((response) => {
  //         resolve(response);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  // }

  getCustomerAddress(data: IToken){
    return new Promise(() => {
      
    })
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
