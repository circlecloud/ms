declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class Difficulty {
            public static PEACEFUL: org.bukkit.Difficulty;
            public static EASY: org.bukkit.Difficulty;
            public static NORMAL: org.bukkit.Difficulty;
            public static HARD: org.bukkit.Difficulty;
            public static values(): org.bukkit.Difficulty[];
            public static valueOf(name: string): org.bukkit.Difficulty;
            /**
             * Gets the difficulty value associated with this Difficulty.
             */
            public getValue(): number;
            /**
             * Gets the Difficulty represented by the specified value
             */
            public static getByValue(value: number): org.bukkit.Difficulty;
        }
    }
}
