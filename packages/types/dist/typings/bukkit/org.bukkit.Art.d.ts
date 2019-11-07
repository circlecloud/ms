declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class Art extends java.lang.Enum implements org.bukkit.Keyed {
            // @ts-ignore
            public static KEBAB: org.bukkit.Art;
            // @ts-ignore
            public static AZTEC: org.bukkit.Art;
            // @ts-ignore
            public static ALBAN: org.bukkit.Art;
            // @ts-ignore
            public static AZTEC2: org.bukkit.Art;
            // @ts-ignore
            public static BOMB: org.bukkit.Art;
            // @ts-ignore
            public static PLANT: org.bukkit.Art;
            // @ts-ignore
            public static WASTELAND: org.bukkit.Art;
            // @ts-ignore
            public static POOL: org.bukkit.Art;
            // @ts-ignore
            public static COURBET: org.bukkit.Art;
            // @ts-ignore
            public static SEA: org.bukkit.Art;
            // @ts-ignore
            public static SUNSET: org.bukkit.Art;
            // @ts-ignore
            public static CREEBET: org.bukkit.Art;
            // @ts-ignore
            public static WANDERER: org.bukkit.Art;
            // @ts-ignore
            public static GRAHAM: org.bukkit.Art;
            // @ts-ignore
            public static MATCH: org.bukkit.Art;
            // @ts-ignore
            public static BUST: org.bukkit.Art;
            // @ts-ignore
            public static STAGE: org.bukkit.Art;
            // @ts-ignore
            public static VOID: org.bukkit.Art;
            // @ts-ignore
            public static SKULL_AND_ROSES: org.bukkit.Art;
            // @ts-ignore
            public static WITHER: org.bukkit.Art;
            // @ts-ignore
            public static FIGHTERS: org.bukkit.Art;
            // @ts-ignore
            public static POINTER: org.bukkit.Art;
            // @ts-ignore
            public static PIGSCENE: org.bukkit.Art;
            // @ts-ignore
            public static BURNING_SKULL: org.bukkit.Art;
            // @ts-ignore
            public static SKELETON: org.bukkit.Art;
            // @ts-ignore
            public static DONKEY_KONG: org.bukkit.Art;
            // @ts-ignore
            public static values(): org.bukkit.Art[];
            // @ts-ignore
            public static valueOf(name: string): org.bukkit.Art;
            /**
             * Gets the width of the painting, in blocks
             */
            // @ts-ignore
            public getBlockWidth(): number;
            /**
             * Gets the height of the painting, in blocks
             */
            // @ts-ignore
            public getBlockHeight(): number;
            /**
             * Get the ID of this painting.
             */
            // @ts-ignore
            public getId(): number;
            // @ts-ignore
            public getKey(): org.bukkit.NamespacedKey;
            /**
             * Get a painting by its numeric ID
             */
            // @ts-ignore
            public static getById(id: number): org.bukkit.Art;
            /**
             * Get a painting by its unique name
             * <p>
             * This ignores underscores and capitalization
             */
            // @ts-ignore
            public static getByName(name: string): org.bukkit.Art;
        }
    }
}
