declare namespace cn {
    namespace nukkit {
        namespace command {
            // @ts-ignore
            abstract class Command extends java.lang.Object {
                // @ts-ignore
                constructor(name: string)
                // @ts-ignore
                constructor(name: string, description: string)
                // @ts-ignore
                constructor(name: string, description: string, usageMessage: string)
                // @ts-ignore
                constructor(name: string, description: string, usageMessage: string, aliases: string)
                // @ts-ignore
                protected commandData: cn.nukkit.command.data.CommandData;
                // @ts-ignore
                protected description: string;
                // @ts-ignore
                protected usageMessage: string;
                // @ts-ignore
                protected commandParameters: java.util.Map;
                // @ts-ignore
                public timing: any /*co.aikar.timings.Timing*/;
                /**
                 * Returns an CommandData containing command data
                 */
                // @ts-ignore
                public getDefaultCommandData(): cn.nukkit.command.data.CommandData;
                // @ts-ignore
                public getCommandParameters(key: string): cn.nukkit.command.data.CommandParameter[];
                // @ts-ignore
                public getCommandParameters(): java.util.Map;
                // @ts-ignore
                public setCommandParameters(commandParameters: java.util.Map): void;
                // @ts-ignore
                public addCommandParameters(key: string, parameters: cn.nukkit.command.data.CommandParameter): void;
                /**
                 * Generates modified command data for the specified player
                 * for AvailableCommandsPacket.
                 */
                // @ts-ignore
                public generateCustomCommandData(player: cn.nukkit.Player): cn.nukkit.command.data.CommandDataVersions;
                // @ts-ignore
                public getOverloads(): java.util.Map;
                // @ts-ignore
                public abstract execute(sender: cn.nukkit.command.CommandSender, commandLabel: string, args: string): boolean;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getPermission(): string;
                // @ts-ignore
                public setPermission(permission: string): void;
                // @ts-ignore
                public testPermission(target: cn.nukkit.command.CommandSender): boolean;
                // @ts-ignore
                public testPermissionSilent(target: cn.nukkit.command.CommandSender): boolean;
                // @ts-ignore
                public getLabel(): string;
                // @ts-ignore
                public setLabel(name: string): boolean;
                // @ts-ignore
                public register(commandMap: cn.nukkit.command.CommandMap): boolean;
                // @ts-ignore
                public unregister(commandMap: cn.nukkit.command.CommandMap): boolean;
                // @ts-ignore
                public allowChangesFrom(commandMap: cn.nukkit.command.CommandMap): boolean;
                // @ts-ignore
                public isRegistered(): boolean;
                // @ts-ignore
                public getAliases(): java.lang.String[];
                // @ts-ignore
                public getPermissionMessage(): string;
                // @ts-ignore
                public getDescription(): string;
                // @ts-ignore
                public getUsage(): string;
                // @ts-ignore
                public setAliases(aliases: string): void;
                // @ts-ignore
                public setDescription(description: string): void;
                // @ts-ignore
                public setPermissionMessage(permissionMessage: string): void;
                // @ts-ignore
                public setUsage(usageMessage: string): void;
                // @ts-ignore
                public static generateDefaultData(): cn.nukkit.command.data.CommandData;
                // @ts-ignore
                public static broadcastCommandMessage(source: cn.nukkit.command.CommandSender, message: string): void;
                // @ts-ignore
                public static broadcastCommandMessage(source: cn.nukkit.command.CommandSender, message: string, sendToSource: boolean): void;
                // @ts-ignore
                public static broadcastCommandMessage(source: cn.nukkit.command.CommandSender, message: cn.nukkit.lang.TextContainer): void;
                // @ts-ignore
                public static broadcastCommandMessage(source: cn.nukkit.command.CommandSender, message: cn.nukkit.lang.TextContainer, sendToSource: boolean): void;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
