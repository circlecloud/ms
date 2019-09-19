import './typings'

import { server, plugin, command, event } from '@ms/api'
import { DefaultContainer as container } from '@ms/container'

import { BukkitEvent } from './event';
import { BukkitConsole } from './console';
import { BukkitCommand } from './command';

let BukkitServerType = 'bukkit';
let Bukkit = Java.type("org.bukkit.Bukkit");

container.bind(server.Console).toConstantValue(BukkitConsole);
container.bind(server.ServerType).toConstantValue(BukkitServerType);
container.bind(plugin.PluginInstance).toConstantValue(Bukkit.pluginManager.getPlugin('MiaoScript'));

container.bind(event.Event).to(BukkitEvent).inSingletonScope();
container.bind(command.Command).to(BukkitCommand).inSingletonScope();

console.debug(`Detect Sponge Compatible set ServerType to ${BukkitServerType} ...`)
