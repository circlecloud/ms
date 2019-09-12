declare namespace org {
    namespace bukkit {
        namespace plugin {
            class PluginManager {
                /**
                 * Registers the specified plugin loader
                 */
                public registerInterface(loader: any): void;
                /**
                 * Checks if the given plugin is loaded and returns it when applicable
                 * <p>
                 * Please note that the name of the plugin is case-sensitive
                 */
                public getPlugin(name: string): org.bukkit.plugin.Plugin;
                /**
                 * Gets a list of all currently loaded plugins
                 */
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
                /**
                 * Loads the plugin in the specified file
                 * <p>
                 * File must be valid according to the current enabled Plugin interfaces
                 */
                public loadPlugin(file: any): org.bukkit.plugin.Plugin;
                /**
                 * Loads the plugins contained within the specified directory
                 */
                public loadPlugins(directory: any): org.bukkit.plugin.Plugin[];
                /**
                 * Disables all the loaded plugins
                 */
                public disablePlugins(): void;
                /**
                 * Disables and removes all plugins
                 */
                public clearPlugins(): void;
                /**
                 * Calls an event with the given details
                 */
                public callEvent(event: org.bukkit.event.Event): void;
                /**
                 * Registers all the events in the given listener class
                 */
                public registerEvents(listener: org.bukkit.event.Listener, plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Registers the specified executor to the given event class
                 */
                public registerEvent(event: any, listener: org.bukkit.event.Listener, priority: org.bukkit.event.EventPriority, executor: org.bukkit.plugin.EventExecutor, plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Registers the specified executor to the given event class
                 */
                public registerEvent(event: any, listener: org.bukkit.event.Listener, priority: org.bukkit.event.EventPriority, executor: org.bukkit.plugin.EventExecutor, plugin: org.bukkit.plugin.Plugin, ignoreCancelled: boolean): void;
                /**
                 * Enables the specified plugin
                 * <p>
                 * Attempting to enable a plugin that is already enabled will have no
                 * effect
                 */
                public enablePlugin(plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Disables the specified plugin
                 * <p>
                 * Attempting to disable a plugin that is not enabled will have no effect
                 */
                public disablePlugin(plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Gets a {@link Permission} from its fully qualified name
                 */
                public getPermission(name: string): org.bukkit.permissions.Permission;
                /**
                 * Adds a {@link Permission} to this plugin manager.
                 * <p>
                 * If a permission is already defined with the given name of the new
                 * permission, an exception will be thrown.
                 */
                public addPermission(perm: org.bukkit.permissions.Permission): void;
                /**
                 * Removes a {@link Permission} registration from this plugin manager.
                 * <p>
                 * If the specified permission does not exist in this plugin manager,
                 * nothing will happen.
                 * <p>
                 * Removing a permission registration will <b>not</b> remove the
                 * permission from any {@link Permissible}s that have it.
                 */
                public removePermission(perm: org.bukkit.permissions.Permission): void;
                /**
                 * Removes a {@link Permission} registration from this plugin manager.
                 * <p>
                 * If the specified permission does not exist in this plugin manager,
                 * nothing will happen.
                 * <p>
                 * Removing a permission registration will <b>not</b> remove the
                 * permission from any {@link Permissible}s that have it.
                 */
                public removePermission(name: string): void;
                /**
                 * Gets the default permissions for the given op status
                 */
                public getDefaultPermissions(op: boolean): any[] /*java.util.Set*/;
                /**
                 * Recalculates the defaults for the given {@link Permission}.
                 * <p>
                 * This will have no effect if the specified permission is not registered
                 * here.
                 */
                public recalculatePermissionDefaults(perm: org.bukkit.permissions.Permission): void;
                /**
                 * Subscribes the given Permissible for information about the requested
                 * Permission, by name.
                 * <p>
                 * If the specified Permission changes in any form, the Permissible will
                 * be asked to recalculate.
                 */
                public subscribeToPermission(permission: string, permissible: org.bukkit.permissions.Permissible): void;
                /**
                 * Unsubscribes the given Permissible for information about the requested
                 * Permission, by name.
                 */
                public unsubscribeFromPermission(permission: string, permissible: org.bukkit.permissions.Permissible): void;
                /**
                 * Gets a set containing all subscribed {@link Permissible}s to the given
                 * permission, by name
                 */
                public getPermissionSubscriptions(permission: string): any[] /*java.util.Set*/;
                /**
                 * Subscribes to the given Default permissions by operator status
                 * <p>
                 * If the specified defaults change in any form, the Permissible will be
                 * asked to recalculate.
                 */
                public subscribeToDefaultPerms(op: boolean, permissible: org.bukkit.permissions.Permissible): void;
                /**
                 * Unsubscribes from the given Default permissions by operator status
                 */
                public unsubscribeFromDefaultPerms(op: boolean, permissible: org.bukkit.permissions.Permissible): void;
                /**
                 * Gets a set containing all subscribed {@link Permissible}s to the given
                 * default list, by op status
                 */
                public getDefaultPermSubscriptions(op: boolean): any[] /*java.util.Set*/;
                /**
                 * Gets a set of all registered permissions.
                 * <p>
                 * This set is a copy and will not be modified live.
                 */
                public getPermissions(): any[] /*java.util.Set*/;
                /**
                 * Returns whether or not timing code should be used for event calls
                 */
                public useTimings(): boolean;
            }
        }
    }
}
