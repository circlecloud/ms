declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
             class SimpleCommandMap extends java.lang.Object implements org.bukkit.command.CommandMap {
                // @ts-ignore
                constructor(server: org.bukkit.Server)
                // @ts-ignore
                protected knownCommands: java.util.Map;
                // @ts-ignore
                public setFallbackCommands(): void;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public registerAll(fallbackPrefix: string, commands: java.util.List): void;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public register(fallbackPrefix: string, command: org.bukkit.command.Command): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public register(label: string, fallbackPrefix: string, command: org.bukkit.command.Command): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public dispatch(sender: org.bukkit.command.CommandSender, commandLine: string): boolean;
                // @ts-ignore
                public clearCommands(): void;
                // @ts-ignore
                public getCommand(name: string): org.bukkit.command.Command;
                // @ts-ignore
                public tabComplete(sender: org.bukkit.command.CommandSender, cmdLine: string): java.util.List;
                // @ts-ignore
                public tabComplete(sender: org.bukkit.command.CommandSender, cmdLine: string, location: org.bukkit.Location): java.util.List;
                // @ts-ignore
                public getCommands(): java.util.Collection;
                // @ts-ignore
                public registerServerAliases(): void;
            }
        }
    }
}
