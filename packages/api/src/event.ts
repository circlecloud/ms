'use strict';
/**
 * MiaoScript Event处理类
 */
import '@ms/core'
import '@ms/nashorn'
import { injectable } from '@ms/container'

const Thread = Java.type('java.lang.Thread');

export namespace event {
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
        private mapEvent = [];
        private listenerMap = [];

        protected baseEventDir = '';

        constructor(baseEventDir: string) {
            this.baseEventDir = baseEventDir;
        }

        /**
         * abstract event map function
         * ig: org.bukkit.event.player.PlayerLoginEvent => playerloginevent
         *     org.spongepowered.api.event.game.GameRegistryEvent.Register => gameregistryevent$register
         */
        mapEventName() {
            if (this.baseEventDir === "") {
                throw new Error("base event dir is empty, can't map event name !");
            }
            let count = 0;
            let jar = this.getJarFile(this.baseEventDir);
            let entries = jar.entries();
            while (entries.hasMoreElements()) {
                let entry = entries.nextElement();
                let name = entry.name;
                if (name.startsWith(this.baseEventDir) && name.endsWith(".class")) {
                    // replace name to qualifiedName
                    let qualifiedName = name.replaceAll('/', '.');
                    try {
                        let clazz = base.getClass(qualifiedName.substring(0, qualifiedName.length - 6));
                        if (this.isValidEvent(clazz)) {
                            let simpleName = this.class2Name(clazz).toLowerCase();
                            console.trace(`Mapping Event [${clazz.canonicalName}] => ${simpleName}`);
                            this.mapEvent[simpleName] = clazz;
                            count++;
                        }
                    } catch (ex) {
                        //ignore already loaded class
                    }
                }
            }
            return count;
        }

        getJarFile(resource: string) {
            let dirs = Thread.currentThread().getContextClassLoader().getResources(resource);
            if (dirs.hasMoreElements()) {
                let url = dirs.nextElement();
                if (url.protocol === "jar") { return url.openConnection().jarFile; }
            }
            throw new Error(`Can't Mapping Event Because not found Resources ${resource}!`)
        }

        class2Name(clazz: any) {
            return clazz.simpleName;
        }

        name2Class(name: any, event: string) {
            let eventCls = this.mapEvent[event.toLowerCase()] || this.mapEvent[event.toLowerCase() + 'event'];
            if (!eventCls) {
                try {
                    eventCls = base.getClass(eventCls);
                    this.mapEvent[event] = eventCls;
                } catch (ex) {
                    console.console(`§6插件 §b${name} §6注册事件 §c${event} §6失败 §4事件未找到!`);
                    console.ex(new Error(`Plugin ${name} register event error ${event} not found!`));
                    return;
                }
            }
            return eventCls;
        }

        execute(name, exec, eventCls) {
            return (...args: any[]) => {
                try {
                    let event = args[args.length - 1];
                    if (eventCls.isAssignableFrom(event.getClass())) {
                        let time = Date.now()
                        exec(event);
                        let cost = Date.now() - time;
                        if (cost > 20) {
                            console.console(`§c注意! §6插件 §b${name} §6处理 §d${this.class2Name(eventCls)} §6事件 §c耗时 §4${cost}ms !`)
                        }
                    }
                } catch (ex) {
                    console.console(`§6插件 §b${name} §6处理 §d${this.class2Name(eventCls)} §6事件时发生异常 §4${ex}`);
                    console.ex(ex);
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
            if (!plugin || !plugin.description || !plugin.description.name) throw new TypeError('插件名称为空 请检查传入参数!');
            var name = plugin.description.name;
            var eventCls = this.name2Class(name, event);
            if (!eventCls) { return; }
            if (typeof priority === 'boolean') {
                ignoreCancel = priority;
                priority = EventPriority.NORMAL;
            }
            priority = priority || EventPriority.NORMAL;
            ignoreCancel = ignoreCancel || false;
            // noinspection JSUnusedGlobalSymbols
            var listener = this.register(eventCls, this.execute(name, exec, eventCls), priority, ignoreCancel);
            var listenerMap = this.listenerMap;
            // add to cache Be used for close plugin to close event
            if (!listenerMap[name]) listenerMap[name] = [];
            var offExec = () => {
                this.unregister(eventCls, listener);
                console.debug(`[${name}] unregister event ${this.class2Name(eventCls)}`);
            };
            var off = {
                event: eventCls,
                listener: listener,
                off: offExec
            };
            listenerMap[name].push(off);
            // noinspection JSUnresolvedVariable
            console.debug(`[${name}] register event ${this.class2Name(eventCls)} => ${exec.name || '[anonymous]'}`);
            return off;
        }

        disable(plugin: any) {
            var eventCache = this.listenerMap[plugin.description.name];
            if (eventCache) {
                eventCache.forEach(t => t.off());
                delete this.listenerMap[plugin.description.name];
            }
        }

        abstract isValidEvent(clazz: any): boolean;
        abstract register(eventCls: any, exec: Function, priority: any, ignoreCancel: boolean): any;
        abstract unregister(event: any, listener: any): void;
    }
}
