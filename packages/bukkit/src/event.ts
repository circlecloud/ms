import { event, plugin } from '@ms/api'
import { inject, provideSingleton } from '@ms/container';
import * as reflect from '@ms/common/dist/reflect'

const Bukkit = Java.type("org.bukkit.Bukkit");
const Event = Java.type("org.bukkit.event.Event");
const Modifier = Java.type("java.lang.reflect.Modifier");
const Listener = Java.type("org.bukkit.event.Listener");
const EventPriority = Java.type("org.bukkit.event.EventPriority");
const EventExecutor = Java.type("org.bukkit.plugin.EventExecutor");

@provideSingleton(event.Event)
export class BukkitEvent extends event.Event {
    @inject(plugin.PluginInstance)
    private pluginInstance: any

    constructor() {
        super('org/bukkit/event');
    }

    getJarFile(resource: string) {
        return super.getJarFile('org/bukkit/Bukkit.class')
    }
    isValidEvent(clazz: any): boolean {
        // 继承于 org.bukkit.event.Event
        return Event.class.isAssignableFrom(clazz) &&
            // 访问符为Public
            Modifier.isPublic(clazz.getModifiers()) &&
            // 不是抽象类
            !Modifier.isAbstract(clazz.getModifiers());
    }
    register(eventCls: any, exec: Function, priority: event.EventPriority, ignoreCancel: boolean) {
        let listener = new Listener({});
        Bukkit.pluginManager.registerEvent(
            eventCls,
            listener,
            EventPriority[priority],
            new EventExecutor({
                execute: exec
            }),
            this.pluginInstance,
            ignoreCancel);
        return listener;
    }
    unregister(event: any, listener: any): void {
        reflect.on(event).call('getHandlerList').get().unregister(listener);
    }
}
