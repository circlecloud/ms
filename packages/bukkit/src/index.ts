/// <reference types="@ms/types/dist/typings/bukkit" />

import { server, command, event, task } from '@ms/api'
import { Container } from '@ms/container'

import { BukkitConsole } from './console';
import { BukkitEvent } from './event';
import { BukkitServer } from './server';
import { BukkitCommand } from './command';
import { BukkitTaskManager } from './task';

export default function BukkitImpl(container: Container) {
    container.bind(server.Console).toConstantValue(BukkitConsole);
    container.bind(event.Event).to(BukkitEvent).inSingletonScope();
    container.bind(server.Server).to(BukkitServer).inSingletonScope();
    container.bind(command.Command).to(BukkitCommand).inSingletonScope();
    container.bind(task.TaskManager).to(BukkitTaskManager).inSingletonScope();
}
