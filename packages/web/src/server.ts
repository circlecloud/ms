import * as querystring from 'querystring'

import { web, plugin } from '@ccms/api'
import { provideSingleton, JSClass, postConstruct, Container, ContainerInstance, inject } from '@ccms/container'

import { WebProxyBeanName, FilterProxyBeanName, METADATA_KEY, PARAM_TYPE } from './constants'
import { Context, InterceptorAdapter, RequestHandler, interfaces } from './interfaces'
import { getControllerActions, getActionMetadata, getControllerMetadata, getActionParams, getControllerMetadatas } from './decorators'

const HttpServletRequestWrapper = Java.type('javax.servlet.http.HttpServletRequestWrapper')
const HttpServletResponseWrapper = Java.type('javax.servlet.http.HttpServletResponseWrapper')
const ServletInputStream = Java.type('javax.servlet.ServletInputStream')
const ServletOutputStream = Java.type('javax.servlet.ServletOutputStream')

@provideSingleton(web.Server)
export class Server {
    @JSClass('pw.yumc.MiaoScript.web.WebServerProxy')
    private WebServerProxy: any
    @JSClass('pw.yumc.MiaoScript.web.WebFilterProxy')
    private WebFilterProxy: any

    @inject(ContainerInstance)
    private container: Container

    private StreamUtils = org.springframework.util.StreamUtils
    private ResponseEntity = org.springframework.http.ResponseEntity

    private controllerActions: Map<string, interfaces.ActionMetadata[]>
    private interceptors: Map<string, InterceptorAdapter>
    private methodMappings: Map<string, Map<string, RequestHandler>>

    private beanFactory: org.springframework.beans.factory.support.DefaultListableBeanFactory

    @postConstruct()
    initialization() {
        this.beanFactory = base.getInstance().getAutowireCapableBeanFactory()
        this.controllerActions = new Map()
        this.interceptors = new Map()
        this.methodMappings = new Map()
        this.start()
        process.on('plugin.after.enable', (plugin: plugin.Plugin) => this.registryPlugin(plugin))
        process.on('plugin.after.disable', (plugin: plugin.Plugin) => this.unregistryPlugin(plugin))
    }

    start() {
        this.registryFilterProxy()
        this.registryWebProxy()
    }

    stop() {
        try {
            this.beanFactory.destroySingleton(FilterProxyBeanName)
            this.beanFactory.destroySingleton(WebProxyBeanName)
        } catch (error) {
            console.ex(error)
        }
    }

    registryPlugin(plugin: plugin.Plugin) {
        let controllers = getControllerMetadatas(plugin).values()
        for (const controller of controllers) {
            console.debug(`Plugin ${plugin.description.name} Registry Controller ${controller.name}.`)
            this.registryController(controller.target)
        }
    }

    unregistryPlugin(plugin: plugin.Plugin) {
        let controllers = getControllerMetadatas(plugin).values()
        for (const controller of controllers) {
            console.debug(`Plugin ${plugin.description.name} Unregistry Controller ${controller.name}.`)
            this.unregistryController(controller.target)
        }
    }

    registryController(target: any) {
        if (!target) { throw new Error('Controller can\'t be undefiend!') }
        let controllerMetadata = getControllerMetadata(target)
        if (!controllerMetadata) { throw new Error(`Controller ${target.name} must have @Controller decorator!`) }
        target = this.bindController(target)
        let actions = getControllerActions(target)
        this.controllerActions.set(controllerMetadata.name, [])
        for (const action of actions) {
            let actionMetadata = getActionMetadata(target, action)
            this.controllerActions.get(controllerMetadata.name).push(actionMetadata)
            let path = `${controllerMetadata.path || ''}${actionMetadata.path || ''}`
            if (!path) throw new Error(`Controller ${controllerMetadata.name} Action ${actionMetadata.name} path is empty!`)
            if (!this.methodMappings.has(path)) { this.methodMappings.set(path, new Map()) }
            console.debug(`Controller ${controllerMetadata.name} Registry ${path} Action to ${actionMetadata.executor || '<anonymous>'} function.`)
            this.methodMappings.get(path).set(actionMetadata.method || 'ALL', (ctx: Context) => {
                let args = []
                let params = getActionParams(target, action)
                for (const index in params) {
                    let param = params[index]
                    let paramValue = undefined
                    switch (param.type) {
                        case PARAM_TYPE.REQUEST: paramValue = ctx.request; break
                        case PARAM_TYPE.RESPONSE: paramValue = ctx.response; break
                        case PARAM_TYPE.QUERY: paramValue = ctx.params[param.name]; break
                        case PARAM_TYPE.HEADER: paramValue = ctx.headers[param.name]; break
                        case PARAM_TYPE.BODY: paramValue = ctx.body; break
                        case PARAM_TYPE.COOKIE: paramValue = ctx.cookies[param.name]; break
                    }
                    if (param.require && !paramValue) {
                        return {
                            status: 400,
                            msg: param.message ?? `Param Type ${param.type} require not empty!`,
                            data: param
                        }
                    }
                    args[param.index] = paramValue ?? param.default
                }
                return target[actionMetadata.executor].apply(target, args)
            })
        }
    }

