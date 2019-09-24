declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class GameMode {
            public static CREATIVE: org.bukkit.GameMode;
            public static SURVIVAL: org.bukkit.GameMode;
            public static ADVENTURE: org.bukkit.GameMode;
            public static SPECTATOR: org.bukkit.GameMode;
            public static values(): org.bukkit.GameMode[];
            public static valueOf(name: string): org.bukkit.GameMode;
            /**
             * Gets the mode value associated with this GameMode
             */
            public getValue(): number;
            /**
             * Gets the GameMode represented by the specified value
             */
            public static getByValue(value: number): org.bukkit.GameMode;
        }
    }
}
