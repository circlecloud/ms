declare namespace org {
    namespace bukkit {
        class WorldType {
            public static NORMAL: org.bukkit.WorldType;
            public static FLAT: org.bukkit.WorldType;
            public static VERSION_1_1: org.bukkit.WorldType;
            public static LARGE_BIOMES: org.bukkit.WorldType;
            public static AMPLIFIED: org.bukkit.WorldType;
            public static CUSTOMIZED: org.bukkit.WorldType;
            public static BUFFET: org.bukkit.WorldType;
            public static values(): org.bukkit.WorldType[];
            public static valueOf(name: string): org.bukkit.WorldType;
            /**
             * Gets the name of this WorldType
             */
            public getName(): string;
            /**
             * Gets a WorldType by its name
             */
            public static getByName(name: string): org.bukkit.WorldType;
        }
    }
}
