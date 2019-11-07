// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace plugin {
            // @ts-ignore
            interface PluginManager {
                /**
                 * Registers the specified plugin loader
                 */
                // @ts-ignore
                 registerInterface(loader: java.lang.Class): void;
                /**
                 * Checks if the given plugin is loaded and returns it when applicable
                 * <p>
                 * Please note that the name of the plugin is case-sensitive
                 */
                // @ts-ignore
                 getPlugin(name: string): org.bukkit.plugin.Plugin;
                /**
                 * Gets a list of all currently loaded plugins
                 */
                // @ts-ignore
                 getPlugins(): org.bukkit.plugin.Plugin[];
                /**
                 * Checks if the given plugin is enabled or not
                 * <p>
                 * Please note that the name of the plugin is case-sensitive.
                 */
                // @ts-ignore
                 isPluginEnabled(name: string): boolean;
                /**
                 * Checks if the given plugin is enabled or not
                 */
                // @ts-ignore
                 isPluginEnabled(plugin: org.bukkit.plugin.Plugin): boolean;
                /**
                 * Loads the plugin in the specified file
                 * <p>
                 * File must be valid according to the current enabled Plugin interfaces
                 */
                // @ts-ignore
                 loadPlugin(file: java.io.File): org.bukkit.plugin.Plugin;
                /**
                 * Loads the plugins contained within the specified directory
                 */
                // @ts-ignore
                 loadPlugins(directory: java.io.File): org.bukkit.plugin.Plugin[];
                /**
                 * Disables all the loaded plugins
                 */
                // @ts-ignore
                 disablePlugins(): void;
                /**
                 * Disables and removes all plugins
                 */
                // @ts-ignore
                 clearPlugins(): void;
                /**
                 * Calls an event with the given details
                 */
                // @ts-ignore
                 callEvent(event: org.bukkit.event.Event): void;
                /**
                 * Registers all the events in the given listener class
                 */
                // @ts-ignore
                 registerEvents(listener: org.bukkit.event.Listener, plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Registers the specified executor to the given event class
                 */
                // @ts-ignore
                 registerEvent(event: java.lang.Class, listener: org.bukkit.event.Listener, priority: org.bukkit.event.EventPriority, executor: org.bukkit.plugin.EventExecutor, plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Registers the specified executor to the given event class
                 */
                // @ts-ignore
                 registerEvent(event: java.lang.Class, listener: org.bukkit.event.Listener, priority: org.bukkit.event.EventPriority, executor: org.bukkit.plugin.EventExecutor, plugin: org.bukkit.plugin.Plugin, ignoreCancelled: boolean): void;
                /**
                 * Enables the specified plugin
                 * <p>
                 * Attempting to enable a plugin that is already enabled will have no
                 * effect
                 */
                // @ts-ignore
                 enablePlugin(plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Disables the specified plugin
                 * <p>
                 * Attempting to disable a plugin that is not enabled will have no effect
                 */
                // @ts-ignore
                 disablePlugin(plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Gets a {@link Permission} from its fully qualified name
                 */
                // @ts-ignore
                 getPermission(name: string): org.bukkit.permissions.Permission;
                /**
                 * Adds a {@link Permission} to this plugin manager.
                 * <p>
                 * If a permission is already defined with the given name of the new
                 * permission, an exception will be thrown.
                 */
                // @ts-ignore
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
                // @ts-ignore
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
                // @ts-ignore
                 removePermission(name: string): void;
                /**
                 * Gets the default permissions for the given op status
                 */
                // @ts-ignore
                 getDefaultPermissions(op: boolean): java.util.Set;
                /**
                 * Recalculates the defaults for the given {@link Permission}.
                 * <p>
                 * This will have no effect if the specified permission is not registered
                 * here.
                 */
                // @ts-ignore
                 recalculatePermissionDefaults(perm: org.bukkit.permissions.Permission): void;
                /**
                 * Subscribes the given Permissible for information about the requested
                 * Permission, by name.
                 * <p>
                 * If the specified Permission changes in any form, the Permissible will
                 * be asked to recalculate.
                 */
                // @ts-ignore
                 subscribeToPermission(permission: string, permissible: org.bukkit.permissions.Permissible): void;
                /**
                 * Unsubscribes the given Permissible for information about the requested
                 * Permission, by name.
                 */
                // @ts-ignore
                 unsubscribeFromPermission(permission: string, permissible: org.bukkit.permissions.Permissible): void;
                /**
                 * Gets a set containing all subscribed {@link Permissible}s to the given
                 * permission, by name
                 */
                // @ts-ignore
                 getPermissionSubscriptions(permission: string): java.util.Set;
                /**
                 * Subscribes to the given Default permissions by operator status
                 * <p>
                 * If the specified defaults change in any form, the Permissible will be
                 * asked to recalculate.
                 */
                // @ts-ignore
                 subscribeToDefaultPerms(op: boolean, permissible: org.bukkit.permissions.Permissible): void;
                /**
                 * Unsubscribes from the given Default permissions by operator status
                 */
                // @ts-ignore
                 unsubscribeFromDefaultPerms(op: boolean, permissible: org.bukkit.permissions.Permissible): void;
                /**
                 * Gets a set containing all subscribed {@link Permissible}s to the given
                 * default list, by op status
                 */
                // @ts-ignore
                 getDefaultPermSubscriptions(op: boolean): java.util.Set;
                /**
                 * Gets a set of all registered permissions.
                 * <p>
                 * This set is a copy and will not be modified live.
                 */
                // @ts-ignore
                 getPermissions(): java.util.Set;
                /**
                 * Returns whether or not timing code should be used for event calls
                 */
                // @ts-ignore
                 useTimings(): boolean;
            }
        }
    }
}
