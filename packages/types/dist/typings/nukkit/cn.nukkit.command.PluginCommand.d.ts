declare namespace cn {
    namespace nukkit {
        namespace command {
            // @ts-ignore
             class PluginCommand extends cn.nukkit.command.Command implements cn.nukkit.command.PluginIdentifiableCommand {
                // @ts-ignore
                constructor(name: string, owner: cn.nukkit.plugin.Plugin)
                // @ts-ignore
                public execute(sender: cn.nukkit.command.CommandSender, commandLabel: string, args: string): boolean;
                // @ts-ignore
                public getExecutor(): cn.nukkit.command.CommandExecutor;
                // @ts-ignore
                public setExecutor(executor: cn.nukkit.command.CommandExecutor): void;
                // @ts-ignore
                public getPlugin(): cn.nukkit.plugin.Plugin;
            }
        }
    }
}
