declare namespace cn {
    namespace nukkit {
        namespace permission {
            // @ts-ignore
            abstract class DefaultPermissions extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static ROOT: string;
                // @ts-ignore
                public static registerPermission(perm: cn.nukkit.permission.Permission): cn.nukkit.permission.Permission;
                // @ts-ignore
                public static registerPermission(perm: cn.nukkit.permission.Permission, parent: cn.nukkit.permission.Permission): cn.nukkit.permission.Permission;
                // @ts-ignore
                public static registerCorePermissions(): void;
            }
        }
    }
}
