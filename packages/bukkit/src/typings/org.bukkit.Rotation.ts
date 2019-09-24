declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class Rotation {
            public static NONE: org.bukkit.Rotation;
            public static CLOCKWISE_45: org.bukkit.Rotation;
            public static CLOCKWISE: org.bukkit.Rotation;
            public static CLOCKWISE_135: org.bukkit.Rotation;
            public static FLIPPED: org.bukkit.Rotation;
            public static FLIPPED_45: org.bukkit.Rotation;
            public static COUNTER_CLOCKWISE: org.bukkit.Rotation;
            public static COUNTER_CLOCKWISE_45: org.bukkit.Rotation;
            public static values(): org.bukkit.Rotation[];
            public static valueOf(name: string): org.bukkit.Rotation;
            /**
             * Rotate clockwise by 90 degrees.
             */
            public rotateClockwise(): org.bukkit.Rotation;
            /**
             * Rotate counter-clockwise by 90 degrees.
             */
            public rotateCounterClockwise(): org.bukkit.Rotation;
        }
    }
}
