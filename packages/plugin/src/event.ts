import { event, plugin, server } from '@ccms/api'
import { provideSingleton, Autowired } from '@ccms/container'
import { getPluginListenerMetadata } from './utils'

@provideSingleton(PluginEventManager)
export class PluginEventManager {
    @Autowired()
    private EventManager: event.Event
    @Autowired()
    private ServerChecker: server.ServerChecker

    constructor() {
        process.on('plugin.before.enable', this.registryListener.bind(this))
        process.on('plugin.after.disable', this.unregistryListener.bind(this))
    }

    mapEventName() {
        return this.EventManager.mapEventName().toFixed(0)
    }

    private registryListener(pluginInstance: plugin.Plugin) {
        let events = getPluginListenerMetadata(pluginInstance)
        for (const event of events) {
            // ignore space listener
            if (!this.ServerChecker.check(event.servers)) {
                console.debug(`[${pluginInstance.description.name}] ${event.target.constructor.name} incompatible event ${event.name} server(${event.servers}) ignore.`)
                continue
            }
            // here must bind this to pluginInstance
            let exec = event.target[event.executor]
            let execBinded = exec.bind(pluginInstance)
            execBinded.executor = event.executor
            exec.off = this.EventManager.listen(pluginInstance, event.name, execBinded, event.priority, event.ignoreCancel)
        }
    }

    private unregistryListener(pluginInstance: plugin.Plugin) {
        this.EventManager.disable(pluginInstance)
    }
}