    private bindController(target: any) {
        try {
            this.container.rebind(METADATA_KEY.Controller).to(target).inSingletonScope().whenTargetNamed(target.name)
        } catch{
            this.container.bind(METADATA_KEY.Controller).to(target).inSingletonScope().whenTargetNamed(target.name)
        }
        return this.container.getNamed(METADATA_KEY.Controller, target.name)
    }

    unregistryController(target: any) {
        if (!target) { throw new Error('Controller can\'t be undefiend!') }
        let controllerMetadata = getControllerMetadata(target)
        if (!controllerMetadata) { throw new Error(`Controller ${target.name} must have @Controller decorator!`) }
        if (!this.controllerActions.has(controllerMetadata.name)) { return console.warn(`Controller ${controllerMetadata.name} not registry!`) }
        let actions = this.controllerActions.get(controllerMetadata.name)
        for (const actionMetadata of actions) {
            let path = `${controllerMetadata.path || ''}${actionMetadata.path || ''}`
            if (!this.methodMappings.has(path)) { continue }
            this.methodMappings.get(path).delete(actionMetadata.method)
            console.debug(`Controller ${controllerMetadata.name} Unregistry ${path} Action.`)
        }
        this.controllerActions.delete(controllerMetadata.name)
    }

    registryMapping(path: string, handler: RequestHandler) {
        console.debug(`Registry Mapping ${path} to handle ${handler.name || '<anonymous>'} function.`)
        if (!this.methodMappings.has(path)) { this.methodMappings.set(path, new Map()) }
        this.methodMappings.get(path).set("ALL", handler)
    }

    unregistryMapping(path: string) {
        if (this.methodMappings.has(path)) { this.methodMappings.get(path).delete("ALL") }
    }

    registryInterceptor(interceptor: InterceptorAdapter) {
        console.debug(`Registry ${interceptor.name} Interceptor.`)
        this.interceptors.set(interceptor.name, interceptor)
    }

    unregistryInterceptor(interceptor: string | InterceptorAdapter) {
        if (typeof interceptor === "string") { interceptor = { name: interceptor } }
        console.debug(`Unregistry ${interceptor.name} Interceptor.`)
        this.interceptors.delete(interceptor.name)
    }

    private registryFilterProxy() {
        try { this.beanFactory.destroySingleton(FilterProxyBeanName) } catch (ex) { }
        var WebFilterProxyNashorn = Java.extend(this.WebFilterProxy, {
            doFilter: (servletRequest: javax.servlet.http.HttpServletRequest, servletResponse: javax.servlet.http.HttpServletResponse, filterChain: javax.servlet.FilterChain) => {
                filterChain.doFilter(servletRequest, servletResponse)
            }
        })
        this.beanFactory.registerSingleton(FilterProxyBeanName, new WebFilterProxyNashorn())
    }

    // private getRequestWrapper(servletRequest: javax.servlet.http.HttpServletRequest) {
    //     var body = org.springframework.util.StreamUtils.copyToByteArray(servletRequest.getInputStream())
    //     var HttpServletRequestWrapperAdapter = Java.extend(HttpServletRequestWrapper, {
    //         getInputStream: () => {
    //             var bais = new java.io.ByteArrayInputStream(body)
    //             return new ServletInputStream({
    //                 read: () => bais.read(),
    //                 isFinished: () => bais.available() == 0
    //             })
    //         }
    //     })
    //     var wrapper = new HttpServletRequestWrapperAdapter(servletRequest)
    //     return wrapper
    // }

    // private getResponseWrapper(servletResponse: javax.servlet.http.HttpServletResponse) {
    //     var HttpServletRequestWrapperAdapter = Java.extend(HttpServletRequestWrapper, {
    //         getOutputStream: () => {
    //             return new ServletOutputStream({
    //             })
    //         }
    //     })
    //     var wrapper = new HttpServletRequestWrapperAdapter(servletResponse)
    //     return wrapper
    // }

