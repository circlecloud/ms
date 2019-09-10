import { server, plugin } from '@ms/api'
import { DefaultContainer as container } from '@ms/container'

import { SpongeConsole } from './console'

let SpongeServerType = 'sponge';
let Sponge = Java.type("org.spongepowered.api.Sponge");

console.debug(`Detect Sponge Compatible set ServerType to ${SpongeServerType} ...`)

container.bind(server.Console).toConstantValue(SpongeConsole);
container.bind(server.ServerType).toConstantValue(SpongeServerType);
container.bind(plugin.PluginInstance).toConstantValue(Sponge.pluginManager.getPlugin('MiaoScript').orElse(null));
