/// <reference types="@javatypes/bungee-api" />

import { server } from '@ccms/api'
import { Container } from '@ccms/container'

import { BungeeConsole } from './console'
import './task'
import './event'
import './server'
import { BungeeNativePluginManager } from './plugin'
import './command'
import './channel'

export default function BungeeImpl(container: Container) {
    container.bind(server.Console).toConstantValue(BungeeConsole)
    container.rebind(server.NativePluginManager).toConstantValue(new BungeeNativePluginManager())
}
