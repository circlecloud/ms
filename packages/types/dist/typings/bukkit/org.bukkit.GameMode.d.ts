// @ts-nocheck
declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class GameMode extends java.lang.Enum {
            // @ts-ignore
            public static CREATIVE: org.bukkit.GameMode;
            // @ts-ignore
            public static SURVIVAL: org.bukkit.GameMode;
            // @ts-ignore
            public static ADVENTURE: org.bukkit.GameMode;
            // @ts-ignore
            public static SPECTATOR: org.bukkit.GameMode;
            // @ts-ignore
            public static values(): org.bukkit.GameMode[];
            // @ts-ignore
            public static valueOf(name: string): org.bukkit.GameMode;
            /**
             * Gets the mode value associated with this GameMode
             */
            // @ts-ignore
            public getValue(): number;
            /**
             * Gets the GameMode represented by the specified value
             */
            // @ts-ignore
            public static getByValue(value: number): org.bukkit.GameMode;
        }
    }
}
