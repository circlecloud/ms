/// <reference types="@ms/types/dist/typings/bungee" />

import { server, command, event, task } from '@ms/api'
import { Container } from '@ms/container'

import { BungeeConsole } from './console';
import { BungeeEvent } from './event';
import { BungeeServer } from './server';
import { BungeeCommand } from './command';
import { BungeeTaskManager } from './task';

export default function BungeeImpl(container: Container) {
    container.bind(server.Console).toConstantValue(BungeeConsole);
    container.bind(event.Event).to(BungeeEvent).inSingletonScope();
    container.bind(server.Server).to(BungeeServer).inSingletonScope();
    container.bind(command.Command).to(BungeeCommand).inSingletonScope();
    container.bind(task.TaskManager).to(BungeeTaskManager).inSingletonScope();
}
