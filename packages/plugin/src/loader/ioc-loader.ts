import { plugin, server } from "@ccms/api"
import { inject, ContainerInstance, Container, provideSingleton } from "@ccms/container"

import { interfaces } from "../interfaces"
import { getPluginStageMetadata, getPluginSources } from "../utils"

@provideSingleton(plugin.PluginLoader)
export class IocLoader implements plugin.PluginLoader {
    type: string = 'ioc'
    @inject(ContainerInstance)
    private container: Container
    @inject(server.ServerType)
    private serverType: string

    private pluginMetadataMap: Map<string, plugin.PluginMetadata>

    constructor() {
        this.pluginMetadataMap = getPluginSources()
    }

    require(target: any, result: any) {
        return this.pluginMetadataMap.get(target.toString())
    }

    build(metadata: plugin.PluginMetadata) {
        if (!this.allowProcess(metadata.servers)) { return }
        let pluginInstance: plugin.Plugin
        try {
            this.bindPlugin(metadata)
            pluginInstance = this.container.getNamed<plugin.Plugin>(plugin.Plugin, metadata.name)
            if (!(pluginInstance instanceof interfaces.Plugin)) {
                console.i18n('ms.plugin.manager.build.not.extends', { source: metadata.source })
                return
            }
        } catch (ex) {
            console.i18n("ms.plugin.manager.initialize.error", { name: metadata.name, ex })
            console.ex(ex)
        }
        return pluginInstance
    }

    load(plugin: plugin.Plugin): void {
        this.stage(plugin, 'load')
    }
    enable(plugin: plugin.Plugin): void {
        this.stage(plugin, 'enable')
    }
    disable(plugin: plugin.Plugin): void {
        this.stage(plugin, 'disable')
    }
    reload(plugin: plugin.Plugin): void {
        this.disable(plugin)
        //@ts-ignore
        require(plugin.description.source, { cache: false })
        this.load(plugin)
        this.enable(plugin)
    }

    private bindPlugin(metadata: plugin.PluginMetadata) {
        try {
            let pluginInstance = this.container.getNamed<plugin.Plugin>(plugin.Plugin, metadata.name)
            if (pluginInstance.description.source + '' !== metadata.source + '') {
                console.i18n('ms.plugin.manager.build.duplicate', { exists: pluginInstance.description.source, source: metadata.source })
            }
            this.container.rebind(plugin.Plugin).to(metadata.target).inSingletonScope().whenTargetNamed(metadata.name)
        } catch{
            this.container.bind(plugin.Plugin).to(metadata.target).inSingletonScope().whenTargetNamed(metadata.name)
        }
    }

    private allowProcess(servers: string[]) {
        // Not set servers -> allow
        if (!servers || !servers.length) return true
        // include !type -> deny
        let denyServers = servers.filter(svr => svr.startsWith("!"))
        if (denyServers.length !== 0) {
            return !denyServers.includes(`!${this.serverType}`)
        } else {
            // only include -> allow
            return servers.includes(this.serverType)
        }
    }

    private stage(pluginInstance: plugin.Plugin, stageName: string) {
        let stages = getPluginStageMetadata(pluginInstance, stageName)
        for (const stage of stages) {
            if (!this.allowProcess(stage.servers)) { continue }
            console.i18n("ms.plugin.manager.stage.exec", { plugin: pluginInstance.description.name, name: stage.executor, stage: stageName, servers: stage.servers })
            try {
                pluginInstance[stage.executor].apply(pluginInstance)
            } catch (error) {
                console.i18n("ms.plugin.manager.stage.exec.error", { plugin: pluginInstance.description.name, executor: stage.executor, error })
                console.ex(error)
            }
        }
    }
}