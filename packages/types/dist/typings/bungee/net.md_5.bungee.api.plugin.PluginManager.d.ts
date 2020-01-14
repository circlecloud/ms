declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace plugin {
                    // @ts-ignore
                     class PluginManager extends java.lang.Object {
                        // @ts-ignore
                        constructor(proxy: net.md_5.bungee.api.ProxyServer)
                        /**
                         * Register a command so that it may be executed.
                         */
                        // @ts-ignore
                        public registerCommand(plugin: net.md_5.bungee.api.plugin.Plugin, command: net.md_5.bungee.api.plugin.Command): void;
                        /**
                         * Unregister a command so it will no longer be executed.
                         */
                        // @ts-ignore
                        public unregisterCommand(command: net.md_5.bungee.api.plugin.Command): void;
                        /**
                         * Unregister all commands owned by a {@link Plugin}
                         */
                        // @ts-ignore
                        public unregisterCommands(plugin: net.md_5.bungee.api.plugin.Plugin): void;
                        /**
                         * Checks if the command is registered and can possibly be executed by the
                         * sender (without taking permissions into account).
                         */
                        // @ts-ignore
                        public isExecutableCommand(commandName: string, sender: net.md_5.bungee.api.CommandSender): boolean;
                        // @ts-ignore
                        public dispatchCommand(sender: net.md_5.bungee.api.CommandSender, commandLine: string): boolean;
                        /**
                         * Execute a command if it is registered, else return false.
                         */
                        // @ts-ignore
                        public dispatchCommand(sender: net.md_5.bungee.api.CommandSender, commandLine: string, tabResults: java.util.List): boolean;
                        /**
                         * Returns the {@link Plugin} objects corresponding to all loaded plugins.
                         */
                        // @ts-ignore
                        public getPlugins(): java.util.Collection;
                        /**
                         * Returns a loaded plugin identified by the specified name.
                         */
                        // @ts-ignore
                        public getPlugin(name: string): net.md_5.bungee.api.plugin.Plugin;
                        // @ts-ignore
                        public loadPlugins(): void;
                        // @ts-ignore
                        public enablePlugins(): void;
                        /**
                         * Load all plugins from the specified folder.
                         */
                        // @ts-ignore
                        public detectPlugins(folder: java.io.File): void;
                        /**
                         * Dispatch an event to all subscribed listeners and return the event once
                         * it has been handled by these listeners.
                         */
                        // @ts-ignore
                        public callEvent(event: net.md_5.bungee.api.plugin.Event): net.md_5.bungee.api.plugin.Event;
                        /**
                         * Register a {@link Listener} for receiving called events. Methods in this
                         * Object which wish to receive events must be annotated with the
                         * {@link EventHandler} annotation.
                         */
                        // @ts-ignore
                        public registerListener(plugin: net.md_5.bungee.api.plugin.Plugin, listener: net.md_5.bungee.api.plugin.Listener): void;
                        /**
                         * Unregister a {@link Listener} so that the events do not reach it anymore.
                         */
                        // @ts-ignore
                        public unregisterListener(listener: net.md_5.bungee.api.plugin.Listener): void;
                        /**
                         * Unregister all of a Plugin's listener.
                         */
                        // @ts-ignore
                        public unregisterListeners(plugin: net.md_5.bungee.api.plugin.Plugin): void;
                        /**
                         * Get an unmodifiable collection of all registered commands.
                         */
                        // @ts-ignore
                        public getCommands(): java.util.Collection;
                    }
                }
            }
        }
    }
}
