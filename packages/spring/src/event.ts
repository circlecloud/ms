import { event, plugin } from '@ccms/api'
import { inject, provideSingleton } from '@ccms/container'

@provideSingleton(event.Event)
export class SpringEvent extends event.Event {
    @inject(plugin.PluginInstance)
    private pluginInstance: any

    constructor() {
        super('');
    }
    mapEventName() {
        return 0;
    }
    isValidEvent(clazz: any): boolean {
        throw new Error("Method not implemented.");
    }
    register(eventCls: any, exec: Function, priority: any, ignoreCancel: boolean) {
        throw new Error("Method not implemented.");
    }
    unregister(event: any, listener: any): void {
        throw new Error("Method not implemented.");
    }
}
