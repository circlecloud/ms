/// <reference types="@javatypes/nukkit-api" />

import { server } from '@ccms/api'
import { Container } from '@ccms/container'

import { NukkitConsole } from './console'
import './task'
import './event'
import './server'
import { NukkitNativePluginManager } from './plugin'
import './command'

export default function NukkitImpl(container: Container) {
    container.bind(server.Console).toConstantValue(NukkitConsole)
    container.bind(server.NativePluginManager).toConstantValue(new NukkitNativePluginManager())
}
