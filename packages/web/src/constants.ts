export const WebProxyBeanName = 'webServerProxy'
export const FilterProxyBeanName = 'webFilterProxy'
export const METADATA_KEY = {
    Controller: Symbol("@ccms/web:Controller"),
    Action: Symbol("@ccms/web:Action"),
    Param: Symbol("@ccms/web:Param"),
    Middleware: Symbol("@ccms/web:Middleware"),
}
export enum PARAM_TYPE {
    QUERY = 'QUERY',
    BODY = 'BODY',
    HEADER = 'HEADER',
    COOKIE = 'COOKIE',
    REQUEST = 'REQUEST',
    RESPONSE = 'RESPONSE',
}
