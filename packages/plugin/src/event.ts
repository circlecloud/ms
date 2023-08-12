import { event, plugin, server } from '@ccms/api'
import { provideSingleton, Autowired } from '@ccms/container'
import { getPluginListenerMetadata } from './utils'

@provideSingleton(PluginEventManager)
export class PluginEventManager {
    @Autowired()
    private eventManager: event.Event
    @Autowired()
    private serverChecker: server.ServerChecker
    @Autowired()
    private nativePluginChecker: server.NativePluginChecker

    private listenerMap = [];

    constructor() {
        process.on('plugin.before.enable', this.registryListener.bind(this))
        process.on('plugin.after.disable', this.unregistryListener.bind(this))
    }

    mapEventName() {
        return this.eventManager.mapEventName().toFixed(0)
    }

    public registryListener(pluginInstance: plugin.Plugin, listener: any = pluginInstance) {
        let events = getPluginListenerMetadata(listener)
        let execes = []
        for (const event of events) {
            // ignore space listener
            if (!this.serverChecker.check(event.servers)) {
                console.debug(`[${pluginInstance.description.name}] ${event.target.constructor.name} incompatible server(${event.servers}) ignore event ${event.name}.`)
                continue
            }
            // ignore space listener
            if (!this.nativePluginChecker.check(event.plugins)) {
                console.debug(`[${pluginInstance.description.name}] ${event.target.constructor.name} require native plugins(${event.plugins}) ignore event ${event.name}.`)
                continue
            }
            // here must bind this to pluginInstance
            let exec = event.target[event.executor]
            let execBinded = exec.bind(listener)
            execBinded.executor = event.executor
            exec.off = this.eventManager.listen(pluginInstance, event.name, execBinded, event.priority, event.ignoreCancel)
            execes.push(exec)
        }
        let off = () => {
            if (off['offed']) return
            off['offed'] = true
            execes.forEach((exec: { off: () => void }) => exec.off())
        }
        listener.off = off
    }

    public unregistryListener(pluginInstance: plugin.Plugin, listener: any = pluginInstance) {
        if (listener && listener.off) {
            listener.off()
        }
        if (pluginInstance) {
            this.eventManager.disable(pluginInstance)
        }
    }
}
