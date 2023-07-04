import * as util from 'util'
import axios from 'axios';


export class BaseRequest {
  protected cache;
  protected M2_API;
  protected store;
  constructor(cache: boolean, api: string, store: string) {
    this.cache = cache;
    this.M2_API = api;
    this.store = store;
  }

  protected buildMagentoClient = () => {
    return axios.create({
      baseURL: util.format(this.M2_API, this.store),
      timeout: 70000,
      headers: { 'Content-Type': 'application/json;' },
    });
  };

  GET(data: { url: string; store: string; token: string; payload: object; params?: object }): Promise<any> {
    return new Promise((resolve, reject) => {
      let httpConfig = { headers: {} };
      if (data.token) {
        httpConfig.headers = {
          Authorization: `Bearer ${data.token}`,
        };
      }
      this.buildMagentoClient()
        .get(data.url, httpConfig)
        .then((data) => {
          resolve(data.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  POST(data: { url: string; store: string; token: string; payload: object; params?: object } ): Promise<any>{
    return new Promise((resolve, reject) => {
      let httpConfig = { headers: {} };
      if (data.token) {
        httpConfig.headers = {
          Authorization: `Bearer ${data.token}`,
        };
      }
      this.buildMagentoClient()
        .post(data.url, data.payload, httpConfig)
        .then((data) => {
          resolve(data.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  // GET(url = this.url, store = this.store, token = this.token, payload, params) {
  //     return new Promise((resolve, reject) => {
  //       let httpConfig = {};
  //       if (token) {
  //         httpConfig["headers"] = {
  //           Authorization: `Bearer ${token}`,
  //         }
  //       }
  //       if(params){
  //         httpConfig['params'] = params
  //       }
  //       this.
  //     });
  //   }

  //   POST(
  //     url = this.url,
  //     store = this.store,
  //     token = this.token,
  //     data = this.data
  //   ) {
  //     return new Promise((resolve, reject) => {
  //       let httpConfig = {};
  //       if (token) {
  //         httpConfig["headers"] = {
  //           Authorization: `Bearer ${token}`,
  //         };
  //       }
  //       this.buildMagentoClient(store)
  //         .post(url, data, httpConfig)
  //         .then((data) => {
  //           resolve(data.data);
  //         })
  //         .catch((err) => {
  //           reject(err);
  //         });
  //     });
  //   }

  //   PUT(
  //     url = this.url,
  //     store = this.store,
  //     token = this.token,
  //     data = this.data
  //   ) {
  //     return new Promise((resolve, reject) => {
  //       const httpConfig = {};
  //       if (token) {
  //         httpConfig["headers"] = {
  //           Authorization: `Bearer ${token}`,
  //         };
  //       }
  //       this.buildMagentoClient(store)
  //         .put(url, data, httpConfig)
  //         .then((data) => {
  //           resolve(data.data);
  //         })
  //         .catch((err) => {
  //           reject(err);
  //         });
  //     });
  //   }

  //   DELETE(
  //     url = this.url,
  //     store = this.store,
  //     token = this.token
  //   ) {
  //     return new Promise((resolve, reject) => {
  //       const httpConfig = {};
  //       if (token) {
  //         httpConfig["headers"] = {
  //           Authorization: `Bearer ${token}`,
  //         };
  //       }
  //       this.buildMagentoClient(store)
  //         .delete(url, httpConfig)
  //         .then((data) => {
  //           resolve(data.data);
  //         })
  //         .catch((err) => {
  //           reject(err);
  //         });
  //     });
  //   }
}
