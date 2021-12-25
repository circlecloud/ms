/// <reference types="@ccms/nashorn" />

import "reflect-metadata"
import { initContainer, getContainer } from './decorators'
import { interfaces, Container, inject, named } from 'inversify'
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
    return function (target: object, propertyKey: string, index?: number) {
        try { target[propertyKey] = Java.type(className).class; return } catch (error: any) { }
        try { target[propertyKey] = base.getClass(className); return } catch (error: any) { }
        console.warn('JavaClass', className, 'Inject target', target.constructor.name, 'propertyKey', propertyKey, 'failed!')
    }
}

/**
 * 获得一个JS的Java类
 * @param className Java 全类名
 */
export const JSClass = (className: string) => {
    return function (target: object, propertyKey: string, index?: number) {
        try { target[propertyKey] = Java.type(className); return } catch (error: any) { }
        try { target[propertyKey] = base.getClass(className).static; return } catch (error: any) { }
        console.warn('JSClass', className, 'Inject target', target.constructor.name, 'propertyKey', propertyKey, 'failed!')
    }
}

/**
 * 自动注入实例由平台实现
 * @param className 类名
 */
export const Autowired = (className?: any) => {
    return function (target: any, propertyKey: string, index?: number) {
        let container = getContainer()
        if (className && (className instanceof Symbol || className instanceof Function)) {
            return inject(className)(target, propertyKey, index)
        }
        let type = Reflect.getMetadata('design:type', target, propertyKey)
        if (type && type !== Object && !Java.isJavaObject(type)) {
            inject(type)(target, propertyKey, index)
            named(className || propertyKey)(target, propertyKey, index)
        } else if (container.isBound(ioc.Autowired)) {
            console.debug('Autowired', 'ioc.Autowired', 'named', className || propertyKey)
            target[propertyKey] = container.getNamed(ioc.Autowired, className || propertyKey)
        } else {
            throw new Error(`No matching bindings found for target: ${target.constructor.name} type: ${type} named: ${className || propertyKey}`)
        }
    }
}

/**
 * 自动注入资源由平台实现
 * @param className 类名
 */
export const Resource = (resourceName?: string | any) => {
    return function (target: any, propertyKey: string, index?: number) {
        target[propertyKey] = getContainer().getNamed(ioc.Resource, resourceName || propertyKey)
    }
}

export const reduceMetadata = (ctx: interfaces.Context): any => {
    return ctx.currentRequest.target.metadata.reduce((result, entry, index) => {
        result[entry.key] = entry.value
        return result
    }, {})
}

function initAutowired(container: Container) {
    container.bind(ioc.Autowired).toDynamicValue((ctx) => {
        var metadata: any = reduceMetadata(ctx)
        let key = Object.toString.call(metadata.named)
        if (key === "[object Function]" || key === "[object Symbol]") { return container.get(metadata.named) }
        return undefined
    })
}

export const DefaultContainer = new Container()
initContainer(DefaultContainer)
initAutowired(DefaultContainer)

export * from 'inversify'
export * from './constants'
export * from './decorators'
export * from 'inversify-binding-decorators'
