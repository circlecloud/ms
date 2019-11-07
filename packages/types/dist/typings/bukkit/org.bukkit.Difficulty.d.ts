declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class Difficulty extends java.lang.Enum {
            // @ts-ignore
            public static PEACEFUL: org.bukkit.Difficulty;
            // @ts-ignore
            public static EASY: org.bukkit.Difficulty;
            // @ts-ignore
            public static NORMAL: org.bukkit.Difficulty;
            // @ts-ignore
            public static HARD: org.bukkit.Difficulty;
            // @ts-ignore
            public static values(): org.bukkit.Difficulty[];
            // @ts-ignore
            public static valueOf(name: string): org.bukkit.Difficulty;
            /**
             * Gets the difficulty value associated with this Difficulty.
             */
            // @ts-ignore
            public getValue(): number;
            /**
             * Gets the Difficulty represented by the specified value
             */
            // @ts-ignore
            public static getByValue(value: number): org.bukkit.Difficulty;
        }
    }
}
