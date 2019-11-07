declare namespace org {
    namespace bukkit {
        namespace permissions {
            // @ts-ignore
             class PermissibleBase extends java.lang.Object implements org.bukkit.permissions.Permissible {
                // @ts-ignore
                constructor(opable: org.bukkit.permissions.ServerOperator)
                // @ts-ignore
                public isOp(): boolean;
                // @ts-ignore
                public setOp(value: boolean): void;
                // @ts-ignore
                public isPermissionSet(name: string): boolean;
                // @ts-ignore
                public isPermissionSet(perm: org.bukkit.permissions.Permission): boolean;
                // @ts-ignore
                public hasPermission(inName: string): boolean;
                // @ts-ignore
                public hasPermission(perm: org.bukkit.permissions.Permission): boolean;
                // @ts-ignore
                public addAttachment(plugin: org.bukkit.plugin.Plugin, name: string, value: boolean): org.bukkit.permissions.PermissionAttachment;
                // @ts-ignore
                public addAttachment(plugin: org.bukkit.plugin.Plugin): org.bukkit.permissions.PermissionAttachment;
                // @ts-ignore
                public removeAttachment(attachment: org.bukkit.permissions.PermissionAttachment): void;
                // @ts-ignore
                public recalculatePermissions(): void;
                // @ts-ignore
                public clearPermissions(): void;
                // @ts-ignore
                public addAttachment(plugin: org.bukkit.plugin.Plugin, name: string, value: boolean, ticks: number): org.bukkit.permissions.PermissionAttachment;
                // @ts-ignore
                public addAttachment(plugin: org.bukkit.plugin.Plugin, ticks: number): org.bukkit.permissions.PermissionAttachment;
                // @ts-ignore
                public getEffectivePermissions(): java.util.Set;
            }
        }
    }
}
