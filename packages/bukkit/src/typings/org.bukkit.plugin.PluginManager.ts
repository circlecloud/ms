declare namespace org {
    namespace bukkit {
        namespace plugin {
            // @ts-ignore
            interface PluginManager {
                /**
                 * Registers the specified plugin loader
                 */
                 registerInterface(loader: any): void;
                /**
                 * Checks if the given plugin is loaded and returns it when applicable
                 * <p>
                 * Please note that the name of the plugin is case-sensitive
                 */
                 getPlugin(name: string): org.bukkit.plugin.Plugin;
                /**
                 * Gets a list of all currently loaded plugins
                 */
                 getPlugins(): org.bukkit.plugin.Plugin[];
                /**
                 * Checks if the given plugin is enabled or not
                 * <p>
                 * Please note that the name of the plugin is case-sensitive.
                 */
                 isPluginEnabled(name: string): boolean;
                /**
                 * Checks if the given plugin is enabled or not
                 */
                 isPluginEnabled(plugin: org.bukkit.plugin.Plugin): boolean;
                /**
                 * Loads the plugin in the specified file
                 * <p>
                 * File must be valid according to the current enabled Plugin interfaces
                 */
                 loadPlugin(file: any): org.bukkit.plugin.Plugin;
                /**
                 * Loads the plugins contained within the specified directory
                 */
                 loadPlugins(directory: any): org.bukkit.plugin.Plugin[];
                /**
                 * Disables all the loaded plugins
                 */
                 disablePlugins(): void;
                /**
                 * Disables and removes all plugins
                 */
                 clearPlugins(): void;
                /**
                 * Calls an event with the given details
                 */
                 callEvent(event: org.bukkit.event.Event): void;
                /**
                 * Registers all the events in the given listener class
                 */
                 registerEvents(listener: org.bukkit.event.Listener, plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Registers the specified executor to the given event class
                 */
                 registerEvent(event: any, listener: org.bukkit.event.Listener, priority: org.bukkit.event.EventPriority, executor: org.bukkit.plugin.EventExecutor, plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Registers the specified executor to the given event class
                 */
                 registerEvent(event: any, listener: org.bukkit.event.Listener, priority: org.bukkit.event.EventPriority, executor: org.bukkit.plugin.EventExecutor, plugin: org.bukkit.plugin.Plugin, ignoreCancelled: boolean): void;
                /**
                 * Enables the specified plugin
                 * <p>
                 * Attempting to enable a plugin that is already enabled will have no
                 * effect
                 */
                 enablePlugin(plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Disables the specified plugin
                 * <p>
                 * Attempting to disable a plugin that is not enabled will have no effect
                 */
                 disablePlugin(plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Gets a {@link Permission} from its fully qualified name
                 */
                 getPermission(name: string): org.bukkit.permissions.Permission;
                /**
                 * Adds a {@link Permission} to this plugin manager.
                 * <p>
                 * If a permission is already defined with the given name of the new
                 * permission, an exception will be thrown.
                 */
                 addPermission(perm: org.bukkit.permissions.Permission): void;
                /**
                 * Removes a {@link Permission} registration from this plugin manager.
                 * <p>
                 * If the specified permission does not exist in this plugin manager,
                 * nothing will happen.
                 * <p>
                 * Removing a permission registration will <b>not</b> remove the
                 * permission from any {@link Permissible}s that have it.
                 */
                 removePermission(perm: org.bukkit.permissions.Permission): void;
                /**
                 * Removes a {@link Permission} registration from this plugin manager.
                 * <p>
                 * If the specified permission does not exist in this plugin manager,
                 * nothing will happen.
                 * <p>
                 * Removing a permission registration will <b>not</b> remove the
                 * permission from any {@link Permissible}s that have it.
                 */
                 removePermission(name: string): void;
                /**
                 * Gets the default permissions for the given op status
                 */
                 getDefaultPermissions(op: boolean): any[] /*java.util.Set*/;
                /**
                 * Recalculates the defaults for the given {@link Permission}.
                 * <p>
                 * This will have no effect if the specified permission is not registered
                 * here.
                 */
                 recalculatePermissionDefaults(perm: org.bukkit.permissions.Permission): void;
                /**
                 * Subscribes the given Permissible for information about the requested
                 * Permission, by name.
                 * <p>
                 * If the specified Permission changes in any form, the Permissible will
                 * be asked to recalculate.
                 */
                 subscribeToPermission(permission: string, permissible: org.bukkit.permissions.Permissible): void;
                /**
                 * Unsubscribes the given Permissible for information about the requested
                 * Permission, by name.
                 */
                 unsubscribeFromPermission(permission: string, permissible: org.bukkit.permissions.Permissible): void;
                /**
                 * Gets a set containing all subscribed {@link Permissible}s to the given
                 * permission, by name
                 */
                 getPermissionSubscriptions(permission: string): any[] /*java.util.Set*/;
                /**
                 * Subscribes to the given Default permissions by operator status
                 * <p>
                 * If the specified defaults change in any form, the Permissible will be
                 * asked to recalculate.
                 */
                 subscribeToDefaultPerms(op: boolean, permissible: org.bukkit.permissions.Permissible): void;
                /**
                 * Unsubscribes from the given Default permissions by operator status
                 */
                 unsubscribeFromDefaultPerms(op: boolean, permissible: org.bukkit.permissions.Permissible): void;
                /**
                 * Gets a set containing all subscribed {@link Permissible}s to the given
                 * default list, by op status
                 */
                 getDefaultPermSubscriptions(op: boolean): any[] /*java.util.Set*/;
                /**
                 * Gets a set of all registered permissions.
                 * <p>
                 * This set is a copy and will not be modified live.
                 */
                 getPermissions(): any[] /*java.util.Set*/;
                /**
                 * Returns whether or not timing code should be used for event calls
                 */
                 useTimings(): boolean;
            }
        }
    }
}
