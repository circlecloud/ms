declare namespace cn {
    namespace nukkit {
        namespace command {
            // @ts-ignore
            interface CommandMap {
                // @ts-ignore
                 registerAll(fallbackPrefix: string, commands: java.util.List): void;
                // @ts-ignore
                 register(fallbackPrefix: string, command: cn.nukkit.command.Command): boolean;
                // @ts-ignore
                 register(fallbackPrefix: string, command: cn.nukkit.command.Command, label: string): boolean;
                // @ts-ignore
                 registerSimpleCommands(object: java.lang.Object): void;
                // @ts-ignore
                 dispatch(sender: cn.nukkit.command.CommandSender, cmdLine: string): boolean;
                // @ts-ignore
                 clearCommands(): void;
                // @ts-ignore
                 getCommand(name: string): cn.nukkit.command.Command;
            }
        }
    }
}
