declare namespace org {
    namespace bukkit {
        namespace util {
            namespace permissions {
                class DefaultPermissions {
                    public static registerPermission(perm: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission;
                    public static registerPermission(perm: org.bukkit.permissions.Permission, withLegacy: boolean): org.bukkit.permissions.Permission;
                    public static registerPermission(perm: org.bukkit.permissions.Permission, parent: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission;
                    public static registerPermission(name: string, desc: string): org.bukkit.permissions.Permission;
                    public static registerPermission(name: string, desc: string, parent: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission;
                    public static registerPermission(name: string, desc: string, def: org.bukkit.permissions.PermissionDefault): org.bukkit.permissions.Permission;
                    public static registerPermission(name: string, desc: string, def: org.bukkit.permissions.PermissionDefault, parent: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission;
                    public static registerPermission(name: string, desc: string, def: org.bukkit.permissions.PermissionDefault, children: Map<any, any> /*java.util.Map*/): org.bukkit.permissions.Permission;
                    public static registerPermission(name: string, desc: string, def: org.bukkit.permissions.PermissionDefault, children: Map<any, any> /*java.util.Map*/, parent: org.bukkit.permissions.Permission): org.bukkit.permissions.Permission;
                    public static registerCorePermissions(): void;
                }
            }
        }
    }
}
