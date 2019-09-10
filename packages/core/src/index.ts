import '@ms/nashorn'

import { plugin, server } from '@ms/api'
import { DefaultContainer as container } from '@ms/container'
import { PluginManagerImpl } from '@ms/plugin'

try {
    Java.type("org.bukkit.Bukkit");
    require('@ms/bukkit');
} catch (ex) {
}

try {
    Java.type("org.spongepowered.api.Sponge");
    require('@ms/sponge');
} catch (ex) {
}

let Console = container.get(server.Console);
//@ts-ignore
global.console = new Console();

container.bind(plugin.PluginManager).to(PluginManagerImpl).inSingletonScope();

let manager = container.get<plugin.PluginManager>(plugin.PluginManager);
manager.scan('plugins');
manager.load(container);
manager.enable();
