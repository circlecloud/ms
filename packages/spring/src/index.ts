import { server } from '@ccms/api'
import { Container } from '@ccms/container'
import '@ccms/database'

import { SpringConsole } from './console';
import './event';
import './server';
import './command';
import './task';

export default function SpringImpl(container: Container) {
    container.bind(server.Console).toConstantValue(SpringConsole)
}
