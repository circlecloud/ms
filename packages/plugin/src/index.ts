import './scanner/file-scanner'
import './loader/ioc-loader'
import './loader/basic-loader'

export * from './manager'
export * from './decorators'
export * from './interfaces'

export { PluginConfig } from './config'

export {
    plugin as JSPlugin,
    cmd as Cmd,
    tab as Tab,
    listener as Listener,
    config as Config
} from './decorators'
