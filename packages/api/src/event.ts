/**
 * MiaoScript Event处理类
 */
import i18n from '@ccms/i18n'
import { injectable, unmanaged } from '@ccms/container'

const Thread = Java.type('java.lang.Thread')

export namespace event {
    /**
     * 事件监听优先级
     */
    export enum EventPriority {
        LOWEST = "LOWEST",
        LOW = "LOW",
        NORMAL = "NORMAL",
        HIGH = "HIGH",
        HIGHEST = "HIGHEST",
        MONITOR = "MONITOR",
    }

    @injectable()
    export abstract class Event {
        // export EventPriority to blockly
        public EventPriority = EventPriority;

        private mapEvent = [];
        private listenerMap = [];

        protected baseEventDir = '';

        constructor(@unmanaged() baseEventDir: string) {
            this.baseEventDir = baseEventDir
        }

        /**
         * abstract event map function
         * ig: org.bukkit.event.player.PlayerLoginEvent => playerloginevent
         *     org.spongepowered.api.event.game.GameRegistryEvent.Register => gameregistryevent$register
         */
        mapEventName() {
            if (this.baseEventDir === "") { throw new Error(i18n.translate('ms.api.event.empty.event.dir')) }
            let count = 0
            let jar = this.getJarFile(this.baseEventDir)
            let entries = jar.entries()
            while (entries.hasMoreElements()) {
                let entry = entries.nextElement()
                let name = entry.name
                if (name.startsWith(this.baseEventDir) && name.endsWith(".class")) {
                    // replace name to qualifiedName
                    let qualifiedName = name.replaceAll('/', '.')
                    try {
                        let clazz = base.getClass(qualifiedName.substring(0, qualifiedName.length - 6))
                        if (this.isValidEvent(clazz)) {
                            let simpleName = this.class2Name(clazz).toLowerCase()
                            console.trace(i18n.translate("ms.api.event.mapping", { canonicalName: clazz.canonicalName, simpleName }))
                            this.mapEvent[simpleName] = clazz
                            count++
                        }
                    } catch (ex: any) {
                        //ignore already loaded class
                    }
                }
            }
            return count
        }

        getJarFile(resource: string, loader?: any) {
            let dirs = (loader || Thread.currentThread().getContextClassLoader()).getResources(resource)
            if (dirs.hasMoreElements()) {
                let url = dirs.nextElement()
                if (url.protocol === "jar") { return url.openConnection().jarFile }
            }
            throw new Error(i18n.translate("ms.api.event.resource.not.found", { resource }))
        }

        class2Name(clazz: any) {
            return clazz.simpleName
        }

        name2Class(name: any, event: string) {
            let eventCls = this.mapEvent[event.toLowerCase()] || this.mapEvent[event.toLowerCase() + 'event']
            if (!eventCls) {
                try {
                    eventCls = base.getClass(event)
                    this.mapEvent[event] = eventCls
                } catch (ex: any) {
                    console.i18n("ms.api.event.not.found", { name, event })
                    return
                }
            }
            return eventCls
        }

        execute(name, exec, eventCls) {
            return (...args: any[]) => {
                try {
                    let event = args[args.length - 1]
                    if (eventCls.isAssignableFrom(event.getClass())) {
                        let time = Date.now()
                        exec(event)
                        let cost = Date.now() - time
                        if (cost > global.ScriptSlowExecuteTime) {
                            console.i18n("ms.api.event.execute.slow", { name, event: this.class2Name(eventCls), cost })
                        }
                    }
                } catch (ex: any) {
                    console.i18n("ms.api.event.execute.error", { name, event: this.class2Name(eventCls), ex })
                    console.ex(ex)
                }
            }
        }

        /**
        * 添加事件监听
        * @param plugin {any}
        * @param event {string}
        * @param exec {function}
        * @param priority {string} [LOWEST,LOW,NORMAL,HIGH,HIGHEST,MONITOR]
        * @param ignoreCancel
        */
        listen(plugin: any, event: string, exec: (event: any) => void, priority: EventPriority = EventPriority.NORMAL, ignoreCancel = false) {
            if (!plugin || !plugin.description || !plugin.description.name) throw new TypeError(i18n.translate("ms.api.event.listen.plugin.name.empty"))
            var name = plugin.description.name
            var eventCls = this.name2Class(name, event)
            if (!eventCls) { return }
            if (typeof priority === 'boolean') {
                ignoreCancel = priority
                priority = EventPriority.NORMAL
            }
            priority = priority || EventPriority.NORMAL
            ignoreCancel = ignoreCancel || false
            // @ts-ignore
            let executor = exec.name || exec.executor || '[anonymous]'
            // noinspection JSUnusedGlobalSymbols
            var listener = this.register(eventCls, this.execute(name, exec, eventCls), priority, ignoreCancel)
            var listenerMap = this.listenerMap
            // add to cache Be used for close plugin to close event
            if (!listenerMap[name]) listenerMap[name] = []
            var off = () => {
                if (off['offed']) return
                off['offed'] = true
                this.unregister(eventCls, listener)
                console.debug(i18n.translate("ms.api.event.unregister", { name, event: this.class2Name(eventCls), exec: executor }))
            }
            listenerMap[name].push(off)
            // noinspection JSUnresolvedVariable
            console.debug(i18n.translate("ms.api.event.register", { name, event: this.class2Name(eventCls), exec: executor }))
            return off
        }

        /**
         * 关闭插件监听任务
         * @param plugin 插件
         */
        disable(plugin: any) {
            var eventCache = this.listenerMap[plugin.description.name]
            if (eventCache) {
                eventCache.forEach(off => off())
                delete this.listenerMap[plugin.description.name]
            }
        }

        /**
         * 判断
         * @param clazz 事件类
         */
        abstract isValidEvent(clazz: any): boolean
        /**
         * 注册事件
         * @param eventCls 事件类
         * @param exec 执行器
         * @param priority 优先级
         * @param ignoreCancel 是否忽略已取消的事件
         */
        abstract register(eventCls: any, exec: Function, priority: any, ignoreCancel: boolean): any
        /**
         * 取消监听事件
         * @param event 事件
         * @param listener 监听器
         */
        abstract unregister(event: any, listener: any): void
    }
}
