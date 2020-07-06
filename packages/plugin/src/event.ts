import { event, plugin, server } from '@ccms/api'
import { provideSingleton, postConstruct, inject } from '@ccms/container'
import { getPluginListenerMetadata } from './utils'

@provideSingleton(PluginEventManager)
export class PluginEventManager {
    @inject(server.ServerChecker)
    private ServerChecker: server.ServerChecker
    @inject(event.Event)
    private EventManager: event.Event

    constructor() {
        process.on('plugin.before.enable', (plugin: plugin.Plugin) => this.registryListener(plugin))
        process.on('plugin.after.disable', (plugin: plugin.Plugin) => this.unregistryListener(plugin))
    }

    private registryListener(pluginInstance: plugin.Plugin) {
        let events = getPluginListenerMetadata(pluginInstance)
        for (const event of events) {
            // ignore space listener
            if (!this.ServerChecker.check(event.servers)) { continue }
            // here must bind this to pluginInstance
            this.EventManager.listen(pluginInstance, event.name, pluginInstance[event.executor].bind(pluginInstance))
        }
    }

    private unregistryListener(pluginInstance: plugin.Plugin) {
        this.EventManager.disable(pluginInstance)
    }
}
