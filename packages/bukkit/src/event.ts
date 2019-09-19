import { event, server, plugin } from '@ms/api'
import { injectable, inject } from '@ms/container';
import * as reflect from '@ms/common/dist/reflect'

let Bukkit = Java.type("org.bukkit.Bukkit");
let Event = Java.type("org.bukkit.event.Event");
let Modifier = Java.type("java.lang.reflect.Modifier");
let Listener = Java.type("org.bukkit.event.Listener");
let EventPriority = Java.type("org.bukkit.event.EventPriority");
let EventExecutor = Java.type("org.bukkit.plugin.EventExecutor");

@injectable()
export class BukkitEvent extends event.Event {
    @inject(plugin.PluginInstance)
    private pluginInstance: any

    constructor() {
        super('org/bukkit/event');
    }

    isValidEvent(clazz: any): boolean {
        // 继承于 org.bukkit.event.Event
        return Event.class.isAssignableFrom(clazz) &&
            // 访问符为Public
            Modifier.isPublic(clazz.getModifiers()) &&
            // 不是抽象类
            !Modifier.isAbstract(clazz.getModifiers());
    }
    register(eventCls: any, exec: Function, priority: any, ignoreCancel: boolean) {
        var listener = new Listener({});
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
