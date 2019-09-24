declare namespace org {
    namespace bukkit {
        namespace permissions {
            // @ts-ignore
             class PermissibleBase implements org.bukkit.permissions.Permissible {
                constructor(opable: org.bukkit.permissions.ServerOperator)
                public isOp(): boolean;
                public setOp(value: boolean): void;
                public isPermissionSet(name: string): boolean;
                public isPermissionSet(perm: org.bukkit.permissions.Permission): boolean;
                public hasPermission(inName: string): boolean;
                public hasPermission(perm: org.bukkit.permissions.Permission): boolean;
                public addAttachment(plugin: org.bukkit.plugin.Plugin, name: string, value: boolean): org.bukkit.permissions.PermissionAttachment;
                public addAttachment(plugin: org.bukkit.plugin.Plugin): org.bukkit.permissions.PermissionAttachment;
                public removeAttachment(attachment: org.bukkit.permissions.PermissionAttachment): void;
                public recalculatePermissions(): void;
                public clearPermissions(): void;
                public addAttachment(plugin: org.bukkit.plugin.Plugin, name: string, value: boolean, ticks: number): org.bukkit.permissions.PermissionAttachment;
                public addAttachment(plugin: org.bukkit.plugin.Plugin, ticks: number): org.bukkit.permissions.PermissionAttachment;
                public getEffectivePermissions(): any[] /*java.util.Set*/;
            }
        }
    }
}
