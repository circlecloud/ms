/// <reference types="@ms/types/dist/typings/nukkit" />

import { server, command, event, task } from '@ms/api'
import { Container } from '@ms/container'

import { NukkitConsole } from './console';
import { NukkitEvent } from './event';
import { NukkitServer } from './server';
import { NukkitCommand } from './command';
import { NukkitTaskManager } from './task';

export default function NukkitImpl(container: Container) {
    container.bind(server.Console).toConstantValue(NukkitConsole);
    container.bind(event.Event).to(NukkitEvent).inSingletonScope();
    container.bind(server.Server).to(NukkitServer).inSingletonScope();
    container.bind(command.Command).to(NukkitCommand).inSingletonScope();
    container.bind(task.TaskManager).to(NukkitTaskManager).inSingletonScope();
}
