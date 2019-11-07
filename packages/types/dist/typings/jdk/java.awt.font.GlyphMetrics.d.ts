declare namespace java {
    namespace awt {
        namespace font {
            // @ts-ignore
             class GlyphMetrics extends java.lang.Object {
                /**
                 * Constructs a <code>GlyphMetrics</code> object.
                 */
                // @ts-ignore
                constructor(advance: number, bounds: java.awt.geom.Rectangle2D, glyphType: number)
                /**
                 * Constructs a <code>GlyphMetrics</code> object.
                 */
                // @ts-ignore
                constructor(horizontal: boolean, advanceX: number, advanceY: number, bounds: java.awt.geom.Rectangle2D, glyphType: number)
                // @ts-ignore
                public static STANDARD: number;
                // @ts-ignore
                public static LIGATURE: number;
                // @ts-ignore
                public static COMBINING: number;
                // @ts-ignore
                public static COMPONENT: number;
                // @ts-ignore
                public static WHITESPACE: number;
                /**
                 * Returns the advance of the glyph along the baseline (either
                 * horizontal or vertical).
                 */
                // @ts-ignore
                public getAdvance(): number;
                /**
                 * Returns the x-component of the advance of the glyph.
                 */
                // @ts-ignore
                public getAdvanceX(): number;
                /**
                 * Returns the y-component of the advance of the glyph.
                 */
                // @ts-ignore
                public getAdvanceY(): number;
                /**
                 * Returns the bounds of the glyph. This is the bounding box of the glyph outline.
                 * Because of rasterization and pixel alignment effects, it does not necessarily
                 * enclose the pixels that are affected when rendering the glyph.
                 */
                // @ts-ignore
                public getBounds2D(): java.awt.geom.Rectangle2D;
                /**
                 * Returns the left (top) side bearing of the glyph.
                 * <p>
                 * This is the distance from 0,&nbsp;0 to the left (top) of the glyph
                 * bounds.  If the bounds of the glyph is to the left of (above) the
                 * origin, the LSB is negative.
                 */
                // @ts-ignore
                public getLSB(): number;
                /**
                 * Returns the right (bottom) side bearing of the glyph.
                 * <p>
                 * This is the distance from the right (bottom) of the glyph bounds to
                 * the advance. If the bounds of the glyph is to the right of (below)
                 * the advance, the RSB is negative.
                 */
                // @ts-ignore
                public getRSB(): number;
                /**
                 * Returns the raw glyph type code.
                 */
                // @ts-ignore
                public getType(): number;
                /**
                 * Returns <code>true</code> if this is a standard glyph.
                 */
                // @ts-ignore
                public isStandard(): boolean;
                /**
                 * Returns <code>true</code> if this is a ligature glyph.
                 */
                // @ts-ignore
                public isLigature(): boolean;
                /**
                 * Returns <code>true</code> if this is a combining glyph.
                 */
                // @ts-ignore
                public isCombining(): boolean;
                /**
                 * Returns <code>true</code> if this is a component glyph.
                 */
                // @ts-ignore
                public isComponent(): boolean;
                /**
                 * Returns <code>true</code> if this is a whitespace glyph.
                 */
                // @ts-ignore
                public isWhitespace(): boolean;
            }
        }
    }
}
