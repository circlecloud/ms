/// <reference types="@ccms/nashorn" />

import "reflect-metadata"
import { initContainer, getContainer } from './decorators'
import { interfaces, Container } from 'inversify'
import { fluentProvide } from 'inversify-binding-decorators'
import { ioc } from "./constants"

/**
 * 注册一个命名对象
 * @param identifier 标识符
 * @param name 名称
 */
export const provideNamed = (identifier: interfaces.ServiceIdentifier<any>, name: string) => {
    return fluentProvide(identifier).whenTargetNamed(name).done()
}

/**
 * 注册一个单例对象
 * @param identifier 标识符
 */
export const provideSingleton = (identifier: interfaces.ServiceIdentifier<any>) => {
    return fluentProvide(identifier).inSingletonScope().done()
}

/**
 * 注册一个单例对象
 * @param identifier 标识符
 */
export const provideSingletonNamed = (identifier: interfaces.ServiceIdentifier<any>, name: string) => {
    return fluentProvide(identifier).inSingletonScope().whenTargetNamed(name).done()
}

/**
 * 获得一个 java.lang.Class
 * @param className Java全类名
 */
export const JavaClass = (className: string) => {
    return function (target: any, propertyKey: string, index?: number) {
        try { target[propertyKey] = Java.type(className).class; return } catch (error) { }
        try { target[propertyKey] = base.getClass(className); return } catch (error) { }
        console.warn('JavaClass Inject target', target, 'propertyKey', propertyKey, 'failed!')
    }
}

/**
 * 获得一个JS的Java类
 * @param className Java 全类名
 */
export const JSClass = (className: string) => {
    return function (target: any, propertyKey: string, index?: number) {
        try { target[propertyKey] = Java.type(className); return } catch (error) { }
        try { target[propertyKey] = base.getClass(className).static; return } catch (error) { }
        console.warn('JSClass Inject target', target, 'propertyKey', propertyKey, 'failed!')
    }
}

/**
 * 自动注入实例由平台实现
 * @param className 类名
 */
export const Autowired = (className?: string | any) => {
    return function (target: any, propertyKey: string) {
        target[propertyKey] = getContainer().getNamed(ioc.Autowired, className || propertyKey)
    }
}

/**
 * 自动注入资源由平台实现
 * @param className 类名
 */
export const Resource = (resourceName?: string | any) => {
    return function (target: any, propertyKey: string) {
        target[propertyKey] = getContainer().getNamed(ioc.Resource, resourceName || propertyKey)
    }
}

export const reduceMetadata = (ctx: interfaces.Context): any => {
    return ctx.currentRequest.target.metadata.reduce((result, entry, index) => {
        result[entry.key] = entry.value
        return result
    }, {})
}

export const DefaultContainer = new Container()
initContainer(DefaultContainer)

export * from 'inversify'
export * from './constants'
export * from './decorators'
export * from 'inversify-binding-decorators'
