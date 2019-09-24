declare namespace org {
    namespace bukkit {
        namespace event {
            // @ts-ignore
             class EventPriority {
                public static LOWEST: org.bukkit.event.EventPriority;
                public static LOW: org.bukkit.event.EventPriority;
                public static NORMAL: org.bukkit.event.EventPriority;
                public static HIGH: org.bukkit.event.EventPriority;
                public static HIGHEST: org.bukkit.event.EventPriority;
                public static MONITOR: org.bukkit.event.EventPriority;
                public static values(): org.bukkit.event.EventPriority[];
                public static valueOf(name: string): org.bukkit.event.EventPriority;
                public getSlot(): number;
            }
        }
    }
}
