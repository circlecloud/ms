// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace plugin {
            // @ts-ignore
             class SimplePluginManager extends java.lang.Object implements org.bukkit.plugin.PluginManager {
                // @ts-ignore
                constructor(instance: org.bukkit.Server, commandMap: org.bukkit.command.SimpleCommandMap)
                /**
                 * Registers the specified plugin loader
                 */
                // @ts-ignore
                public registerInterface(loader: java.lang.Class): void;
                /**
                 * Loads the plugins contained within the specified directory
                 */
                // @ts-ignore
                public loadPlugins(directory: java.io.File): org.bukkit.plugin.Plugin[];
                /**
                 * Loads the plugin in the specified file
                 * <p>
                 * File must be valid according to the current enabled Plugin interfaces
                 */
                // @ts-ignore
                public loadPlugin(file: java.io.File): org.bukkit.plugin.Plugin;
                /**
                 * Checks if the given plugin is loaded and returns it when applicable
                 * <p>
                 * Please note that the name of the plugin is case-sensitive
                 */
                // @ts-ignore
                public getPlugin(name: string): org.bukkit.plugin.Plugin;
                // @ts-ignore
                public getPlugins(): org.bukkit.plugin.Plugin[];
                /**
                 * Checks if the given plugin is enabled or not
                 * <p>
                 * Please note that the name of the plugin is case-sensitive.
                 */
                // @ts-ignore
                public isPluginEnabled(name: string): boolean;
                /**
                 * Checks if the given plugin is enabled or not
                 */
                // @ts-ignore
                public isPluginEnabled(plugin: org.bukkit.plugin.Plugin): boolean;
                // @ts-ignore
                public enablePlugin(plugin: org.bukkit.plugin.Plugin): void;
                // @ts-ignore
                public disablePlugins(): void;
                // @ts-ignore
                public disablePlugin(plugin: org.bukkit.plugin.Plugin): void;
                // @ts-ignore
                public clearPlugins(): void;
                /**
                 * Calls an event with the given details.
                 * <p>
                 * This method only synchronizes when the event is not asynchronous.
                 */
                // @ts-ignore
                public callEvent(event: org.bukkit.event.Event): void;
                // @ts-ignore
                public registerEvents(listener: org.bukkit.event.Listener, plugin: org.bukkit.plugin.Plugin): void;
                // @ts-ignore
                public registerEvent(event: java.lang.Class, listener: org.bukkit.event.Listener, priority: org.bukkit.event.EventPriority, executor: org.bukkit.plugin.EventExecutor, plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Registers the given event to the specified listener using a directly
                 * passed EventExecutor
                 */
                // @ts-ignore
                public registerEvent(event: java.lang.Class, listener: org.bukkit.event.Listener, priority: org.bukkit.event.EventPriority, executor: org.bukkit.plugin.EventExecutor, plugin: org.bukkit.plugin.Plugin, ignoreCancelled: boolean): void;
                // @ts-ignore
                public getPermission(name: string): org.bukkit.permissions.Permission;
                // @ts-ignore
                public addPermission(perm: org.bukkit.permissions.Permission): void;
                // @ts-ignore
                public addPermission(perm: org.bukkit.permissions.Permission, dirty: boolean): void;
                // @ts-ignore
                public getDefaultPermissions(op: boolean): java.util.Set;
                // @ts-ignore
                public removePermission(perm: org.bukkit.permissions.Permission): void;
                // @ts-ignore
                public removePermission(name: string): void;
                // @ts-ignore
                public recalculatePermissionDefaults(perm: org.bukkit.permissions.Permission): void;
                // @ts-ignore
                public dirtyPermissibles(): void;
                // @ts-ignore
                public subscribeToPermission(permission: string, permissible: org.bukkit.permissions.Permissible): void;
                // @ts-ignore
                public unsubscribeFromPermission(permission: string, permissible: org.bukkit.permissions.Permissible): void;
                // @ts-ignore
                public getPermissionSubscriptions(permission: string): java.util.Set;
                // @ts-ignore
                public subscribeToDefaultPerms(op: boolean, permissible: org.bukkit.permissions.Permissible): void;
                // @ts-ignore
                public unsubscribeFromDefaultPerms(op: boolean, permissible: org.bukkit.permissions.Permissible): void;
                // @ts-ignore
                public getDefaultPermSubscriptions(op: boolean): java.util.Set;
                // @ts-ignore
                public getPermissions(): java.util.Set;
                // @ts-ignore
                public useTimings(): boolean;
                /**
                 * Sets whether or not per event timing code should be used
                 */
                // @ts-ignore
                public useTimings(use: boolean): void;
            }
        }
    }
}
