declare namespace org {
    namespace bukkit {
        class Art {
            public static KEBAB: org.bukkit.Art;
            public static AZTEC: org.bukkit.Art;
            public static ALBAN: org.bukkit.Art;
            public static AZTEC2: org.bukkit.Art;
            public static BOMB: org.bukkit.Art;
            public static PLANT: org.bukkit.Art;
            public static WASTELAND: org.bukkit.Art;
            public static POOL: org.bukkit.Art;
            public static COURBET: org.bukkit.Art;
            public static SEA: org.bukkit.Art;
            public static SUNSET: org.bukkit.Art;
            public static CREEBET: org.bukkit.Art;
            public static WANDERER: org.bukkit.Art;
            public static GRAHAM: org.bukkit.Art;
            public static MATCH: org.bukkit.Art;
            public static BUST: org.bukkit.Art;
            public static STAGE: org.bukkit.Art;
            public static VOID: org.bukkit.Art;
            public static SKULL_AND_ROSES: org.bukkit.Art;
            public static WITHER: org.bukkit.Art;
            public static FIGHTERS: org.bukkit.Art;
            public static POINTER: org.bukkit.Art;
            public static PIGSCENE: org.bukkit.Art;
            public static BURNING_SKULL: org.bukkit.Art;
            public static SKELETON: org.bukkit.Art;
            public static DONKEY_KONG: org.bukkit.Art;
            public static values(): org.bukkit.Art[];
            public static valueOf(name: string): org.bukkit.Art;
            /**
             * Gets the width of the painting, in blocks
             */
            public getBlockWidth(): number;
            /**
             * Gets the height of the painting, in blocks
             */
            public getBlockHeight(): number;
            /**
             * Get the ID of this painting.
             */
            public getId(): number;
            public getKey(): org.bukkit.NamespacedKey;
            /**
             * Get a painting by its numeric ID
             */
            public static getById(id: number): org.bukkit.Art;
            /**
             * Get a painting by its unique name
             * <p>
             * This ignores underscores and capitalization
             */
            public static getByName(name: string): org.bukkit.Art;
        }
    }
}
