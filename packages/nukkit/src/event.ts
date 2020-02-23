import { event, server, plugin } from '@ms/api'
import { injectable, inject } from '@ms/container'

const Nukkit: cn.nukkit.Server = base.getInstance().getServer();
const Event = Java.type("cn.nukkit.event.Event");
const Modifier = Java.type("java.lang.reflect.Modifier");
const Listener = Java.type("cn.nukkit.event.Listener");
const EventPriority = Java.type("cn.nukkit.event.EventPriority");
const EventExecutor = Java.type("cn.nukkit.plugin.EventExecutor");

@injectable()
export class NukkitEvent extends event.Event {
    @inject(plugin.PluginInstance)
    private pluginInstance: any

    constructor() {
        super('cn/nukkit/event');
    }

    getJarFile(resource: string) {
        return super.getJarFile('cn/nukkit/Nukkit.class')
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
        Nukkit.getPluginManager().registerEvent(
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
        event.getHandlers().unregister(listener);
    }
}
