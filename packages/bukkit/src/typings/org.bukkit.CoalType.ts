declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class CoalType {
            public static COAL: org.bukkit.CoalType;
            public static CHARCOAL: org.bukkit.CoalType;
            public static values(): org.bukkit.CoalType[];
            public static valueOf(name: string): org.bukkit.CoalType;
            /**
             * Gets the associated data value representing this type of coal
             */
            public getData(): number;
            /**
             * Gets the type of coal with the given data value
             */
            public static getByData(data: number): org.bukkit.CoalType;
        }
    }
}
