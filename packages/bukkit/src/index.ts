import { server, plugin } from '@ms/api'
import { DefaultContainer as container } from '@ms/container'

import { BukkitConsole } from './console'

let BukkitServerType = 'bukkit';
let Bukkit = Java.type("org.bukkit.Bukkit");

container.bind(server.Console).toConstantValue(BukkitConsole);
container.bind(server.ServerType).toConstantValue(BukkitServerType);
container.bind(plugin.PluginInstance).toConstantValue(Bukkit.pluginManager.getPlugin('MiaoScript'));
