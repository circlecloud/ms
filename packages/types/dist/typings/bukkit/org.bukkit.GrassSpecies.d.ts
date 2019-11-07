declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class GrassSpecies extends java.lang.Enum {
            // @ts-ignore
            public static DEAD: org.bukkit.GrassSpecies;
            // @ts-ignore
            public static NORMAL: org.bukkit.GrassSpecies;
            // @ts-ignore
            public static FERN_LIKE: org.bukkit.GrassSpecies;
            // @ts-ignore
            public static values(): org.bukkit.GrassSpecies[];
            // @ts-ignore
            public static valueOf(name: string): org.bukkit.GrassSpecies;
            /**
             * Gets the associated data value representing this species
             */
            // @ts-ignore
            public getData(): number;
            /**
             * Gets the GrassSpecies with the given data value
             */
            // @ts-ignore
            public static getByData(data: number): org.bukkit.GrassSpecies;
        }
    }
}
