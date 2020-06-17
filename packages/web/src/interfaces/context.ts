export type RequestHandler = (ctx: Context) => any
export interface InterceptorAdapter {
    name: string
    preHandle?(ctx: Context): void
    postHandle?(ctx: Context): void
}

export type RequestHeader = { [key: string]: string | string[] }
export type RequestParams = { [key: string]: string | string[] }

export interface Context {
    request?: javax.servlet.http.HttpServletRequest
    response?: javax.servlet.http.HttpServletResponse
    header?: RequestHeader
    url?: string
    params?: RequestParams
    body?: any
    result?: any
}
