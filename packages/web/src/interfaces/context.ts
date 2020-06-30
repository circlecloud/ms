export type RequestHandler = (ctx: Context) => any
export interface InterceptorAdapter {
    name: string
    preHandle?(ctx: Context): void
    postHandle?(ctx: Context): void
}

type StringKeyAndStringValue = { [key: string]: string }
type StringKeyAndStringOrArrayValue = { [key: string]: string | string[] }

export type RequestHeaders = StringKeyAndStringOrArrayValue
export type RequestParams = StringKeyAndStringOrArrayValue
export type RequestCookies = StringKeyAndStringValue

export interface Context {
    request?: javax.servlet.http.HttpServletRequest
    response?: javax.servlet.http.HttpServletResponse
    handler?: RequestHandler
    url?: string
    headers?: RequestHeaders
    cookies?: RequestCookies
    params?: RequestParams
    body?: any
    result?: any
}
