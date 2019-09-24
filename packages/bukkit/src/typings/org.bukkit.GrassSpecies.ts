declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class GrassSpecies {
            public static DEAD: org.bukkit.GrassSpecies;
            public static NORMAL: org.bukkit.GrassSpecies;
            public static FERN_LIKE: org.bukkit.GrassSpecies;
            public static values(): org.bukkit.GrassSpecies[];
            public static valueOf(name: string): org.bukkit.GrassSpecies;
            /**
             * Gets the associated data value representing this species
             */
            public getData(): number;
            /**
             * Gets the GrassSpecies with the given data value
             */
            public static getByData(data: number): org.bukkit.GrassSpecies;
        }
    }
}
