declare namespace org {
    namespace bukkit {
        namespace event {
            namespace Event {
                class Result {
                    public static DENY: org.bukkit.event.Event.Result;
                    public static DEFAULT: org.bukkit.event.Event.Result;
                    public static ALLOW: org.bukkit.event.Event.Result;
                    public static values(): org.bukkit.event.Event.Result[];
                    public static valueOf(name: string): org.bukkit.event.Event.Result;
                }
            }
        }
    }
}
