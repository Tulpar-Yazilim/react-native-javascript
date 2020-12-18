import AsyncStorage from "@react-native-async-storage/async-storage";
import crypto from "react-native-crypto-js";
import { APIResult } from "../dto/ApiResult";
import { BaseConfig } from "../dto/BaseConfig";

export abstract class BaseService {
  constructor(protected serviceName: string) {}

  //#region REST
  async get<T>(url: string): Promise<APIResult<T>> {
    try {
      const requestOptions = {
        method: "GET",
        headers: {},
      };
      const userData = await this.getUser();
      if (userData) {
        requestOptions.headers = {
          Authorization: "Bearer " + userData.access_token,
        };
      }
      const response = await fetch(
        `${BaseConfig.API_URL + this.serviceName + url}`,
        requestOptions
      );
      return await this.handleResponse<T>(response);
    } catch (error) {
      console.log(error);
      let apiResult = new APIResult<T>();
      apiResult.isSuccess = false;
      apiResult.message = error;
    }
  }

  async post<T>(url: string, body: any): Promise<APIResult<T>> {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      const userData = await this.getUser();
      if (userData) {
        requestOptions.headers["Authorization"] =
          "Bearer " + userData.access_token;
      }
      const response = await fetch(
        `${BaseConfig.API_URL + this.serviceName + url}`,
        requestOptions
      );
      return await this.handleResponse<T>(response);
    } catch (error) {
      console.log(error);
      let apiResult = new APIResult<T>();
      apiResult.isSuccess = false;
      apiResult.message = error;
    }
  }

  async put<T>(url: string, body: any): Promise<APIResult<T>> {
    try {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      const userData = await this.getUser();
      if (userData) {
        requestOptions.headers["Authorization"] =
          "Bearer " + userData.access_token;
      }
      const response = await fetch(
        `${BaseConfig.API_URL + this.serviceName + url}`,
        requestOptions
      );
      return await this.handleResponse<T>(response);
    } catch (error) {
      console.log(error);
      let apiResult = new APIResult<T>();
      apiResult.isSuccess = false;
      apiResult.message = error;
    }
  }

  async delete<T>(url: string): Promise<APIResult<T>> {
    try {
      const requestOptions = {
        method: "DELETE",
        headers: {},
      };
      const userData = await this.getUser();
      if (userData) {
        requestOptions.headers = {
          Authorization: "Bearer " + userData.access_token,
        };
      }
      const response = await fetch(
        `${BaseConfig.API_URL + this.serviceName + url}`,
        requestOptions
      );
      return await this.handleResponse<T>(response);
    } catch (error) {
      console.log(error);
      let apiResult = new APIResult<T>();
      apiResult.isSuccess = false;
      apiResult.message = error;
    }
  }

  async upload<T>(url: string, formData: FormData): Promise<APIResult<T>> {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      };
      const userData = await this.getUser();
      if (userData) {
        requestOptions.headers["Authorization"] =
          "Bearer " + userData.access_token;
      }
      const response = await fetch(
        `${BaseConfig.API_URL + this.serviceName + url}`,
        requestOptions
      );
      return await this.handleResponse<T>(response);
    } catch (error) {
      console.log(error);
      let apiResult = new APIResult<T>();
      apiResult.isSuccess = false;
      apiResult.message = error;
    }
  }

  async handleResponse<T>(response: Response): Promise<APIResult<T>> {
    let apiResult = new APIResult<T>();
    try {
      if (response.status != 200) {
        apiResult.isSuccess = false;
        apiResult.message = response.statusText;
        return apiResult;
      }
      const data = await response.json();
      apiResult = <APIResult<T>>data;
      if (apiResult.isSuccess) {
        apiResult.data = this.decrypt<T>(apiResult.data);
      }
    } catch (error) {
      console.log(error);
      apiResult.isSuccess = false;
      apiResult.message = error;
    }
    return apiResult;
  }
  //#endregion

  //#region CRYPTO

  encrypt(data: any) {
    let encryptedData = crypto.AES.encrypt(
      crypto.enc.Utf8.parse(crypto.enc.Base64.parse(JSON.stringify(data))),
      crypto.enc.Utf8.parse(BaseConfig.CRYPTO_KEY),
      {
        keySize: 128 / 8,
        iv: crypto.enc.Utf8.parse(BaseConfig.CRYPTO_KEY),
        mode: crypto.mode.CBC,
        padding: crypto.pad.Pkcs7,
      }
    );
    return encryptedData;
  }

  decrypt<T>(data: any) {
    try {
      let decryptedData = crypto.AES.decrypt(
        data,
        crypto.enc.Utf8.parse(BaseConfig.CRYPTO_KEY),
        {
          iv: crypto.enc.Utf8.parse(BaseConfig.CRYPTO_KEY),
        }
      ).toString(crypto.enc.Utf8);
      let decryptedDataParsed: T = JSON.parse(
        crypto.enc.Base64.parse(decryptedData).toString(crypto.enc.Utf8)
      );
      return decryptedDataParsed;
    } catch (error) {
      console.log(error);
      return data;
    }
  }

  //#endregion

  //#region STORAGE

  async setStorage(storageName: string, storageData: any) {
    try {
      await AsyncStorage.setItem(storageName, JSON.stringify(storageData));
    } catch (error) {
      console.log(error);
    }
  }

  async clearStorage() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }

  async removeStorage(storageName: string) {
    try {
      await AsyncStorage.removeItem(storageName);
    } catch (error) {
      console.log(error);
    }
  }

  async getStorage(storageName: string) {
    try {
      const data = await AsyncStorage.getItem(storageName);
      let storageData = null;
      if (data) {
        storageData = JSON.parse(data);
      }
      return storageData;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  //#endregion

  //#region USER
  async getUser() {
    try {
      const userData = await this.getStorage(BaseConfig.APP_USER_STORAGE_NAME);
      if (userData) {
        if (new Date(userData.expires_in) < new Date()) {
          await this.removeStorage(BaseConfig.APP_USER_STORAGE_NAME);
          return null;
        }
        return userData;
      }
      return userData;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  //#endregion
}
