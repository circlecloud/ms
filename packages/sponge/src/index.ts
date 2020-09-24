/// <reference types="@javatypes/sponge-api" />

import { server } from '@ccms/api'
import { Container } from '@ccms/container'

import { SpongeConsole } from './console'
import './chat'
import './task'
import './event'
import './server'
import './command'
import './channel'

export default function SpongeImpl(container: Container) {
    container.bind(server.Console).toConstantValue(SpongeConsole)
}
