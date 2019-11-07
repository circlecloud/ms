declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class CropState extends java.lang.Enum {
            // @ts-ignore
            public static SEEDED: org.bukkit.CropState;
            // @ts-ignore
            public static GERMINATED: org.bukkit.CropState;
            // @ts-ignore
            public static VERY_SMALL: org.bukkit.CropState;
            // @ts-ignore
            public static SMALL: org.bukkit.CropState;
            // @ts-ignore
            public static MEDIUM: org.bukkit.CropState;
            // @ts-ignore
            public static TALL: org.bukkit.CropState;
            // @ts-ignore
            public static VERY_TALL: org.bukkit.CropState;
            // @ts-ignore
            public static RIPE: org.bukkit.CropState;
            // @ts-ignore
            public static values(): org.bukkit.CropState[];
            // @ts-ignore
            public static valueOf(name: string): org.bukkit.CropState;
            /**
             * Gets the associated data value representing this growth state
             */
            // @ts-ignore
            public getData(): number;
            /**
             * Gets the CropState with the given data value
             */
            // @ts-ignore
            public static getByData(data: number): org.bukkit.CropState;
        }
    }
}
