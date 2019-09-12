declare namespace org {
    namespace bukkit {
        namespace plugin {
            class ServicePriority {
                public static Lowest: org.bukkit.plugin.ServicePriority;
                public static Low: org.bukkit.plugin.ServicePriority;
                public static Normal: org.bukkit.plugin.ServicePriority;
                public static High: org.bukkit.plugin.ServicePriority;
                public static Highest: org.bukkit.plugin.ServicePriority;
                public static values(): org.bukkit.plugin.ServicePriority[];
                public static valueOf(name: string): org.bukkit.plugin.ServicePriority;
            }
        }
    }
}
