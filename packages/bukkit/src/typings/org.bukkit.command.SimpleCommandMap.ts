declare namespace org {
    namespace bukkit {
        namespace command {
            class SimpleCommandMap {
                constructor(server: org.bukkit.Server)
                protected knownCommands: Map<any, any> /*java.util.Map*/;
                public setFallbackCommands(): void;
                /**
                 * {@inheritDoc}
                 */
                public registerAll(fallbackPrefix: string, commands: any[] /*java.util.List*/): void;
                /**
                 * {@inheritDoc}
                 */
                public register(fallbackPrefix: string, command: org.bukkit.command.Command): boolean;
                /**
                 * {@inheritDoc}
                 */
                public register(label: string, fallbackPrefix: string, command: org.bukkit.command.Command): boolean;
                /**
                 * {@inheritDoc}
                 */
                public dispatch(sender: org.bukkit.command.CommandSender, commandLine: string): boolean;
                public clearCommands(): void;
                public getCommand(name: string): org.bukkit.command.Command;
                public tabComplete(sender: org.bukkit.command.CommandSender, cmdLine: string): any[] /*java.util.List*/;
                public tabComplete(sender: org.bukkit.command.CommandSender, cmdLine: string, location: org.bukkit.Location): any[] /*java.util.List*/;
                public getCommands(): any[] /*java.util.Collection*/;
                public registerServerAliases(): void;
            }
        }
    }
}
