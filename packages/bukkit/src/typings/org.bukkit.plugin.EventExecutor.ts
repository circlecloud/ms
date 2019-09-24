declare namespace org {
    namespace bukkit {
        namespace plugin {
            // @ts-ignore
            interface EventExecutor {
                 execute(listener: org.bukkit.event.Listener, event: org.bukkit.event.Event): void;
            }
        }
    }
}
