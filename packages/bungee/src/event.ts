import { event, plugin } from '@ms/api'
import { injectable, inject } from '@ms/container';

const Bungee: net.md_5.bungee.api.ProxyServer = base.getInstance().getProxy();
const Event = Java.type("net.md_5.bungee.api.plugin.Event");
const Modifier = Java.type("java.lang.reflect.Modifier");

/**
 * Bungee Event Impl
 */
@injectable()
export class BungeeEvent extends event.Event {
    @inject(plugin.PluginInstance)
    private pluginInstance: any;
    private pluginManager = Bungee.getPluginManager()

    constructor() {
        super('net/md_5/bungee/api/event');
    }

    isValidEvent(clazz: any): boolean {
        //继承于 net.md_5.bungee.api.plugin.Event
        return Event.class.isAssignableFrom(clazz) &&
            // 访问符为Public
            Modifier.isPublic(clazz.getModifiers()) &&
            // 不是抽象类
            !Modifier.isAbstract(clazz.getModifiers());
    }
    register(eventCls: any, exec: Function, priority: event.EventPriority = event.EventPriority.NORMAL, ignoreCancel: boolean = true) {
        this.pluginManager.registerListener(this.pluginInstance, null);
    }
    unregister(event: any, listener: any): void {
        this.pluginManager.unregisterListener(listener)
    }
}
