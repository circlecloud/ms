import { server, plugin } from '@ccms/api'
import { Container } from '@ccms/container'

import { SpringConsole } from './console';
import './event';
import './server';
import './command';
import './task';

const BeanKit = Java.type('com.sixi.micro.common.kits.BeanKit')

export default function SpringImpl(container: Container) {
    container.bind(server.Console).toConstantValue(SpringConsole)
}
