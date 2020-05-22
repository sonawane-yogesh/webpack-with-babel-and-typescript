import "core-js/stable";
import "regenerator-runtime/runtime";
import axios, { AxiosInstance, AxiosResponse } from "axios";

class AxiosConfig {
    private readonly ajax: AxiosInstance = undefined;
    constructor() {
        this.ajax = axios.create({ baseURL: "https://127.0.0.1:3000/api/" });
    }
    async ajaxGetAsync(url: string): Promise<AxiosResponse> {
        return await this.ajax.get(url);
    }
    ajaxGet(url: string) {
        console.log(url);
    }
}

export default AxiosConfig;