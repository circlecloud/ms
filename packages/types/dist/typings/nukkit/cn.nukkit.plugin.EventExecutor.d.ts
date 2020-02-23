declare namespace cn {
    namespace nukkit {
        namespace plugin {
            // @ts-ignore
            interface EventExecutor {
                // @ts-ignore
                 execute(listener: cn.nukkit.event.Listener, event: cn.nukkit.event.Event): void;
            }
        }
    }
}
