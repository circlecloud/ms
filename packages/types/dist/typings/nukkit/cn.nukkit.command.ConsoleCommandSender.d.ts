declare namespace cn {
    namespace nukkit {
        namespace command {
            // @ts-ignore
             class ConsoleCommandSender extends java.lang.Object implements cn.nukkit.command.CommandSender {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public isPermissionSet(name: string): boolean;
                // @ts-ignore
                public isPermissionSet(permission: cn.nukkit.permission.Permission): boolean;
                // @ts-ignore
                public hasPermission(name: string): boolean;
                // @ts-ignore
                public hasPermission(permission: cn.nukkit.permission.Permission): boolean;
                // @ts-ignore
                public addAttachment(plugin: cn.nukkit.plugin.Plugin): cn.nukkit.permission.PermissionAttachment;
                // @ts-ignore
                public addAttachment(plugin: cn.nukkit.plugin.Plugin, name: string): cn.nukkit.permission.PermissionAttachment;
                // @ts-ignore
                public addAttachment(plugin: cn.nukkit.plugin.Plugin, name: string, value: java.lang.Boolean): cn.nukkit.permission.PermissionAttachment;
                // @ts-ignore
                public removeAttachment(attachment: cn.nukkit.permission.PermissionAttachment): void;
                // @ts-ignore
                public recalculatePermissions(): void;
                // @ts-ignore
                public getEffectivePermissions(): java.util.Map;
                // @ts-ignore
                public isPlayer(): boolean;
                // @ts-ignore
                public getServer(): cn.nukkit.Server;
                // @ts-ignore
                public sendMessage(message: string): void;
                // @ts-ignore
                public sendMessage(message: cn.nukkit.lang.TextContainer): void;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public isOp(): boolean;
                // @ts-ignore
                public setOp(value: boolean): void;
            }
        }
    }
}
