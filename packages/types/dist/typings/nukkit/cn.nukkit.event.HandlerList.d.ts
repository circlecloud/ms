declare namespace cn {
    namespace nukkit {
        namespace event {
            // @ts-ignore
             class HandlerList extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static bakeAll(): void;
                // @ts-ignore
                public static unregisterAll(): void;
                // @ts-ignore
                public static unregisterAll(plugin: cn.nukkit.plugin.Plugin): void;
                // @ts-ignore
                public static unregisterAll(listener: cn.nukkit.event.Listener): void;
                // @ts-ignore
                public register(listener: cn.nukkit.plugin.RegisteredListener): void;
                // @ts-ignore
                public registerAll(listeners: java.util.Collection): void;
                // @ts-ignore
                public unregister(listener: cn.nukkit.plugin.RegisteredListener): void;
                // @ts-ignore
                public unregister(plugin: cn.nukkit.plugin.Plugin): void;
                // @ts-ignore
                public unregister(listener: cn.nukkit.event.Listener): void;
                // @ts-ignore
                public bake(): void;
                // @ts-ignore
                public getRegisteredListeners(): cn.nukkit.plugin.RegisteredListener[];
                // @ts-ignore
                public static getRegisteredListeners(plugin: cn.nukkit.plugin.Plugin): java.util.ArrayList;
                // @ts-ignore
                public static getHandlerLists(): java.util.ArrayList;
            }
        }
    }
}
