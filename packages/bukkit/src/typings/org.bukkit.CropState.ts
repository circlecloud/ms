declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class CropState {
            public static SEEDED: org.bukkit.CropState;
            public static GERMINATED: org.bukkit.CropState;
            public static VERY_SMALL: org.bukkit.CropState;
            public static SMALL: org.bukkit.CropState;
            public static MEDIUM: org.bukkit.CropState;
            public static TALL: org.bukkit.CropState;
            public static VERY_TALL: org.bukkit.CropState;
            public static RIPE: org.bukkit.CropState;
            public static values(): org.bukkit.CropState[];
            public static valueOf(name: string): org.bukkit.CropState;
            /**
             * Gets the associated data value representing this growth state
             */
            public getData(): number;
            /**
             * Gets the CropState with the given data value
             */
            public static getByData(data: number): org.bukkit.CropState;
        }
    }
}