    private notFound(ctx: Context) {
        return {
            status: 404,
            msg: "handlerMapping Not Found!",
            method: ctx.request.getMethod(),
            path: ctx.request.getRequestURI(),
            timestamp: Date.now()
        }
    }

    private registryWebProxy() {
        try { this.beanFactory.destroySingleton(WebProxyBeanName) } catch (ex) { }
        var WebServerProxyNashorn = Java.extend(this.WebServerProxy, {
            process: (req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse) => {
                let ctx: Context = { request: req, response: resp, params: {}, body: {} }
                ctx.url = req.getRequestURI()
                // @ts-ignore
                ctx.headers = { __noSuchProperty__: (name: string) => req.getHeader(name) }
                ctx.cookies = {}
                for (const cookie of (req.getCookies() || [])) {
                    ctx.cookies[cookie.getName()] = cookie.getValue()
                }
                if (req.getQueryString()) {
                    ctx.url += `?${req.getQueryString()}`
                    ctx.params = querystring.parse(req.getQueryString())
                }
                if (req.getMethod() == "POST") {
                    ctx.body = this.StreamUtils.copyToString(req.getInputStream(), java.nio.charset.StandardCharsets.UTF_8)
                    if ((ctx.headers['Content-Type'] || '').includes('application/json')) {
                        try {
                            ctx.body = JSON.parse(ctx.body)
                        } catch (error) {
                            return {
                                status: 500,
                                msg: `parse json body error: ${error}`,
                                path: ctx.url,
                                error: console.stack(error, false),
                                timestamp: Date.now()
                            }
                        }
                    }
                }
                let result = this.process(ctx)
                result?.status && resp.setStatus(result.status)
                return result
            }
        })
        this.beanFactory.registerSingleton(WebProxyBeanName, new WebServerProxyNashorn())
    }


    private process(ctx: Context) {
        let startTime = Date.now()
        for (const [_, interceptor] of this.interceptors) {
            if (interceptor.preHandle) {
                try {
                    let startTime = Date.now()
                    ctx.result = interceptor.preHandle(ctx)
                    let preHandleTime = Date.now() - startTime
                    if (preHandleTime > 20) {
                        console.debug(`[WARN] Interceptor ${interceptor.name} preHandle cost time ${preHandleTime}ms!`)
                    }
                    if (ctx.result) { return ctx.result }
                } catch (error) {
                    console.ex(error)
                    return {
                        status: 500,
                        msg: `Interceptor ${interceptor.name} preHandle error: ${error}`,
                        path: ctx.url,
                        error: console.stack(error, false),
                        timestamp: Date.now()
                    }
                }
            }
        }
        let path = ctx.request.getRequestURI()
        if (!this.methodMappings.has(path)) return this.notFound(ctx)
        let mappings = this.methodMappings.get(ctx.request.getRequestURI())
        ctx.handler = mappings.get(ctx.request.getMethod()) || mappings.get("ALL")
        ctx.result = this.execRequestHandle(ctx)
        for (const [_, interceptor] of this.interceptors) {
            if (interceptor.postHandle) {
                try {
                    let startTime = Date.now()
                    ctx.result = interceptor.postHandle(ctx)
                    let preHandleTime = Date.now() - startTime
                    if (preHandleTime > 20) {
                        console.debug(`[WARN] Interceptor ${interceptor.name} preHandle cost time ${preHandleTime}ms!`)
                    }
                } catch (error) {
                    return {
                        status: 500,
                        msg: `Interceptor ${interceptor.name} postHandle error: ${error}`,
                        path: ctx.url,
                        error: console.stack(error, false),
                        timestamp: Date.now()
                    }
                }
            }
        }
        console.debug(`
===================== MiaoSpring =====================
Request  Method : ${ctx.request.getMethod()}
Request  URL    : ${ctx.url}
Request  Body   : ${JSON.stringify(ctx.body)}
Response Body   : ${JSON.stringify(Java.asJSONCompatible(ctx.result))}
Handle   Time   : ${Date.now() - startTime}ms
======================================================`)
        return ctx.result
    }

    private execRequestHandle(ctx: Context) {
        if (!ctx.handler) return this.notFound(ctx)
        try {
            return ctx.handler(ctx)
        } catch (error) {
            return {
                status: 500,
                msg: '' + error,
                path: ctx.url,
                error: console.stack(error, false),
                timestamp: Date.now()
            }
        }
    }
}
