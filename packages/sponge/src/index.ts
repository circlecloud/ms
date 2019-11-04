/// <reference path="./typings/index.ts" />

import { server, plugin, command, event, task } from '@ms/api'
import { DefaultContainer as container } from '@ms/container'

import { SpongeConsole } from './console';
import { SpongeEvent } from './event';
import { SpongeCommand } from './command';
import { SpongeTaskManager } from './task';

let SpongeServerType = 'sponge';
let Sponge = org.spongepowered.api.Sponge;

container.bind(server.Console).toConstantValue(SpongeConsole);
container.bind(server.ServerType).toConstantValue(SpongeServerType);
container.bind(plugin.PluginInstance).toConstantValue(Sponge.getPluginManager().getPlugin('MiaoScript').orElse(null));

container.bind(event.Event).to(SpongeEvent).inSingletonScope();
container.bind(command.Command).to(SpongeCommand).inSingletonScope();
container.bind(task.TaskManager).to(SpongeTaskManager).inSingletonScope();

console.debug(`Detect Sponge Compatible set ServerType to ${SpongeServerType} ...`)
