declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class Rotation extends java.lang.Enum {
            // @ts-ignore
            public static NONE: org.bukkit.Rotation;
            // @ts-ignore
            public static CLOCKWISE_45: org.bukkit.Rotation;
            // @ts-ignore
            public static CLOCKWISE: org.bukkit.Rotation;
            // @ts-ignore
            public static CLOCKWISE_135: org.bukkit.Rotation;
            // @ts-ignore
            public static FLIPPED: org.bukkit.Rotation;
            // @ts-ignore
            public static FLIPPED_45: org.bukkit.Rotation;
            // @ts-ignore
            public static COUNTER_CLOCKWISE: org.bukkit.Rotation;
            // @ts-ignore
            public static COUNTER_CLOCKWISE_45: org.bukkit.Rotation;
            // @ts-ignore
            public static values(): org.bukkit.Rotation[];
            // @ts-ignore
            public static valueOf(name: string): org.bukkit.Rotation;
            /**
             * Rotate clockwise by 90 degrees.
             */
            // @ts-ignore
            public rotateClockwise(): org.bukkit.Rotation;
            /**
             * Rotate counter-clockwise by 90 degrees.
             */
            // @ts-ignore
            public rotateCounterClockwise(): org.bukkit.Rotation;
        }
    }
}
