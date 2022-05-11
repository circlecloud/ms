import { plugin, server } from "@ccms/api"
import { inject, ContainerInstance, Container, provideSingletonNamed, Autowired } from "@ccms/container"

import { interfaces } from "../interfaces"
import { getPluginStageMetadata, getPluginSources } from "../utils"

const LOADER_TYPE_NAME = 'ioc'

@provideSingletonNamed(plugin.PluginLoader, LOADER_TYPE_NAME)
export class IocLoader implements plugin.PluginLoader {
    type: string = LOADER_TYPE_NAME
    @inject(ContainerInstance)
    private container: Container
    @Autowired()
    private serverChecker: server.ServerChecker

    private pluginMetadataMap: Map<string, plugin.PluginMetadata>

    constructor() {
        this.pluginMetadataMap = getPluginSources()
    }

    require(loadMetadata: plugin.PluginLoadMetadata) {
        let metadata = this.pluginMetadataMap.get(loadMetadata.file.toString())
        if (metadata && metadata.type == this.type) {
            loadMetadata.metadata = metadata
            loadMetadata.loaded = true
        }
        return loadMetadata
    }

    build(metadata: plugin.PluginMetadata) {
        let pluginInstance: plugin.Plugin
        try {
            this.bindPlugin(metadata)
            pluginInstance = this.container.getNamed<plugin.Plugin>(plugin.Plugin, metadata.name)
            if (!(pluginInstance instanceof interfaces.Plugin)) {
                console.i18n('ms.plugin.manager.build.not.extends', { source: metadata.source })
                return
            }
        } catch (ex: any) {
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
        if (this.container.isBoundNamed(plugin.Plugin, metadata.name)) {
            let pluginInstance = this.container.getNamed<plugin.Plugin>(plugin.Plugin, metadata.name)
            if (pluginInstance.description.source + '' !== metadata.source + '') {
                console.i18n('ms.plugin.manager.build.duplicate', { exists: pluginInstance.description.source, source: metadata.source })
            }
            this.container.rebind(plugin.Plugin).to(metadata.target).inSingletonScope().whenTargetNamed(metadata.name)
        } else {
            this.container.bind(plugin.Plugin).to(metadata.target).inSingletonScope().whenTargetNamed(metadata.name)
        }
    }

    private stage(pluginInstance: plugin.Plugin, stageName: string) {
        let stages = getPluginStageMetadata(pluginInstance, stageName)
        for (const stage of stages) {
            if (!this.serverChecker.check(stage.servers)) { continue }
            console.i18n("ms.plugin.manager.stage.exec", { plugin: pluginInstance.description.name, name: stage.executor, stage: stageName, servers: stage.servers })
            try {
                pluginInstance[stage.executor].apply(pluginInstance)
            } catch (error: any) {
                console.i18n("ms.plugin.manager.stage.exec.error", { plugin: pluginInstance.description.name, executor: stage.executor, error })
                console.ex(error)
            }
        }
    }
}
