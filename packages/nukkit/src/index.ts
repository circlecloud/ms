/// <reference types="@ccms/types/dist/typings/nukkit" />

import { server } from '@ccms/api'
import { Container } from '@ccms/container'

import { NukkitConsole } from './console';
import './event';
import './server';
import './command';
import './task';

export default function NukkitImpl(container: Container) {
    container.bind(server.Console).toConstantValue(NukkitConsole);
}
