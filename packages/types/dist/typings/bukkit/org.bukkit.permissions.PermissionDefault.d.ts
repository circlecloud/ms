declare namespace org {
    namespace bukkit {
        namespace permissions {
            // @ts-ignore
             class PermissionDefault extends java.lang.Enum {
                // @ts-ignore
                public static TRUE: org.bukkit.permissions.PermissionDefault;
                // @ts-ignore
                public static FALSE: org.bukkit.permissions.PermissionDefault;
                // @ts-ignore
                public static OP: org.bukkit.permissions.PermissionDefault;
                // @ts-ignore
                public static NOT_OP: org.bukkit.permissions.PermissionDefault;
                // @ts-ignore
                public static values(): org.bukkit.permissions.PermissionDefault[];
                // @ts-ignore
                public static valueOf(name: string): org.bukkit.permissions.PermissionDefault;
                /**
                 * Calculates the value of this PermissionDefault for the given operator
                 * value
                 */
                // @ts-ignore
                public getValue(op: boolean): boolean;
                /**
                 * Looks up a PermissionDefault by name
                 */
                // @ts-ignore
                public static getByName(name: string): org.bukkit.permissions.PermissionDefault;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
