/// <reference types="@ms/types/dist/typings/bukkit" />

import { server, plugin, command, event, task } from '@ms/api'
import { DefaultContainer as container } from '@ms/container'

import { BukkitConsole } from './console';
import { BukkitEvent } from './event';
import { BukkitCommand } from './command';
import { BukkitTaskManager } from './task';

let BukkitServerType = 'bukkit';
let Bukkit = Java.type("org.bukkit.Bukkit");

container.bind(server.Console).toConstantValue(BukkitConsole);
container.bind(server.ServerType).toConstantValue(BukkitServerType);
container.bind(plugin.PluginInstance).toConstantValue(Bukkit.pluginManager.getPlugin('MiaoScript'));

container.bind(event.Event).to(BukkitEvent).inSingletonScope();
container.bind(command.Command).to(BukkitCommand).inSingletonScope();
container.bind(task.TaskManager).to(BukkitTaskManager).inSingletonScope();

console.debug(`Detect Bukkit Compatible set ServerType to ${BukkitServerType} ...`)
