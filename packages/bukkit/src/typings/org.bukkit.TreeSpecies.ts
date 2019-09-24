declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class TreeSpecies {
            public static GENERIC: org.bukkit.TreeSpecies;
            public static REDWOOD: org.bukkit.TreeSpecies;
            public static BIRCH: org.bukkit.TreeSpecies;
            public static JUNGLE: org.bukkit.TreeSpecies;
            public static ACACIA: org.bukkit.TreeSpecies;
            public static DARK_OAK: org.bukkit.TreeSpecies;
            public static values(): org.bukkit.TreeSpecies[];
            public static valueOf(name: string): org.bukkit.TreeSpecies;
            /**
             * Gets the associated data value representing this species
             */
            public getData(): number;
            /**
             * Gets the TreeSpecies with the given data value
             */
            public static getByData(data: number): org.bukkit.TreeSpecies;
        }
    }
}
