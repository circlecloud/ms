declare namespace org {
    namespace bukkit {
        class PortalType {
            public static NETHER: org.bukkit.PortalType;
            public static ENDER: org.bukkit.PortalType;
            public static CUSTOM: org.bukkit.PortalType;
            public static values(): org.bukkit.PortalType[];
            public static valueOf(name: string): org.bukkit.PortalType;
        }
    }
}
