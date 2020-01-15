/// <reference types="@ms/types/dist/typings/bungee" />

import { server, plugin, command, event, task } from '@ms/api'
import { DefaultContainer as container } from '@ms/container'

import { BungeeConsole } from './console';
import { BungeeEvent } from './event';
import { BungeeServer } from './server';
import { BungeeCommand } from './command';
import { BungeeTaskManager } from './task';

let BungeeServerType = 'bungee';

container.bind(server.Console).toConstantValue(BungeeConsole);
container.bind(server.ServerType).toConstantValue(BungeeServerType);

container.bind(event.Event).to(BungeeEvent).inSingletonScope();
container.bind(server.Server).to(BungeeServer).inSingletonScope();
container.bind(command.Command).to(BungeeCommand).inSingletonScope();
container.bind(task.TaskManager).to(BungeeTaskManager).inSingletonScope();
