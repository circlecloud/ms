/// <reference types="@javatypes/spigot-api" />

import { server } from '@ccms/api'
import { Container } from '@ccms/container'

import { BukkitConsole } from './console'
import './chat'
import './task'
import './event'
import './server'
import { BukkitNativePluginManager } from './plugin'
import './command'
import './channel'
import './particle'

export default function BukkitImpl(container: Container) {
    container.bind(server.Console).toConstantValue(BukkitConsole)
    container.rebind(server.NativePluginManager).toConstantValue(new BukkitNativePluginManager())
}
