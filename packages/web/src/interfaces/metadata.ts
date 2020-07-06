import { PARAM_TYPE } from "../constants"

export namespace interfaces {
    export interface BaseMetadata {
        /**
         * 名称 为空则为对象名称
         */
        name?: string
        /**
         * 支持的服务器列表 为空则代表所有
         */
        servers?: string[]
    }
    export interface WebMetadata extends BaseMetadata {
        /**
         * 路径
         */
        path: string
        /**
         * 对象
         */
        target?: any
    }
    export interface ControllerMetadata extends WebMetadata {

    }
    interface Newable<T> {
        new(...args: any[]): T
    }
    interface Abstract<T> {
        prototype: T
    }
    export type ServiceIdentifier<T> = (string | symbol | Newable<T> | Abstract<T>)
    export interface MiddlewareMetadata extends BaseMetadata {
        /**
         * 中间件名称列表
         */
        names: Array<ServiceIdentifier<any>>
    }
    export type Method = 'ALL' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'TRACE'
    export interface ActionMetadata extends WebMetadata {
        /**
         * 请求方法
         */
        method?: Method
        /**
         * 执行器
         */
        executor?: string
    }
    export interface ParamMetadata extends BaseMetadata {
        /**
         * 参数类型
         */
        type?: PARAM_TYPE
        /**
         * 默认值
         */
        default?: any
        /**
         * 参数位置
         */
        index?: number
        /**
         * 参数对象类型
         */
        paramtype?: NewableFunction
        /**
         * 是否必传
         */
        require?: boolean
        /**
         * 异常消息
         */
        message?: string
    }
}
