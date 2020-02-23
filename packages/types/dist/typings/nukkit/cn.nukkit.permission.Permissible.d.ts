declare namespace cn {
    namespace nukkit {
        namespace permission {
            // @ts-ignore
            interface Permissible extends cn.nukkit.permission.ServerOperator {
                // @ts-ignore
                 isPermissionSet(name: string): boolean;
                // @ts-ignore
                 isPermissionSet(permission: cn.nukkit.permission.Permission): boolean;
                // @ts-ignore
                 hasPermission(name: string): boolean;
                // @ts-ignore
                 hasPermission(permission: cn.nukkit.permission.Permission): boolean;
                // @ts-ignore
                 addAttachment(plugin: cn.nukkit.plugin.Plugin): cn.nukkit.permission.PermissionAttachment;
                // @ts-ignore
                 addAttachment(plugin: cn.nukkit.plugin.Plugin, name: string): cn.nukkit.permission.PermissionAttachment;
                // @ts-ignore
                 addAttachment(plugin: cn.nukkit.plugin.Plugin, name: string, value: java.lang.Boolean): cn.nukkit.permission.PermissionAttachment;
                // @ts-ignore
                 removeAttachment(attachment: cn.nukkit.permission.PermissionAttachment): void;
                // @ts-ignore
                 recalculatePermissions(): void;
                // @ts-ignore
                 getEffectivePermissions(): java.util.Map;
            }
        }
    }
}
