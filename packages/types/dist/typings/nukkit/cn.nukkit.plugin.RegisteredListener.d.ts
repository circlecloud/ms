declare namespace cn {
    namespace nukkit {
        namespace plugin {
            // @ts-ignore
             class RegisteredListener extends java.lang.Object {
                // @ts-ignore
                constructor(listener: cn.nukkit.event.Listener, executor: cn.nukkit.plugin.EventExecutor, priority: cn.nukkit.event.EventPriority, plugin: cn.nukkit.plugin.Plugin, ignoreCancelled: boolean, timing: any /*co.aikar.timings.Timing*/)
                // @ts-ignore
                public getListener(): cn.nukkit.event.Listener;
                // @ts-ignore
                public getPlugin(): cn.nukkit.plugin.Plugin;
                // @ts-ignore
                public getPriority(): cn.nukkit.event.EventPriority;
                // @ts-ignore
                public callEvent(event: cn.nukkit.event.Event): void;
                // @ts-ignore
                public isIgnoringCancelled(): boolean;
            }
        }
    }
}
