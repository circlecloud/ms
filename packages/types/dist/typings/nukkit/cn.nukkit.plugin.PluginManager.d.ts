declare namespace cn {
    namespace nukkit {
        namespace plugin {
            // @ts-ignore
             class PluginManager extends java.lang.Object {
                // @ts-ignore
                constructor(server: cn.nukkit.Server, commandMap: cn.nukkit.command.SimpleCommandMap)
                // @ts-ignore
                protected plugins: java.util.Map;
                // @ts-ignore
                protected permissions: java.util.Map;
                // @ts-ignore
                protected defaultPerms: java.util.Map;
                // @ts-ignore
                protected defaultPermsOp: java.util.Map;
                // @ts-ignore
                protected permSubs: java.util.Map;
                // @ts-ignore
                protected defSubs: java.util.Set;
                // @ts-ignore
                protected defSubsOp: java.util.Set;
                // @ts-ignore
                protected fileAssociations: java.util.Map;
                // @ts-ignore
                public getPlugin(name: string): cn.nukkit.plugin.Plugin;
                // @ts-ignore
                public registerInterface(loaderClass: java.lang.Class): boolean;
                // @ts-ignore
                public getPlugins(): java.util.Map;
                // @ts-ignore
                public loadPlugin(path: string): cn.nukkit.plugin.Plugin;
                // @ts-ignore
                public loadPlugin(file: java.io.File): cn.nukkit.plugin.Plugin;
                // @ts-ignore
                public loadPlugin(path: string, loaders: java.util.Map): cn.nukkit.plugin.Plugin;
                // @ts-ignore
                public loadPlugin(file: java.io.File, loaders: java.util.Map): cn.nukkit.plugin.Plugin;
                // @ts-ignore
                public loadPlugins(dictionary: string): java.util.Map;
                // @ts-ignore
                public loadPlugins(dictionary: java.io.File): java.util.Map;
                // @ts-ignore
                public loadPlugins(dictionary: string, newLoaders: java.util.List): java.util.Map;
                // @ts-ignore
                public loadPlugins(dictionary: java.io.File, newLoaders: java.util.List): java.util.Map;
                // @ts-ignore
                public loadPlugins(dictionary: java.io.File, newLoaders: java.util.List, includeDir: boolean): java.util.Map;
                // @ts-ignore
                public getPermission(name: string): cn.nukkit.permission.Permission;
                // @ts-ignore
                public addPermission(permission: cn.nukkit.permission.Permission): boolean;
                // @ts-ignore
                public removePermission(name: string): void;
                // @ts-ignore
                public removePermission(permission: cn.nukkit.permission.Permission): void;
                // @ts-ignore
                public getDefaultPermissions(op: boolean): java.util.Map;
                // @ts-ignore
                public recalculatePermissionDefaults(permission: cn.nukkit.permission.Permission): void;
                // @ts-ignore
                public subscribeToPermission(permission: string, permissible: cn.nukkit.permission.Permissible): void;
                // @ts-ignore
                public unsubscribeFromPermission(permission: string, permissible: cn.nukkit.permission.Permissible): void;
                // @ts-ignore
                public getPermissionSubscriptions(permission: string): java.util.Set;
                // @ts-ignore
                public subscribeToDefaultPerms(op: boolean, permissible: cn.nukkit.permission.Permissible): void;
                // @ts-ignore
                public unsubscribeFromDefaultPerms(op: boolean, permissible: cn.nukkit.permission.Permissible): void;
                // @ts-ignore
                public getDefaultPermSubscriptions(op: boolean): java.util.Set;
                // @ts-ignore
                public getPermissions(): java.util.Map;
                // @ts-ignore
                public isPluginEnabled(plugin: cn.nukkit.plugin.Plugin): boolean;
                // @ts-ignore
                public enablePlugin(plugin: cn.nukkit.plugin.Plugin): void;
                // @ts-ignore
                protected parseYamlCommands(plugin: cn.nukkit.plugin.Plugin): java.util.List;
                // @ts-ignore
                public disablePlugins(): void;
                // @ts-ignore
                public disablePlugin(plugin: cn.nukkit.plugin.Plugin): void;
                // @ts-ignore
                public clearPlugins(): void;
                // @ts-ignore
                public callEvent(event: cn.nukkit.event.Event): void;
                // @ts-ignore
                public registerEvents(listener: cn.nukkit.event.Listener, plugin: cn.nukkit.plugin.Plugin): void;
                // @ts-ignore
                public registerEvent(event: java.lang.Class, listener: cn.nukkit.event.Listener, priority: cn.nukkit.event.EventPriority, executor: cn.nukkit.plugin.EventExecutor, plugin: cn.nukkit.plugin.Plugin): void;
                // @ts-ignore
                public registerEvent(event: java.lang.Class, listener: cn.nukkit.event.Listener, priority: cn.nukkit.event.EventPriority, executor: cn.nukkit.plugin.EventExecutor, plugin: cn.nukkit.plugin.Plugin, ignoreCancelled: boolean): void;
            }
        }
    }
}
