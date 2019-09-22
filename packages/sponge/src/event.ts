import { event, plugin } from '@ms/api'
import { injectable, inject } from '@ms/container';

let Modifier = Java.type("java.lang.reflect.Modifier");
let Order = Java.type("org.spongepowered.api.event.Order");
let Event = Java.type("org.spongepowered.api.event.Event");
let EventListener = Java.type("org.spongepowered.api.event.EventListener");

let Sponge = Java.type("org.spongepowered.api.Sponge");

let priorityMap = {
    'LOWEST': 'PRE',
    'LOW': 'FIRST',
    'NORMAL': 'DEFAULT',
    'HIGH': 'LATE',
    'HIGHEST': 'LAST',
    'MONITOR': 'POST'
};
/**
 * Sponge Event Impl
 */
@injectable()
export class SpongeEvent extends event.Event {
    @inject(plugin.PluginInstance)
    private pluginInstance: any;

    constructor() {
        super('org/spongepowered/api/event');
    }

    isValidEvent(clazz: any): boolean {
        //继承于 org.spongepowered.api.event.Event
        return Event.class.isAssignableFrom(clazz) &&
            // 访问符为Public
            Modifier.isPublic(clazz.getModifiers()) &&
            // Sponge的事件都是接口
            Modifier.isAbstract(clazz.getModifiers());
    }
    class2Name(clazz: any) {
        return clazz.canonicalName.substring(clazz.name.lastIndexOf(".") + 1);
    }
    register(eventCls: any, exec: Function, priority: any = 'NORMAL', ignoreCancel: boolean = true) {
        var listener = new EventListener({
            handle: exec
        });
        Sponge.getEventManager().registerListener(this.pluginInstance, eventCls, Order[priorityMap[priority]], listener);
        return listener;
    }
    unregister(event: any, listener: any): void {
        Sponge.getEventManager().unregisterListeners(listener);
    }
}