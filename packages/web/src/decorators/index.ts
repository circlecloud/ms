import { decorate, injectable } from "@ccms/container"

import { METADATA_KEY, PARAM_TYPE } from '../constants'
import { interfaces } from "../interfaces"
import { addControllerMetadata, addControllerAction, addActionParam } from "./utils"

export const Controller = (metadata?: string | interfaces.ControllerMetadata) => {
    return (target: any) => {
        if (!metadata) { metadata = target.name.toLowerCase().replace('controller', '') }
        if (typeof metadata === "string") { metadata = { path: metadata } }
        metadata.name = metadata.name || target.name
        metadata.path = metadata.path ?? `/${metadata}`
        metadata.path = metadata.path.startsWith('/') ? metadata.path : `/${metadata.path}`
        decorate(injectable(), target)
        Reflect.defineMetadata(METADATA_KEY.Controller, metadata, target)
        addControllerMetadata(metadata)
        return
    }
}

function action(method: interfaces.Method) {
    return (metadata?: string | interfaces.ActionMetadata) => {
        return (target: any, propertyKey: string) => {
            if (!metadata) { metadata = propertyKey.toLowerCase() }
            if (typeof metadata === "string") { metadata = { path: metadata } }
            metadata.path = metadata.path ?? `/${propertyKey}`
            metadata.path = metadata.path.startsWith('/') ? metadata.path : `/${metadata.path}`
            metadata.method = method
            metadata.executor = propertyKey
            Reflect.defineMetadata(METADATA_KEY.Action, metadata, target[propertyKey])
            addControllerAction(target, propertyKey)
            return
        }
    }
}
export const Action = action('ALL')
export const Get = action('GET')
export const Post = action('POST')
export const Put = action('PUT')
export const Patch = action('PATCH')
export const Head = action('HEAD')
export const Delete = action('DELETE')

function param(type: PARAM_TYPE) {
    return (metadata?: string | interfaces.ParamMetadata) => {
        return (target: any, propertyKey: string, index: number) => {
            if (!metadata) { metadata = `${propertyKey}-${index}` }
            if (typeof metadata === "string") { metadata = { name: metadata } }
            metadata.type = type
            metadata.index = index
            metadata.paramtype = Reflect.getMetadata("design:paramtypes", target, propertyKey)[index]
            addActionParam(target, propertyKey, metadata)
            return
        }
    }
}
export const Request = param(PARAM_TYPE.REQUEST)
export const Response = param(PARAM_TYPE.RESPONSE)
export const Header = param(PARAM_TYPE.HEADER)
export const Cookie = param(PARAM_TYPE.COOKIE)
export const Query = param(PARAM_TYPE.QUERY)
export const Param = param(PARAM_TYPE.QUERY)
export const Body = param(PARAM_TYPE.BODY)

function Middleware() {
    return (metadata?: string | interfaces.ActionMetadata) => {
        return (target: any, propertyKey: string) => {
            if (!metadata) { metadata = propertyKey.toLowerCase() }
            if (typeof metadata === "string") { metadata = { path: metadata } }
            metadata.path = metadata.path ?? `/${propertyKey}`
            metadata.path = metadata.path.startsWith('/') ? metadata.path : `/${metadata.path}`
            metadata.executor = propertyKey
            Reflect.defineMetadata(METADATA_KEY.Action, metadata, target[propertyKey])
            addControllerAction(target, propertyKey)
            return
        }
    }
}

export * from './utils'
