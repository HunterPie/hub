import {GetRequest} from "@/core/http/model/Request";
import {Response} from "@/core/http/model/Response"

export interface IHttpService {
    get(request: GetRequest): Promise<Response>
}