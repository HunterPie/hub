import {IHttpService} from "@/core/http/IHttpService";
import {Axios} from "axios";

export default class AxiosHttpService implements IHttpService {

    private readonly _axiosClient: Axios

    constructor(axiosClient: Axios) {
        this._axiosClient = axiosClient
    }

    async get(request: GetRequest): Promise<Response> {
        const response = await this._axiosClient.get(request.url, {
            headers: request.headers,
            timeout: request.timeout
        })

        return {
            data: response.data,
            isSuccessful: response.status < 400,
            status: response.status
        }
    }

}