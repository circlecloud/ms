declare namespace cn {
    namespace nukkit {
        namespace command {
            namespace simple {
                // @ts-ignore
                 class SimpleCommand extends cn.nukkit.command.Command {
                    // @ts-ignore
                    constructor(object: java.lang.Object, method: java.lang.reflect.Method, name: string, description: string, usageMessage: string, aliases: string)
                    // @ts-ignore
                    public setForbidConsole(forbidConsole: boolean): void;
                    // @ts-ignore
                    public setMaxArgs(maxArgs: number): void;
                    // @ts-ignore
                    public setMinArgs(minArgs: number): void;
                    // @ts-ignore
                    public sendUsageMessage(sender: cn.nukkit.command.CommandSender): void;
                    // @ts-ignore
                    public sendInGameMessage(sender: cn.nukkit.command.CommandSender): void;
                    // @ts-ignore
                    public execute(sender: cn.nukkit.command.CommandSender, commandLabel: string, args: string): boolean;
                }
            }
        }
    }
}
