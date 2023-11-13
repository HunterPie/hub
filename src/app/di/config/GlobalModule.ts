import axios, {Axios} from "axios";
import {Module} from "@/app/di/Module";
import {container} from "tsyringe";

const httpClient = (): Axios => {
    return axios.create({})
}

export const GlobalModule: Module = {
    register() {
        container.registerInstance(Axios, httpClient())
    }
}
