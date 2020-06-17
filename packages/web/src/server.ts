import * as querystring from 'querystring'

import { web } from '@ccms/api'
import { provideSingleton, JSClass, postConstruct } from '@ccms/container'

import { WebProxyBeanName, FilterProxyBeanName } from './constants'
import { Context, InterceptorAdapter, RequestHandler } from './interfaces'

@provideSingleton(web.Server)
export class Server {
    @JSClass('pw.yumc.MiaoScript.web.WebServerProxy')
    private WebServerProxy: any
    @JSClass('pw.yumc.MiaoScript.web.WebFilterProxy')
    private WebFilterProxy: any

    private StreamUtils = org.springframework.util.StreamUtils
    private ResponseEntity = org.springframework.http.ResponseEntity

    private interceptors: Map<string, InterceptorAdapter>
    private handlerMapping: Map<string, RequestHandler>

    private beanFactory: org.springframework.beans.factory.support.DefaultListableBeanFactory

    @postConstruct()
    initialization() {
        this.beanFactory = base.getInstance().getAutowireCapableBeanFactory()
        this.interceptors = new Map()
        this.handlerMapping = new Map()
        this.start()
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

    registryMapping(path: string, handler: RequestHandler) {
        console.debug(`Registry Mapping ${path} to handle ${handler.name || '<anonymous>'} function.`)
        this.handlerMapping.set(path, handler)
    }

    unregistryMapping(path: string) {
        this.handlerMapping.delete(path)
    }

    registryInterceptor(interceptor: InterceptorAdapter) {
        console.debug(`Registry ${interceptor.name} Interceptor.`)
        this.interceptors.set(interceptor.name, interceptor)
    }

    unregistryInterceptor(interceptor: InterceptorAdapter) {
        this.interceptors.delete(interceptor.name)
    }

    private registryFilterProxy() {
        try { this.beanFactory.destroySingleton(FilterProxyBeanName) } catch (ex) { }
        var WebFilterProxyNashorn = Java.extend(this.WebFilterProxy, {
            doFilter: (servletRequest: javax.servlet.http.HttpServletRequest, servletResponse: javax.servlet.http.HttpServletResponse, filterChain: javax.servlet.FilterChain) => {
                console.log('WebFilterProxyNashorn', 'doFilter', servletRequest, servletResponse)
                filterChain.doFilter(servletRequest, servletResponse)
            }
        })
        this.beanFactory.registerSingleton(FilterProxyBeanName, new WebFilterProxyNashorn())
    }

    private registryWebProxy() {
        try { this.beanFactory.destroySingleton(WebProxyBeanName) } catch (ex) { }
        var WebServerProxyNashorn = Java.extend(this.WebServerProxy, {
            process: (req: javax.servlet.http.HttpServletRequest, resp: javax.servlet.http.HttpServletResponse) => {
                let ctx: Context = { request: req, response: resp }
                ctx.url = req.getRequestURI()
                // @ts-ignore
                ctx.header = { __noSuchProperty__: (name: string) => req.getHeader(name) + '' }
                if (req.getQueryString()) {
                    ctx.url += `?${req.getQueryString()}`
                    ctx.params = querystring.parse(req.getQueryString())
                }
                if (req.getMethod() == "POST") {
                    ctx.body = this.StreamUtils.copyToString(req.getInputStream(), java.nio.charset.StandardCharsets.UTF_8)
                    if ((ctx.header['Content-Type'] || '').includes('application/json')) {
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
Request    URL   : ${ctx.url}
Response   Body  : ${JSON.stringify(Java.asJSONCompatible(ctx.result))}
Handle     Time  : ${Date.now() - startTime}ms
======================================================`)
        return ctx.result
    }

    private execRequestHandle(ctx: Context) {
        if (!this.handlerMapping.has(ctx.request.getRequestURI())) {
            return {
                status: 404,
                msg: "handlerMapping Not Found!",
                path: ctx.url,
                timestamp: Date.now()
            }
        }
        try {
            return this.handlerMapping.get(ctx.request.getRequestURI())(ctx)
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
