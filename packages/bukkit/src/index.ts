/// <reference types="@ccms/types/dist/typings/bukkit" />

import { server } from '@ccms/api'
import { Container } from '@ccms/container'

import { BukkitConsole } from './console';
import './event';
import './server';
import './command';
import './channel';
import './task';

export default function BukkitImpl(container: Container) {
    container.bind(server.Console).toConstantValue(BukkitConsole);
}
