declare namespace org {
    namespace bukkit {
        namespace permissions {
            // @ts-ignore
             class PermissionDefault {
                public static TRUE: org.bukkit.permissions.PermissionDefault;
                public static FALSE: org.bukkit.permissions.PermissionDefault;
                public static OP: org.bukkit.permissions.PermissionDefault;
                public static NOT_OP: org.bukkit.permissions.PermissionDefault;
                public static values(): org.bukkit.permissions.PermissionDefault[];
                public static valueOf(name: string): org.bukkit.permissions.PermissionDefault;
                /**
                 * Calculates the value of this PermissionDefault for the given operator
                 * value
                 */
                public getValue(op: boolean): boolean;
                /**
                 * Looks up a PermissionDefault by name
                 */
                public static getByName(name: string): org.bukkit.permissions.PermissionDefault;
                public toString(): string;
            }
        }
    }
}
