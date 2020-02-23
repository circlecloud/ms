declare namespace cn {
    namespace nukkit {
        namespace command {
            // @ts-ignore
             class SimpleCommandMap extends java.lang.Object implements cn.nukkit.command.CommandMap {
                // @ts-ignore
                constructor(server: cn.nukkit.Server)
                // @ts-ignore
                protected knownCommands: java.util.Map;
                // @ts-ignore
                public registerAll(fallbackPrefix: string, commands: java.util.List): void;
                // @ts-ignore
                public register(fallbackPrefix: string, command: cn.nukkit.command.Command): boolean;
                // @ts-ignore
                public register(fallbackPrefix: string, command: cn.nukkit.command.Command, label: string): boolean;
                // @ts-ignore
                public registerSimpleCommands(object: java.lang.Object): void;
                // @ts-ignore
                public dispatch(sender: cn.nukkit.command.CommandSender, cmdLine: string): boolean;
                // @ts-ignore
                public clearCommands(): void;
                // @ts-ignore
                public getCommand(name: string): cn.nukkit.command.Command;
                // @ts-ignore
                public getCommands(): java.util.Map;
                // @ts-ignore
                public registerServerAliases(): void;
            }
        }
    }
}
