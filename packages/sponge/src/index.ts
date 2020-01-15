/// <reference types="@ms/types/dist/typings/sponge" />

import { server, plugin, command, event, task } from '@ms/api'
import { DefaultContainer as container } from '@ms/container'

import { SpongeConsole } from './console';
import { SpongeEvent } from './event';
import { SpongeServer } from './server';
import { SpongeCommand } from './command';
import { SpongeTaskManager } from './task';

let SpongeServerType = 'sponge';
let Sponge = Java.type("org.spongepowered.api.Sponge");

container.bind(server.Console).toConstantValue(SpongeConsole);
container.bind(server.ServerType).toConstantValue(SpongeServerType);

container.bind(event.Event).to(SpongeEvent).inSingletonScope();
container.bind(server.Server).to(SpongeServer).inSingletonScope();
container.bind(command.Command).to(SpongeCommand).inSingletonScope();
container.bind(task.TaskManager).to(SpongeTaskManager).inSingletonScope();
