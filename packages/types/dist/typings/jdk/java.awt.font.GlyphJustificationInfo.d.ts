declare namespace java {
    namespace awt {
        namespace font {
            // @ts-ignore
             class GlyphJustificationInfo extends java.lang.Object {
                /**
                 * Constructs information about the justification properties of a
                 * glyph.
                 */
                // @ts-ignore
                constructor(weight: number, growAbsorb: boolean, growPriority: number, growLeftLimit: number, growRightLimit: number, shrinkAbsorb: boolean, shrinkPriority: number, shrinkLeftLimit: number, shrinkRightLimit: number)
                // @ts-ignore
                public static PRIORITY_KASHIDA: number;
                // @ts-ignore
                public static PRIORITY_WHITESPACE: number;
                // @ts-ignore
                public static PRIORITY_INTERCHAR: number;
                // @ts-ignore
                public static PRIORITY_NONE: number;
                // @ts-ignore
                public weight: number;
                // @ts-ignore
                public growPriority: number;
                // @ts-ignore
                public growAbsorb: boolean;
                // @ts-ignore
                public growLeftLimit: number;
                // @ts-ignore
                public growRightLimit: number;
                // @ts-ignore
                public shrinkPriority: number;
                // @ts-ignore
                public shrinkAbsorb: boolean;
                // @ts-ignore
                public shrinkLeftLimit: number;
                // @ts-ignore
                public shrinkRightLimit: number;
            }
        }
    }
}
