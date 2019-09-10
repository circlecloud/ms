'use strict';
/**
 * MiaoScript Event处理类
 */
import '@ms/core'
import '@ms/nashorn'
import { injectable } from '@ms/container'

const Thread = Java.type("java.lang.Thread");

export namespace event {
    @injectable()
    export abstract class Event {
        private mapEvent = [];
        private listenerMap = [];
        private baseEventDir = '';

        constructor(baseEventDir: string) {
            this.baseEventDir = baseEventDir;
        }

        /**
         * 扫描包 org.bukkit.event 下的所有事件
         * 映射简写名称 org.bukkit.event.player.PlayerLoginEvent => playerloginevent
         */
        mapEventName() {
            if (this.baseEventDir === "") {
                throw new Error("事件基础包名为空 无法进行事件映射!");
            }
            var count = 0;
            var dirs = Thread.currentThread().getContextClassLoader().getResources(this.baseEventDir);
            while (dirs.hasMoreElements()) {
                var url = dirs.nextElement();
                var protocol = url.protocol;
                if (protocol === "jar") {
                    // noinspection JSUnresolvedVariable
                    var jar = url.openConnection().jarFile;
                    var entries = jar.entries();
                    while (entries.hasMoreElements()) {
                        var entry = entries.nextElement();
                        var name = entry.name;
                        // 以 org/bukkit/event 开头 并且以 .class 结尾
                        if (name.startsWith(this.baseEventDir) && name.endsWith(".class")) {
                            var i = name.replaceAll('/', '.');
                            try {
                                var clz = base.getClass(i.substring(0, i.length - 6));
                                // 继承于 org.bukkit.event.Event 访问符为Public
                                if (this.isValidEvent(clz)) {
                                    var simpleName = this.class2Name(clz).toLowerCase();
                                    console.debug(`Mapping Event [${clz.canonicalName}] => ${simpleName}`);
                                    this.mapEvent[simpleName] = clz;
                                    count++;
                                }
                            } catch (ex) {
                                //ignore already loaded class
                            }
                        }
                    }
                }
            }
            return count;
        };

        class2Name(clazz) {
            return clazz.simpleName;
        };

        name2Class(name, event) {
            var eventCls = this.mapEvent[event.toLowerCase()] || this.mapEvent[event.toLowerCase() + 'event'];
            if (!eventCls) {
                try {
                    eventCls = base.getClass(eventCls);
                    this.mapEvent[event] = eventCls;
                } catch (ex) {
                    console.console(`§6插件 §b${name} §6注册事件 §c${event} §6失败 §4事件未找到!`);
                    console.ex(new Error(`插件 ${name} 注册事件 ${event} 失败 事件未找到!`));
                    return;
                }
            }
            return eventCls;
        };

        execute(name, exec, eventCls) {
            return (...args) => {
                try {
                    var time = new Date().getTime()
                    exec(args[args.length - 1]);
                    var cost = new Date().getTime() - time;
                    if (cost > 20) {
                        console.console(`§c注意! §6插件 §b${name} §6处理 §d${this.class2Name(eventCls)} §6事件 §c耗时 §4${cost}ms !`)
                    }
                } catch (ex) {
                    console.console(`§6插件 §b${name} §6处理 §d${this.class2Name(eventCls)} §6事件时发生异常 §4${ex}`);
                    console.ex(ex);
                }
            };
        };

        /**
        * 添加事件监听
        * @param jsp
        * @param event
        * @param exec {function}
        * @param priority [LOWEST,LOW,NORMAL,HIGH,HIGHEST,MONITOR]
        * @param ignoreCancel
        */
        listen(jsp, event, exec, priority, ignoreCancel) {
            if (!jsp || !jsp.description || !jsp.description.name) throw new TypeError('插件名称为空 请检查传入参数!');
            var name = jsp.description.name;
            var eventCls = this.name2Class(name, event);
            if (!eventCls) { return; }
            if (typeof priority === 'boolean') {
                ignoreCancel = priority;
                priority = 'NORMAL';
            }
            priority = priority || 'NORMAL';
            ignoreCancel = ignoreCancel || false;
            // noinspection JSUnusedGlobalSymbols
            var listener = this.register(eventCls, this.execute(name, exec, eventCls), priority, ignoreCancel);
            var listenerMap = this.listenerMap;
            // 添加到缓存 用于关闭插件的时候关闭事件
            if (!listenerMap[name]) listenerMap[name] = [];
            var offExec = () => {
                this.unregister(eventCls, listener);
                console.debug(`插件 ${name} 注销事件 ${this.class2Name(eventCls)}`);
            };
            var off = {
                event: eventCls,
                listener: listener,
                off: offExec
            };
            listenerMap[name].push(off);
            // noinspection JSUnresolvedVariable
            console.debug(`插件 ${name} 注册事件 ${this.class2Name(eventCls)} => ${exec.name || '匿名方法'}`);
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
