/// <reference types="@ms/types/dist/typings/sponge" />

import { server, command, event, task } from '@ms/api'
import { Container } from '@ms/container'

import { SpongeConsole } from './console';
import { SpongeEvent } from './event';
import { SpongeServer } from './server';
import { SpongeCommand } from './command';
import { SpongeTaskManager } from './task';

export default function SpongeImpl(container: Container) {
    container.bind(server.Console).toConstantValue(SpongeConsole);
    container.bind(event.Event).to(SpongeEvent).inSingletonScope();
    container.bind(server.Server).to(SpongeServer).inSingletonScope();
    container.bind(command.Command).to(SpongeCommand).inSingletonScope();
    container.bind(task.TaskManager).to(SpongeTaskManager).inSingletonScope();
}
