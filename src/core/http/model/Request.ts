export interface Request {
    url: string
    headers?: Record<string, string>
    timeout: number
}

export interface GetRequest extends Request {

}