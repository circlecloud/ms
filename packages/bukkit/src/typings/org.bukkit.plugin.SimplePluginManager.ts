declare namespace org {
    namespace bukkit {
        namespace plugin {
            class SimplePluginManager {
                constructor(instance: org.bukkit.Server, commandMap: org.bukkit.command.SimpleCommandMap)
                /**
                 * Registers the specified plugin loader
                 */
                public registerInterface(loader: any): void;
                /**
                 * Loads the plugins contained within the specified directory
                 */
                public loadPlugins(directory: any): org.bukkit.plugin.Plugin[];
                /**
                 * Loads the plugin in the specified file
                 * <p>
                 * File must be valid according to the current enabled Plugin interfaces
                 */
                public loadPlugin(file: any): org.bukkit.plugin.Plugin;
                /**
                 * Checks if the given plugin is loaded and returns it when applicable
                 * <p>
                 * Please note that the name of the plugin is case-sensitive
                 */
                public getPlugin(name: string): org.bukkit.plugin.Plugin;
                public getPlugins(): org.bukkit.plugin.Plugin[];
                /**
                 * Checks if the given plugin is enabled or not
                 * <p>
                 * Please note that the name of the plugin is case-sensitive.
                 */
                public isPluginEnabled(name: string): boolean;
                /**
                 * Checks if the given plugin is enabled or not
                 */
                public isPluginEnabled(plugin: org.bukkit.plugin.Plugin): boolean;
                public enablePlugin(plugin: org.bukkit.plugin.Plugin): void;
                public disablePlugins(): void;
                public disablePlugin(plugin: org.bukkit.plugin.Plugin): void;
                public clearPlugins(): void;
                /**
                 * Calls an event with the given details.
                 * <p>
                 * This method only synchronizes when the event is not asynchronous.
                 */
                public callEvent(event: org.bukkit.event.Event): void;
                public registerEvents(listener: org.bukkit.event.Listener, plugin: org.bukkit.plugin.Plugin): void;
                public registerEvent(event: any, listener: org.bukkit.event.Listener, priority: org.bukkit.event.EventPriority, executor: org.bukkit.plugin.EventExecutor, plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Registers the given event to the specified listener using a directly
                 * passed EventExecutor
                 */
                public registerEvent(event: any, listener: org.bukkit.event.Listener, priority: org.bukkit.event.EventPriority, executor: org.bukkit.plugin.EventExecutor, plugin: org.bukkit.plugin.Plugin, ignoreCancelled: boolean): void;
                public getPermission(name: string): org.bukkit.permissions.Permission;
                public addPermission(perm: org.bukkit.permissions.Permission): void;
                public addPermission(perm: org.bukkit.permissions.Permission, dirty: boolean): void;
                public getDefaultPermissions(op: boolean): any[] /*java.util.Set*/;
                public removePermission(perm: org.bukkit.permissions.Permission): void;
                public removePermission(name: string): void;
                public recalculatePermissionDefaults(perm: org.bukkit.permissions.Permission): void;
                public dirtyPermissibles(): void;
                public subscribeToPermission(permission: string, permissible: org.bukkit.permissions.Permissible): void;
                public unsubscribeFromPermission(permission: string, permissible: org.bukkit.permissions.Permissible): void;
                public getPermissionSubscriptions(permission: string): any[] /*java.util.Set*/;
                public subscribeToDefaultPerms(op: boolean, permissible: org.bukkit.permissions.Permissible): void;
                public unsubscribeFromDefaultPerms(op: boolean, permissible: org.bukkit.permissions.Permissible): void;
                public getDefaultPermSubscriptions(op: boolean): any[] /*java.util.Set*/;
                public getPermissions(): any[] /*java.util.Set*/;
                public useTimings(): boolean;
                /**
                 * Sets whether or not per event timing code should be used
                 */
                public useTimings(use: boolean): void;
            }
        }
    }
}
