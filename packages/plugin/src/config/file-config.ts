import * as fs from '@ccms/common/dist/fs'

import { PluginConfig, PluginConfigLoader } from './interfaces'

export class PluginFileConfig implements PluginConfig {
    private loader: PluginConfigLoader
    private file: string
    constructor(loader: PluginConfigLoader, file: string, def = {}) {
        this.loader = loader
        this.file = file
        if (fs.exists(file)) {
            this.reload()
        } else {
            Object.assign(this, def)
        }
        this.initialize()
    }

    initialize() {
    }

    save() {
        base.save(this.file, this.loader.dump(this))
    }

    reload() {
        Object.assign(this, this.loader.load(base.read(this.file)))
    }
}

export class PluginConfigFolder {
    private loader: PluginConfigLoader
    private folder: string

    private configCache = new Map<string, PluginFileConfig>()

    constructor(loader: PluginConfigLoader, folder: string) {
        this.loader = loader
        this.folder = folder
    }

    createConfig(path: string, def = {}) {
        return new PluginFileConfig(this.loader, path, def)
    }

    getConfig(name: string, def = {}) {
        let path = fs.concat(this.folder, name)
        if (!this.configCache.has(path)) {
            this.configCache.set(path, this.createConfig(path, def))
        }
        return this.configCache.get(path)
    }

    clear() {
        this.configCache.clear()
    }

    save() {
        this.configCache.forEach((config) => config.save())
    }

    reload() {
        this.configCache.forEach((config) => config.reload())
    }
}
