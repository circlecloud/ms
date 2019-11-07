// @ts-nocheck
declare namespace java {
    namespace time {
        namespace format {
            // @ts-ignore
             class TextStyle extends java.lang.Enum {
                // @ts-ignore
                public static FULL: java.time.format.TextStyle;
                // @ts-ignore
                public static FULL_STANDALONE: java.time.format.TextStyle;
                // @ts-ignore
                public static SHORT: java.time.format.TextStyle;
                // @ts-ignore
                public static SHORT_STANDALONE: java.time.format.TextStyle;
                // @ts-ignore
                public static NARROW: java.time.format.TextStyle;
                // @ts-ignore
                public static NARROW_STANDALONE: java.time.format.TextStyle;
                // @ts-ignore
                public static values(): java.time.format.TextStyle[];
                // @ts-ignore
                public static valueOf(name: string): java.time.format.TextStyle;
                /**
                 * Returns true if the Style is a stand-alone style.
                 */
                // @ts-ignore
                public isStandalone(): boolean;
                /**
                 * Returns the stand-alone style with the same size.
                 */
                // @ts-ignore
                public asStandalone(): java.time.format.TextStyle;
                /**
                 * Returns the normal style with the same size.
                 */
                // @ts-ignore
                public asNormal(): java.time.format.TextStyle;
            }
        }
    }
}
