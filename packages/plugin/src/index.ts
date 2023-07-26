import '@ccms/verify'
import './scanner/js-scanner'

import './loader/ioc-loader'
import './loader/basic-loader'

export * from './config'
export * from './config/config'
export * from './manager'
export * from './decorators'
export * from './interfaces'

export * from './event'
export * from './command'

export {
    plugin as JSPlugin,
    cmd as Cmd,
    tab as Tab,
    listener as Listener,
    config as Config,
    playerdata as PlayerData
} from './decorators'

import '@ccms/database'
