/// <reference types="@ms/types/dist/typings/nukkit" />

import { server } from '@ms/api'
import { Container } from '@ms/container'

import { NukkitConsole } from './console';
import './event';
import './server';
import './command';
import './task';

export default function NukkitImpl(container: Container) {
    container.bind(server.Console).toConstantValue(NukkitConsole);
}
