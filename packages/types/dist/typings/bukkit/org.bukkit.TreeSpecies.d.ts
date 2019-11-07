declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class TreeSpecies extends java.lang.Enum {
            // @ts-ignore
            public static GENERIC: org.bukkit.TreeSpecies;
            // @ts-ignore
            public static REDWOOD: org.bukkit.TreeSpecies;
            // @ts-ignore
            public static BIRCH: org.bukkit.TreeSpecies;
            // @ts-ignore
            public static JUNGLE: org.bukkit.TreeSpecies;
            // @ts-ignore
            public static ACACIA: org.bukkit.TreeSpecies;
            // @ts-ignore
            public static DARK_OAK: org.bukkit.TreeSpecies;
            // @ts-ignore
            public static values(): org.bukkit.TreeSpecies[];
            // @ts-ignore
            public static valueOf(name: string): org.bukkit.TreeSpecies;
            /**
             * Gets the associated data value representing this species
             */
            // @ts-ignore
            public getData(): number;
            /**
             * Gets the TreeSpecies with the given data value
             */
            // @ts-ignore
            public static getByData(data: number): org.bukkit.TreeSpecies;
        }
    }
}
