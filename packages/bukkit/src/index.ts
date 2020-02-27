/// <reference types="@ms/types/dist/typings/bukkit" />

import { server } from '@ms/api'
import { Container } from '@ms/container'

import { BukkitConsole } from './console';
import './event';
import './server';
import './command';
import './channel';
import './task';

export default function BukkitImpl(container: Container) {
    container.bind(server.Console).toConstantValue(BukkitConsole);
}
