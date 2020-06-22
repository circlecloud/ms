/// <reference types="@javatypes/bungee-api" />

import { server } from '@ccms/api'
import { Container } from '@ccms/container'

import { BungeeConsole } from './console';
import './event';
import './server';
import './command';
import './channel';
import './task';

export default function BungeeImpl(container: Container) {
    container.bind(server.Console).toConstantValue(BungeeConsole);
}
