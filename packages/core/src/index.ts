import '@ms/nashorn'

import { plugin, server, MiaoScriptConsole } from '@ms/api'
import { DefaultContainer as container } from '@ms/container'
import { PluginManagerImpl } from '@ms/plugin'

import '@ms/bukkit'

let Console: MiaoScriptConsole = container.get(server.Console);
global.console = new Console();

container.bind(plugin.PluginManager).to(PluginManagerImpl).inSingletonScope();

let manager = container.get<plugin.PluginManager>(plugin.PluginManager);
manager.scan('plugins');
manager.load(container);
manager.enable();
