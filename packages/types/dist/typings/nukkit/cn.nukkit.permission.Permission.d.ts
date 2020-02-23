declare namespace cn {
    namespace nukkit {
        namespace permission {
            // @ts-ignore
             class Permission extends java.lang.Object {
                // @ts-ignore
                constructor(name: string)
                // @ts-ignore
                constructor(name: string, description: string)
                // @ts-ignore
                constructor(name: string, description: string, defualtValue: string)
                // @ts-ignore
                constructor(name: string, description: string, defualtValue: string, children: java.util.Map)
                // @ts-ignore
                public static DEFAULT_OP: string;
                // @ts-ignore
                public static DEFAULT_NOT_OP: string;
                // @ts-ignore
                public static DEFAULT_TRUE: string;
                // @ts-ignore
                public static DEFAULT_FALSE: string;
                // @ts-ignore
                public static DEFAULT_PERMISSION: string;
                // @ts-ignore
                public static getByName(value: string): string;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getChildren(): java.util.Map;
                // @ts-ignore
                public getDefault(): string;
                // @ts-ignore
                public setDefault(value: string): void;
                // @ts-ignore
                public getDescription(): string;
                // @ts-ignore
                public setDescription(description: string): void;
                // @ts-ignore
                public getPermissibles(): java.util.Set;
                // @ts-ignore
                public recalculatePermissibles(): void;
                // @ts-ignore
                public addParent(permission: cn.nukkit.permission.Permission, value: boolean): void;
                // @ts-ignore
                public addParent(name: string, value: boolean): cn.nukkit.permission.Permission;
                // @ts-ignore
                public static loadPermissions(data: java.util.Map): java.util.List;
                // @ts-ignore
                public static loadPermissions(data: java.util.Map, defaultValue: string): java.util.List;
                // @ts-ignore
                public static loadPermission(name: string, data: java.util.Map): cn.nukkit.permission.Permission;
                // @ts-ignore
                public static loadPermission(name: string, data: java.util.Map, defaultValue: string): cn.nukkit.permission.Permission;
                // @ts-ignore
                public static loadPermission(name: string, data: java.util.Map, defaultValue: string, output: java.util.List): cn.nukkit.permission.Permission;
            }
        }
    }
}
