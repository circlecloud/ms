/// <reference types="@ms/types/dist/typings/bungee" />

import { server } from '@ms/api'
import { Container } from '@ms/container'

import { BungeeConsole } from './console';
import './event';
import './server';
import './command';
import './channel';
import './task';

export default function BungeeImpl(container: Container) {
    container.bind(server.Console).toConstantValue(BungeeConsole);
}
