// @ts-nocheck
declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class CoalType extends java.lang.Enum {
            // @ts-ignore
            public static COAL: org.bukkit.CoalType;
            // @ts-ignore
            public static CHARCOAL: org.bukkit.CoalType;
            // @ts-ignore
            public static values(): org.bukkit.CoalType[];
            // @ts-ignore
            public static valueOf(name: string): org.bukkit.CoalType;
            /**
             * Gets the associated data value representing this type of coal
             */
            // @ts-ignore
            public getData(): number;
            /**
             * Gets the type of coal with the given data value
             */
            // @ts-ignore
            public static getByData(data: number): org.bukkit.CoalType;
        }
    }
}
