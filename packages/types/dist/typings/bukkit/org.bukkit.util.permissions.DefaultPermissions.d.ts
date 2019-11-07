declare namespace org {
    namespace bukkit {
        namespace util {
            namespace permissions {
                // @ts-ignore
                 class DefaultPermissions extends java.lang.Object {
                    // @ts-ignore
                    public static registerPermission(perm: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission;
                    // @ts-ignore
                    public static registerPermission(perm: org.bukkit.permissions.Permission, withLegacy: boolean): org.bukkit.permissions.Permission;
                    // @ts-ignore
                    public static registerPermission(perm: org.bukkit.permissions.Permission, parent: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission;
                    // @ts-ignore
                    public static registerPermission(name: string, desc: string): org.bukkit.permissions.Permission;
                    // @ts-ignore
                    public static registerPermission(name: string, desc: string, parent: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission;
                    // @ts-ignore
                    public static registerPermission(name: string, desc: string, def: org.bukkit.permissions.PermissionDefault): org.bukkit.permissions.Permission;
                    // @ts-ignore
                    public static registerPermission(name: string, desc: string, def: org.bukkit.permissions.PermissionDefault, parent: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission;
                    // @ts-ignore
                    public static registerPermission(name: string, desc: string, def: org.bukkit.permissions.PermissionDefault, children: java.util.Map): org.bukkit.permissions.Permission;
                    // @ts-ignore
                    public static registerPermission(name: string, desc: string, def: org.bukkit.permissions.PermissionDefault, children: java.util.Map, parent: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission;
                    // @ts-ignore
                    public static registerCorePermissions(): void;
                }
            }
        }
    }
}
